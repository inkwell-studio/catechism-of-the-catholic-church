import { Catechism } from '../source/catechism.ts';
import { ContentBase, ContentContainer, Entry, Part, Prologue, TableOfContents } from '../source/types/types.ts';

export function buildAndWrite(): void {
    const tableOfContents = build();
    write(tableOfContents);
}

//#region builders
function build(): TableOfContents {
    return {
        prologue: buildPrologue(Catechism.prologue),
        parts: Catechism.parts.map(part => buildPart(part))
    };
}

function buildPrologue(prologue: Prologue): Entry {
    return {
        contentType: prologue.contentType,
        title: 'Prologue',
        url: 'TODO',
        firstParagraphNumber: getFirstParagraphNumber(prologue),
        children: prologue.mainContent.map(c => buildEntry(c))
    };
}

function buildPart(part: Part): Entry {
    // TODO: Implement
}

function buildEntry<T extends ContentBase>(content: T): Entry {
    // TODO: Implement
}
//#endregion

//#region writers
function write(tableOfContents: TableOfContents): void {
    // TODO: Implement
}
//#endregion

//#region helpers
function getFirstParagraphNumber<T extends ContentContainer>(content: T): number {
    // TODO: Implement
    return 0;
}
//#endregion
