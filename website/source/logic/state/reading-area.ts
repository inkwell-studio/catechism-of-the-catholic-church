import { atom, computed } from 'nanostores';
import { ElementID } from '@logic/ui.ts';

//#region constants
type ContentMetadata = {
    naturalLanguagePath: string;
    url: string;
    rank: number;
};

const $elementsInReadingArea = atom<Array<ContentMetadata>>([]);

const $lastReadingAreaContent = computed($elementsInReadingArea, (elements) => {
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

$lastReadingAreaContent.subscribe((contentMetadata) => {
    if (contentMetadata) {
        updateToolbarNaturalLanguagePath(contentMetadata.naturalLanguagePath);
        globalThis.history.replaceState(null, '', contentMetadata.url);
    }
});
//#endregion

//#region functions
export function respondToReadingAreaIntersectionEvent(entries: Array<IntersectionObserverEntry>, _observer: IntersectionObserver): void {
    const contentInside = entries
        .filter((e) => e.isIntersecting)
        .map(getContentMetadata)
        .filter((value) => !!value);

    if (contentInside.length > 0) {
        addElementsToReadingArea(contentInside);
    }

    const contentOutside = entries
        .filter((e) => !e.isIntersecting)
        .map(getContentMetadata)
        .filter((value) => !!value);

    if (contentOutside.length > 0) {
        removeElementsFromReadingArea(contentOutside);
    }

    function getContentMetadata(entry: IntersectionObserverEntry): ContentMetadata | null {
        const naturalLanguagePath = entry.target.attributes.getNamedItem('data-natural-language-path')?.value ?? null;
        const url = entry.target.attributes.getNamedItem('data-url')?.value ?? null;

        const rankRaw = entry.target.attributes.getNamedItem('data-rank')?.value ?? null;
        const rank = rankRaw ? Number(rankRaw) : null;

        if (naturalLanguagePath && url && rank) {
            return {
                naturalLanguagePath,
                url,
                rank,
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
        !elementsToRemove.map((etr) => etr.rank).includes(currentElement.rank)
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

function updateToolbarNaturalLanguagePath(text?: string): void {
    if (text) {
        const element = document.getElementById(ElementID.TOOLBAR_NATURAL_LANGUAGE_PATH);
        if (element) {
            element.innerText = text;
        }
    }
}
//#endregion
