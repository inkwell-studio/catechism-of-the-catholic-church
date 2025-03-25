import type { SlDrawer } from '@shoelace-types';

import { getParagraphNumber } from './routing.ts';
import { ElementID } from './ui.ts';

type HtmxEvent = Event & {
    // deno-lint-ignore no-explicit-any
    detail?: any;
};

/**
 * @returns a new path constructed constructed from the segments.
 * Doubled slashes are de-duplicated, and the returned value never ends with a slash.
 */
export function path(...segments: Array<string | number>): string {
    // Change all numbers to strings
    segments = segments.map((s) => '' + s);

    return [...segments, '/'].join('/')
        // De-duplicate slashes
        .replaceAll(/\/{2,}/g, '/')
        // Remove any slash that precedes the hash
        .replace(/\/+#/, '#')
        // Remove the trailing slash
        .replace(/\/+$/, '');
}

export function respondToHtmx(): void {
    document.addEventListener('htmx:afterSwap', (e: HtmxEvent) => {
        /*
        Perform some automated UI actions only when content has been swapped into the main content area,
        as these are occasions that will have the appearance of navigation events.
        */
        if (ElementID.CONTENT_WRAPPER === e?.detail?.target?.id) {
            autoScroll();
            closeCrossReferenceDrawer();
        }
    });
}

export function respondToNavigationEvent(): void {
    /*
    Scroll to the paragraph number at the end of the URL only when the page
    is initially loaded (not on a refresh or back/forward navigation event)
    */
    const event = globalThis.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const initialLoad = 'navigate' === event?.type;
    if (initialLoad) {
        const paragraphNumber = getParagraphNumber(document.location.href);
        if (paragraphNumber) {
            document.getElementById(paragraphNumber + '')?.scrollIntoView();
        }
    }
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

function closeCrossReferenceDrawer(): void {
    const drawer: SlDrawer | null = document.querySelector(ElementID.CROSS_REFERENCE_DRAWER_SELECTOR);
    drawer?.hide();
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
