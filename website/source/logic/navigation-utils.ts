import type { SlDialog, SlDropdown } from '@shoelace-types';

import { show } from './dom-utils.ts';
import { getParagraphNumber } from './routing.ts';
import { $showCrossReferencePanel } from './state/cross-reference-panel.ts';
import {
    disableHistoryUpdates as disableReadingAreaIntersectableHistoryUpdates,
    updateReadingAreaIntersectionObservers,
    validateElementsInReadingArea,
} from './state/reading-area.ts';
import { setToolbarVisibility, updateToolbarForNonContentRoute } from './toolbar.ts';
import { ElementClass, ElementID } from './ui.ts';
import { debounce } from './utils.ts';

type HtmxEvent = Event & {
    // deno-lint-ignore no-explicit-any
    detail?: any;
};

export function watchForHtmxEvents(): void {
    document.addEventListener('htmx:afterSwap', (e: HtmxEvent) => {
        if (e?.detail?.successful) {
            validateElementsInReadingArea();
            updateReadingAreaIntersectionObservers();
            updateToolbarForNonContentRoute(globalThis.location.pathname);

            const targetID = e?.detail?.target?.id;
            if (targetID === ElementID.CONTENT_WRAPPER) {
                handleMainContentSwap();
            } else if (targetID === ElementID.CROSS_REFERENCE_PANEL) {
                handleCrossReferencePanelSwap();
            } else if (targetID === ElementID.INFINITE_SCROLL_BACKWARD_INITIAL_TARGET) {
                handleFirstInfiniteScrollBackward();
            }
        }
    });
}

export function respondToFirstPageLoad(): void {
    /*
    Scroll to the paragraph number at the end of the URL only when the page
    is initially loaded (not on a refresh or back/forward navigation event)
    */
    const event = globalThis.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const initialLoad = 'navigate' === event?.type;
    if (initialLoad) {
        autoScroll();
    }

    updateToolbarForNonContentRoute(globalThis.location.pathname);
}

export function preventInfiniteBackwardScrollBug(): void {
    function preventScrollToTop(): void {
        if (globalThis.scrollY === 0) {
            globalThis.scrollTo({ top: 1 });
        }
    }

    const debouncedHandler = debounce(() => preventScrollToTop(), 10);

    document.addEventListener('scroll', () => {
        debouncedHandler();
    });
}

/**
 * Perform these actions only when content has been swapped into the
 * main content area, as this event has the appearance of a navigation event.
 */
function handleMainContentSwap(): void {
    autoScroll();
    hideSearchMenu();
    hideNavigationMenu();
    setToolbarVisibility();
    $showCrossReferencePanel.set(false);
}

/**
 * Auto-scroll to the anchor tag specified by the URL hash,
 * or if there is no URL hash, auto-scroll to the top of the page.
 */
function autoScroll(): void {
    /* Prevent the reading-area intersection observers from updating the browser's history and
    URL while automatically scrolling on the page, as allowing it results in buggy behavior.
    1000 milliseconds is merely a best-guess value for the maximum amount of time
    that auto-scrolling may take (this guess should be as small as is reasonable). */
    disableReadingAreaIntersectableHistoryUpdates(1000);

    const hash = globalThis.location.hash;
    if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
        const paragraphNumber = getParagraphNumber(globalThis.location.href);
        if (paragraphNumber) {
            document.getElementById(paragraphNumber + '')?.scrollIntoView();
        } else {
            globalThis.scrollTo({ top: 0 });
        }
    }
}

function hideNavigationMenu(): void {
    const dropdown: SlDropdown | null = document.querySelector(ElementID.TOOLBAR_TABLE_OF_CONTENTS_SELECTOR);
    dropdown?.hide();
}

function hideSearchMenu(): void {
    const dialog: SlDialog | null = document.querySelector(ElementID.SEARCH_DIALOG_SELECTOR);
    dialog?.hide();
}

function handleCrossReferencePanelSwap(): void {
    // Scroll the cross-reference panel to the top, in case it had been scroll down for previous content
    const panel = document.getElementById(ElementID.CROSS_REFERENCE_PANEL);
    if (panel) {
        panel.scrollTop = 0;
    }
}

/**
 * This performs a few operations for the first time that content is
 * loaded via the infinite scroll mechanism in the backward direction
 * to ensure a smooth visual experience.
 */
function handleFirstInfiniteScrollBackward(): void {
    globalThis.requestAnimationFrame(() => {
        const newContent = document.querySelector(ElementClass.INFINITE_SCROLL_BACKWARD_INITIAL_CONTENT_SELECTOR);

        if (newContent) {
            const scrollBackwardActivator = document.getElementById(ElementID.INFINITE_SCROLL_BACKWARD_ACTIVATOR_CONTAINER);

            globalThis.requestAnimationFrame(() => {
                show(newContent);

                const originalContent = scrollBackwardActivator?.closest(ElementClass.CATECHISM_CONTENT_BLOCK_SELECTOR);
                if (originalContent) {
                    originalContent.scrollIntoView({ block: 'start', behavior: 'instant' });

                    const marginTopRaw = globalThis.getComputedStyle(originalContent).marginTop;
                    const marginTopPixels = Number(marginTopRaw.replace('px', ''));
                    const offset = -1 * (marginTopPixels ? marginTopPixels : 0);
                    globalThis.scrollBy(0, offset);
                }
            });

            /* It was determined experimentally that `setTimeout()` is necessary to
            prevent certain mobile browsers from jumping to the top of the new content */
            setTimeout(() => {
                // Now this scroll effect brings a small amount of the new content into view
                globalThis.scroll({
                    top: globalThis.scrollY + newContent.getBoundingClientRect().bottom - 150,
                    behavior: 'smooth',
                });
            }, 50);

            /*
            Fade-out and then remove the backward-scroll activator.

            `setTimeout()` is used to prevent a flicker of the element — this was
            determined to work experimentally, whereas `requestAnimationFrame()` did not work.
            */
            setTimeout(() => {
                scrollBackwardActivator?.classList.add('transition-opacity', 'opacity-0', 'duration-1000');
                setTimeout(() => scrollBackwardActivator?.remove(), 1200);
            }, 100);
        }
    });
}
