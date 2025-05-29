import type { SlTabGroup } from '@shoelace-types';
import { atom, computed } from 'nanostores';

import { PathID } from '@catechism-types';

import { ElementClass, ElementID, TableOfContentsTabs } from '@logic/ui.ts';
import { getPart, isPrologueContent } from '@catechism-utils/path-id.ts';

//#region constants
let readingAreaIntersectionObservers: Array<IntersectionObserver> = [];

type ContentMetadata = {
    naturalLanguagePath: string;
    pathID: PathID;
    rank: number;
    url: string;
};

const $elementsInReadingArea = atom<Array<ContentMetadata>>([]);

const $readingAreaLastContent = computed($elementsInReadingArea, (elements) => {
    if (elements.length === 0) {
        return null;
    }

    return elements.sort((a, b) => {
        const diff = a.rank - b.rank;
        // deno-fmt-ignore
        return diff === 0
            ? 0
            : diff > 0
                ? -1
                : 0;
    })[0];
});
//#endregion

//#region functions
//#region public
/**
 * This disconnects all intersection observers for the reading area, then creates, initializes, and returns a new list of new observers.
 * This must be invoked whenever new content that is meant to be observed for intersections is added to the DOM (including the initial page load).
 */
export function updateReadingAreaIntersectionObservers(): void {
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

    readingAreaIntersectionObservers = newObservers;
}

export function watchForReadingAreaLastContentChanges(): void {
    $readingAreaLastContent.subscribe((contentMetadata) => {
        if (contentMetadata) {
            respondToReadingAreaLastContentChange(contentMetadata);
        }
    });
}

export function respondToReadingAreaLastContentChange(contentMetadata: ContentMetadata): void {
    updateToolbarNaturalLanguagePath(contentMetadata.naturalLanguagePath);
    updateTableOfContentsView(contentMetadata.pathID);

    globalThis.history.replaceState(null, '', contentMetadata.url);
}

/**
 * This removes any elements from `$elementsInReadingArea` that are no longer present on the DOM
 */
export function validateElementsInReadingArea(): void {
    const trackedElements = $elementsInReadingArea.get();
    const presentElements = trackedElements.filter((e) => !!document.querySelector(`[data-path-id="${e.pathID}"]`));

    if (presentElements.length !== trackedElements.length) {
        $elementsInReadingArea.set(presentElements);
    }
}
//#endregion

//#region private
function respondToReadingAreaIntersectionEvent(entries: Array<IntersectionObserverEntry>, _observer: IntersectionObserver): void {
    const contentInside = entries
        .filter((e) => e.isIntersecting)
        .map(getMetadata)
        .filter((value) => !!value);

    if (contentInside.length > 0) {
        addElementsToReadingArea(contentInside);
    }

    const contentOutside = entries
        .filter((e) => !e.isIntersecting)
        .map(getMetadata)
        .filter((value) => !!value);

    if (contentOutside.length > 0) {
        removeElementsFromReadingArea(contentOutside);
    }

    function getMetadata(entry: IntersectionObserverEntry): ContentMetadata | null {
        const naturalLanguagePath = entry.target.attributes.getNamedItem('data-natural-language-path')?.value ?? null;
        const pathID = entry.target.attributes.getNamedItem('data-path-id')?.value ?? null;
        const url = entry.target.attributes.getNamedItem('data-url')?.value ?? null;

        const rankRaw = entry.target.attributes.getNamedItem('data-rank')?.value ?? null;
        const rank = rankRaw ? Number(rankRaw) : null;

        if (naturalLanguagePath && pathID && url && rank) {
            return {
                naturalLanguagePath,
                pathID,
                rank,
                url,
            };
        } else {
            return null;
        }
    }
}

function addElementsToReadingArea(elementsToAdd: Array<ContentMetadata>): void {
    const currentElements = $elementsInReadingArea.get();
    const newElements = elementsToAdd.filter((e) => !currentElements.map((ce) => ce.rank).includes(e.rank));

    if (newElements.length > 0) {
        $elementsInReadingArea.set([...currentElements, ...newElements]);
    }
}

function removeElementsFromReadingArea(elementsToRemove: Array<ContentMetadata>): void {
    const currentElements = $elementsInReadingArea.get();

    const elementsToKeep = currentElements.filter((currentElement) =>
        !elementsToRemove.map((etr) => etr.pathID).includes(currentElement.pathID)
    );

    if (elementsToKeep.length === 0) {
        console.warn(
            `No elements were found in the reading area. Last elements removed:\n\t${
                elementsToRemove.map((e) => `${e.rank} | ${e.naturalLanguagePath}`).join('\n\t')
            }`,
        );
    }

    if (elementsToKeep.length !== currentElements.length) {
        $elementsInReadingArea.set(elementsToKeep);
    }
}

function updateTableOfContentsView(pathID: PathID): void {
    const topTabPanel: SlTabGroup | null = document.querySelector(ElementID.TABLE_OF_CONTENTS_TOP_TAB_GROUP_SELECTOR);
    if (!topTabPanel) return;
    topTabPanel.show(TableOfContentsTabs.MAIN_CONTENT);

    const childTabPanel: SlTabGroup | null = document.querySelector(ElementID.TABLE_OF_CONTENTS_MAIN_CONTENT_TAB_GROUP_SELECTOR);
    if (!childTabPanel) return;

    let panel: TableOfContentsTabs | null = null;
    if (isPrologueContent(pathID)) {
        panel = TableOfContentsTabs.MAIN_CONTENT_PROLOGUE;
    } else {
        const part = getPart(pathID);
        if (1 === part) {
            panel = TableOfContentsTabs.MAIN_CONTENT_PART_1;
        } else if (2 === part) {
            panel = TableOfContentsTabs.MAIN_CONTENT_PART_2;
        } else if (3 === part) {
            panel = TableOfContentsTabs.MAIN_CONTENT_PART_3;
        } else if (4 === part) {
            panel = TableOfContentsTabs.MAIN_CONTENT_PART_4;
        }
    }

    if (!panel) return;
    childTabPanel.show(panel);
}

function updateToolbarNaturalLanguagePath(text?: string): void {
    if (text) {
        const element = document.getElementById(ElementID.TOOLBAR_NATURAL_LANGUAGE_PATH);
        if (element) {
            element.innerText = text;
        }
    }
}
//#endregion
//#endregion
