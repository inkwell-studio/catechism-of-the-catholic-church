import type { SlDropdown } from '@shoelace-types';

import { show } from './dom-utils.ts';
import { getParagraphNumber } from './routing.ts';
import { $showCrossReferencePanel } from './state/cross-reference-panel.ts';
import { respondToReadingAreaIntersectionEvent } from './state/reading-area.ts';
import { ElementClass, ElementID } from './ui.ts';

type HtmxEvent = Event & {
    // deno-lint-ignore no-explicit-any
    detail?: any;
};

let readingAreaIntersectionObservers: Array<IntersectionObserver> = [];

/**
 * @returns a new path constructed constructed from the segments.
 * Doubled slashes are de-duplicated, and the returned value never ends with a slash.
 */
export function path(...segments: Array<string | number>): string {
    // Change all numbers to strings, and remove empty stirngs
    segments = segments
        .map((s) => '' + s)
        .filter((s) => !!s);

    if (0 === segments.length) {
        return '';
    }

    return [...segments, '/'].join('/')
        // De-duplicate slashes
        .replaceAll(/\/{2,}/g, '/')
        // Remove any slash that precedes the hash
        .replace(/\/+#/, '#')
        // Remove the trailing slash if it's not the root path
        .replace(/(?<=.+)\/+$/, '');
}

export function respondToHtmxEvents(): void {
    document.addEventListener('htmx:afterSwap', (e: HtmxEvent) => {
        if (e?.detail?.successful) {
            const targetID = e?.detail?.target?.id;

            readingAreaIntersectionObservers = updateReadingAreaIntersectionObservers();

            /*
            Perform some automated UI actions only when content has been swapped into the main content area,
            as these are occasions that will have the appearance of navigation events.
            */
            if (ElementID.CONTENT_WRAPPER === targetID) {
                autoScroll();
                hideNavigationMenu();
                $showCrossReferencePanel.set(false);
            }

            if (ElementID.INFINITE_SCROLL_BACKWARD_INITIAL_TARGET === targetID) {
                handleFirstInfiniteScrollBackward();
            }
        }
    });
}

export function respondToNavigationEvents(): void {
    /*
    Scroll to the paragraph number at the end of the URL only when the page
    is initially loaded (not on a refresh or back/forward navigation event)
    */
    const event = globalThis.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const initialLoad = 'navigate' === event?.type;
    if (initialLoad) {
        scrollToParagraphNumberFromUrl();
    }
}

/**
 * This disconnects all intersection observers for the reading area, then creates, initializes, and returns a new list of new observers.
 * This must be invoked whenever new content that is meant to be observed for intersections is added to the DOM (including the initial page load).
 */
export function updateReadingAreaIntersectionObservers(): Array<IntersectionObserver> {
    readingAreaIntersectionObservers.forEach((o) => o.disconnect());
    const newObservers: Array<IntersectionObserver> = [];

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: 0,
    };

    const triggers = document.querySelectorAll(ElementClass.READING_AREA_INTERSECTABLE_SELECTOR);
    triggers.forEach((trigger) => {
        const observer = new IntersectionObserver(respondToReadingAreaIntersectionEvent, observerOptions);
        observer.observe(trigger);
        newObservers.push(observer);
    });

    return newObservers;
}

/**
 * Auto-scroll to the anchor tag specified by the URL hash,
 * or if there is no URL hash, auto-scroll to the top of the page.
 */
function autoScroll(): void {
    const hash = document.location.hash;
    if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
        updateLanguageSwitcher(hash);
    } else {
        globalThis.scrollTo({ top: 0 });
    }
}

function scrollToParagraphNumberFromUrl(): void {
    const paragraphNumber = getParagraphNumber(document.location.href);
    if (paragraphNumber) {
        document.getElementById(paragraphNumber + '')?.scrollIntoView();
    }
}

function hideNavigationMenu(): void {
    const dropdown: SlDropdown | null = document.querySelector(ElementID.TOOLBAR_TABLE_OF_CONTENTS_SELECTOR);
    dropdown?.hide();
}

/**
 * The language switcher's navigation links are statically generated, and thus don't have access to the
 * current URL's `hash` value, so this function dynamically adds the hash value to the links' `href` value.
 */
function updateLanguageSwitcher(hash?: string): void {
    hash = hash || document.location.hash;

    if (hash) {
        const languageSwitcher = document.getElementById(ElementID.LANGUAGE_SWITCHER_WRAPPER);
        if (languageSwitcher) {
            const languageSwitcherLinks = languageSwitcher.getElementsByTagName('a');
            const links = Array.from(languageSwitcherLinks);

            for (const link of links) {
                link.setAttribute('href', link.getAttribute('href') + hash);
            }
        }
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
            const originalScrollY = globalThis.scrollY;

            show(newContent);

            // This must equal the top margin, in pixels, of the content blocks (those with the `ElementClass.CATECHISM_CONTENT_BLOCK` class)
            const topMarginOfCatechismContentBlock = 96;

            // This scroll effect keeps the original content in the same location in the viewport after the new content is shown
            globalThis.scroll({
                top: originalScrollY + newContent.scrollHeight + topMarginOfCatechismContentBlock,
                behavior: 'instant',
            });

            // Now this scroll effect brings a small amount of the new content into view
            globalThis.scroll({
                top: globalThis.scrollY + newContent.getBoundingClientRect().bottom - 150,
                behavior: 'smooth',
            });

            /*
            Fade-out and then remove the backward-scroll activator.

            While it would be more idiomatic to use `getElementById()` or `.querySelector()`,
            invoking `.classList.add()` with either of those does not work for an unknown reason.
            */
            document.querySelectorAll(`#${ElementID.INFINITE_SCROLL_BACKWARD_ACTIVATOR_CONTAINER}`).forEach((e) => {
                e.classList.add('transition-opacity', 'opacity-0', 'duration-1000');
                setTimeout(() => e.remove(), 1200);
            });
        }
    });
}
