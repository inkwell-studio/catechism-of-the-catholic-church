import { IS_BROWSER } from '$fresh/runtime.ts';
import { JSX } from 'preact';

import { ContentStartID } from '../(_components)/content-start.tsx';

/**
 * This compensates for limitations of routing with Fresh Partials
 * by auto-scrolling during a URL change or page refresh to either:
 *   1) the anchor tag specified by the URL hash
 *   2) the start of the page's content, if there is no URL hash
 */
export default function AutoScroller(): JSX.Element {
    return <></>;
}

function autoScrollOnUrlChange(): void {
    let previousHref = document.location.href;
    const body = document.querySelector('body');

    const observer = new MutationObserver(() => {
        const newHref = document.location.href;
        const hash = document.location.hash;

        if (newHref !== previousHref) {
            previousHref = newHref;

            if (!hash) {
                document.getElementById(ContentStartID)?.scrollIntoView();
            }
        }

        if (hash) {
            // TODO: This is causing problems with the Popover in the Action Bar. Can it be removed?
            document.getElementById(hash.slice(1))?.scrollIntoView();
        }
    });

    if (body) {
        observer.observe(body, { childList: true, subtree: true });
    }
}

if (IS_BROWSER) {
    globalThis.onload = autoScrollOnUrlChange;
}
