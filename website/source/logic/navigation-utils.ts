import { getParagraphNumber } from './routing.ts';
import { ElementClass, ElementID } from './ui.ts';

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
    document.addEventListener('htmx:replacedInHistory', () => {
        /*
        Remove any hash values from the `hx-replace-url` attributes of intersection-url-updaters for a better user experience:
        Without this logic, hash values would be re-added to the URL when a user returns to a section by scrolling.

        For example:
            - The user navigates to `/part-1#123`
            - The user scrolls down to Part 2, so the URL is updated from `/part-1#123` to `/part-2`
            - The user scrolls back up to Part 1
                - Without this logic, the URL would be updated to the original value of `/part-1#123`, instead of just `/part-1`
        */

        const attributeName = 'hx-replace-url';
        document.querySelectorAll(`${ElementClass.INTERSECTION_URL_UPDATER_SELECTOR}[${attributeName}*="#"]`)
            .forEach((element) =>
                element.setAttribute(
                    attributeName,
                    element.getAttribute(attributeName)?.replaceAll(/#.*/g, '') ?? '',
                )
            );
    });

    document.addEventListener('htmx:afterSwap', (e: HtmxEvent) => {
        /*
        Auto-scroll only when content has been swapped into the main content area,
        as these are occasions that will have the appearance of navigation events
        */
        if (ElementID.CONTENT_WRAPPER === e?.detail?.target?.id) {
            autoScroll();
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
