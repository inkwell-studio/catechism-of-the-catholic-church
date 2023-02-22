import {
    CatechismStructure,
    Content,
    ContentBase,
    ContentContainer,
    Paragraph,
    Part,
    Prologue,
} from './source/types/types.ts';

export function hasMainContent<T extends ContentBase>(content: T): boolean {
    // deno-lint-ignore no-explicit-any
    return Object.hasOwn(content, 'mainContent') && Array.isArray((content as any).mainContent);
}

export function hasOpeningContent<T extends ContentBase>(content: T): boolean {
    // deno-lint-ignore no-explicit-any
    return Object.hasOwn(content, 'openingContent') && Array.isArray((content as any).openingContent);
}

export function getMainAndOpeningContent<T extends ContentBase & ContentContainer>(c: T): Array<T> {
    // deno-lint-ignore no-explicit-any
    const openingContent = hasOpeningContent(c) ? (c as any).openingContent : [];

    return [...openingContent, ...c.mainContent];
}

function getAllContent(catechism: CatechismStructure): Array<Prologue | Part> {
    return [catechism.prologue, ...catechism.parts];
}

/**
 * @returns the `Paragraph`s of the Catechism in the order that they are listed
 */
export function getAllParagraphs(catechism: CatechismStructure): Array<Paragraph> {
    const allContent = getAllContent(catechism);
    return getParagraphs(allContent);
}

/**
 * @returns the `Paragraph`s of the given content in the order that they are listed
 */
export function getParagraphs<T extends ContentBase & ContentContainer>(allContent: Array<T>): Array<Paragraph> {
    return helper([], allContent);

    function helper<T extends ContentBase & ContentContainer>(
        paragraphs: Array<Paragraph>,
        content: Array<T>,
    ): Array<Paragraph> {
        content.forEach((c) => {
            if (Content.PARAGRAPH === c.contentType) {
                paragraphs.push(c as unknown as Paragraph);
            } else if (hasMainContent(c)) {
                const childContent = getMainAndOpeningContent(c);
                return helper(paragraphs, childContent);
            }
        });

        return paragraphs;
    }
}
