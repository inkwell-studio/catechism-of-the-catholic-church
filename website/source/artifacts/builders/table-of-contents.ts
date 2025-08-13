import { CatechismStructure, Content, ContentBase, ContentContainer, Language, SemanticPathSource } from '@catechism-types';
import { getFinalContent, getInBrief, getMainContent, getParagraphs } from '@catechism-utils/content.ts';
import { buildSemanticPath, getSemanticPathSource } from '@catechism-utils/semantic-path.ts';
import { getContentTitleData } from '@catechism-utils/title.ts';

import { getUrl } from '@logic/routing.ts';

import { TableOfContentsEntry, TableOfContentsType } from '../types/types.ts';

//#region builders
export function build(catechism: CatechismStructure): TableOfContentsType {
    return {
        language: catechism.language,
        prologue: buildEntry(catechism.language, catechism.prologue, []),
        parts: catechism.parts.map((part) => buildEntry(catechism.language, part, [])),
    };
}

function buildEntry(
    language: Language,
    content: ContentBase | ContentContainer,
    ancestors: Array<SemanticPathSource>,
    flags?: {
        finalContent?: boolean;
    },
): TableOfContentsEntry {
    const titleData = getContentTitleData(language, content);

    if (!titleData.title) {
        throw new Error(`Failed to generate a content-type title for a table-of-contents entry. PathID ${content.pathID}`);
    }

    const { firstParagraphNumber, lastParagraphNumber } = getTerminalParagraphNumbers(content);

    const isFinalContent = !!flags?.finalContent;
    const semanticPathSource = getSemanticPathSource(content, isFinalContent);
    const semanticPath = buildSemanticPath(language, semanticPathSource, ancestors);

    const children = isFinalContent ? [] : buildChildEntries(language, content, [...ancestors, semanticPathSource]);

    return {
        contentType: content.contentType,
        titleData,
        pathID: content.pathID,
        semanticPath,
        url: getUrl(language, semanticPath),
        firstParagraphNumber,
        lastParagraphNumber,
        children,
    };
}

function buildChildEntries(
    language: Language,
    parent: ContentBase | ContentContainer,
    ancestors: Array<SemanticPathSource>,
): Array<TableOfContentsEntry> {
    const childEntries = getMainContent(parent)
        .filter((child) => shouldGenerateChildEntry(parent, child))
        .map((child) => buildEntry(language, child, ancestors));

    const inBrief = getInBrief(parent);
    if (inBrief) {
        childEntries.push(buildEntry(language, inBrief, ancestors));
    }

    const finalContent = getFinalContent(parent);
    if (finalContent.length > 0) {
        childEntries.push(buildEntry(language, finalContent[0], ancestors, { finalContent: true }));
    }

    return childEntries;
}
//#endregion

//#region helpers
/**
 * @returns `true` if a table-of-contents entry should be generated for the provided parent-child pairing, and `false` otherwise
 */
function shouldGenerateChildEntry(parent: ContentBase, child: ContentBase): boolean {
    // A list of [parent, child] pairings that will trigger the generation of a table-of-contents entry for the child
    return [
        [Content.PROLOGUE, Content.PROLOGUE_SECTION],
        [Content.PART, Content.SECTION],
        [Content.SECTION, Content.CHAPTER],
        [Content.SECTION, Content.ARTICLE],
        [Content.CHAPTER, Content.ARTICLE],
        [Content.CHAPTER, Content.SUB_ARTICLE],
        [Content.ARTICLE, Content.ARTICLE_PARAGRAPH],
        [Content.ARTICLE, Content.SUB_ARTICLE],
        [Content.ARTICLE_PARAGRAPH, Content.SUB_ARTICLE],
    ].some((validPairing) => parent.contentType === validPairing[0] && child.contentType === validPairing[1]);
}

/**
 * @returns the first and last `paragraphNumber` values of all the `Paragraph`s contained by the provided content
 */
function getTerminalParagraphNumbers(
    content: ContentBase,
): { firstParagraphNumber: number; lastParagraphNumber: number } {
    const paragraphs = getParagraphs([content]);
    const firstParagraphNumber = paragraphs.at(0)?.paragraphNumber ?? null;
    const lastParagraphNumber = paragraphs.at(-1)?.paragraphNumber ?? null;

    if (firstParagraphNumber === null || lastParagraphNumber === null) {
        throw new Error(
            `A terminal paragraph could not be found for the given content: ${content.contentType}, pathID: ${content.pathID}. ` +
                `Terminal paragraph numbers: ${firstParagraphNumber}, ${lastParagraphNumber}`,
        );
    }

    return { firstParagraphNumber, lastParagraphNumber };
}
//#endregion
