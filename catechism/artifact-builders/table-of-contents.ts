import { Catechism } from '../source/catechism.ts';
import { Content, ContentBase, ContentContainer, Entry, Paragraph, TableOfContents } from '../source/types/types.ts';
import { hasMainContent, hasOpeningContent } from "../utils.ts";

export function buildAndWrite(): void {
    const tableOfContents = build();
    write(tableOfContents);
}

//#region builders
function build(): TableOfContents {
    return {
        prologue: buildEntry(Catechism.prologue),
        parts: Catechism.parts.map(part => buildEntry(part))
    };
}

function buildEntry<T extends ContentBase | ContentBase & ContentContainer>(content: T): Entry {
    return {
        contentType: content.contentType,
        title: getTitle(content.contentType),
        url: 'TODO',
        firstParagraphNumber: getFirstParagraphNumber(content),
        children: buildChildEntries(content)
    };
}

function buildChildEntries<T extends ContentBase | ContentBase & ContentContainer>(content: T): Array<Entry> {
    const mainContentExists = hasMainContent(content);
    if (mainContentExists) {
        return (content as ContentContainer).mainContent
            .filter(content => includible(content))
            .map(child => buildEntry(child));
    } else {
        return [];
    }
}
//#endregion

//#region writers
function write(tableOfContents: TableOfContents): void {
    // TODO: Implement
}
//#endregion

//#region helpers
/**
 * @returns `true` if the content should be included in the Table of Content, and `false` if not
 */
function includible<T extends ContentBase>(content: T): boolean {
    return Content.PROLOGUE === content.contentType
        || Content.PART === content.contentType
        || Content.SECTION === content.contentType
        || Content.CHAPTER === content.contentType
        || Content.ARTICLE === content.contentType
        || Content.ARTICLE_PARAGRAPH === content.contentType
        || Content.SUB_ARTICLE === content.contentType
        || Content.IN_BRIEF === content.contentType;
}

function getTitle(contentType: Content): string {
    return Content[contentType];
}

function getFirstParagraphNumber<T extends ContentBase | ContentBase & ContentContainer>(content: T): number {
    // Perform a depth-first search to find the first paragraph content, then return its number
    if (Content.PARAGRAPH === content.contentType) {
        return (content as Paragraph).paragraphNumber;
    } else {
        if openingContentExists

        const openingContent = hasOpeningContent(content) ? (content as any).openingContent : [];
        const mainContent = hasMainContent(content) ? (content as any).mainContent : [];
        const childContent = [ ...openingContent, ...mainContent ];
    }

    if (Object.hasOwn(content, 'paragraphNumber'))
}
//#endregion
