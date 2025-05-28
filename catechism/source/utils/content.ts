import {
    Article,
    ArticleParagraph,
    BibleReference,
    BlockQuote,
    CatechismStructure,
    Chapter,
    ChapterSection,
    Content,
    ContentBase,
    ContentContainer,
    InBrief,
    InBriefContainer,
    NumberOrNumberRange,
    OtherReference,
    Paragraph,
    ParagraphGroup,
    ParagraphReference,
    ParagraphSubitem,
    ParagraphSubitemContainer,
    Part,
    PathID,
    Prologue,
    PrologueSection,
    Reference,
    ReferenceBase,
    ReferenceEnum,
    Section,
    SemanticPath,
    Subarticle,
    Text,
    TextBlock,
    TextHeading,
    TextWrapper,
} from '@catechism-types';

//#region Content retrieval
/**
 * @returns the opening content of the argument if it has any; otherwise an empty array
 */
export function getOpeningContent(c: ContentBase | ContentContainer): Array<ContentBase> {
    return hasOpeningContent(c) ? (c as ContentContainer).openingContent : [];
}

/**
 * @returns the main content of the argument if it has any; otherwise an empty array
 */
export function getMainContent(c: ContentBase | ContentContainer): Array<ContentBase> {
    return hasMainContent(c) ? (c as ContentContainer).mainContent : [];
}

/**
 * @returns the final content of the argument if it has any; otherwise an empty array
 */
export function getFinalContent(c: ContentBase | ContentContainer): Array<ContentBase> {
    return hasFinalContent(c) ? (c as ContentContainer).finalContent : [];
}

/**
 * @returns the In Brief content of the argument if it has any; otherwise null
 */
export function getInBrief(c: ContentBase | InBriefContainer): InBrief | null {
    return hasInBrief(c) ? (c as InBriefContainer).inBrief : null;
}

/**
 * @returns the `Paragraph` cross-references of the Catechism in their listed order (duplicates may exists)
 */
export function getAllCrossReferences(catechism: CatechismStructure): Array<NumberOrNumberRange> {
    const allContent = getAllContent(catechism);
    const textWrappers = getAll<TextWrapper>(allContent, Content.TEXT_WRAPPER);
    return textWrappers.flatMap((textWrapper) => textWrapper.paragraphReferences);
}

/**
 * @returns the `Paragraph`s of the Catechism in their listed order
 */
export function getAllParagraphs(catechism: CatechismStructure): Array<Paragraph> {
    const allContent = getAllContent(catechism);
    return getParagraphs(allContent);
}

export function getParagraphs(content: Array<ContentBase>): Array<Paragraph> {
    return getAll(content, Content.PARAGRAPH);
}

/**
 * @returns an array of paragraph numbers for all the paragraphs specified by `references`.
 * Paragraph ranges are split up into individual numbers; e.g. `'12-15'` becomes `[12, 13, 14, 15]`.
 */
export function getParagraphNumbers(reference: NumberOrNumberRange): Array<number> {
    if ('number' === typeof reference) {
        return [reference];
    } else {
        if (reference.includes('–')) {
            const [low, high] = reference.split('–').map((v) => Number(v));

            const numbers: Array<number> = [];
            if ('number' === typeof low && 'number' === typeof high) {
                for (let i = low; i <= high; i++) {
                    numbers.push(i);
                }
                return numbers;
            } else {
                throw new Error(`Failed to parse a paragraph cross-reference value: ${reference}`);
            }
        } else {
            const num = Number(reference);
            return num ? [num] : [];
        }
    }
}

export function getReferences(catechism: CatechismStructure): Array<Reference> {
    const content = getAllContent(catechism);
    const textWrappers = getAll<TextWrapper>(content, Content.TEXT_WRAPPER);
    return textWrappers
        .filter((tw) => !!tw.referenceCollection)
        .flatMap((tw) => tw.referenceCollection?.references) as Array<Reference>;
}
//#endregion

//#region Metadata retrieval
export function getAllPathIDs(catechism: CatechismStructure): Array<PathID> {
    const content = getAllContent(catechism);
    return getAllOfProperty<PathID>('pathID', content);
}

export function getAllSemanticPaths(catechism: CatechismStructure): Array<SemanticPath> {
    const content = getAllContent(catechism);
    return getAllOfProperty<SemanticPath>('semanticPath', content);
}

export function getAllRanks(catechism: CatechismStructure): Array<number> {
    const content = getAllContent(catechism);
    return getAllOfProperty<number>('rank', content);
}
//#endregion

//#region General retrieval helpers
export function getAllContent(catechism: CatechismStructure): Array<ContentContainer> {
    return [catechism.prologue, ...catechism.parts];
}

export function getAllChildContent(c: ContentBase): Array<ContentBase> {
    const childContent = [
        ...getOpeningContent(c),
        ...getMainContent(c),
    ];

    const inBrief = getInBrief(c);
    if (inBrief) {
        childContent.push(inBrief);
    }

    childContent.push(...getFinalContent(c));

    return childContent;
}

/**
 * @returns all items of the given content type, in the order that they are listed
 */
export function getAll<T extends ContentBase>(allContent: Array<ContentBase>, contentType: Content): Array<T> {
    return helper([], allContent, contentType);

    function helper(
        items: Array<T>,
        content: Array<ContentBase>,
        contentType: Content,
    ): Array<T> {
        content.forEach((c) => {
            if (c.contentType === contentType) {
                items.push(c as unknown as T);
            } else {
                const childContent = getAllChildContent(c);
                if (childContent.length > 0) {
                    helper(items, childContent, contentType);
                }
            }
        });

        return items;
    }
}

export function getAllOfProperty<T>(propertyName: keyof ContentBase, allContent: Array<ContentBase>): Array<T> {
    return getAllContentBaseItemsFromList(allContent).map((c) => c[propertyName] as T);
}

/**
 * @returns an ordered list of all `ContentBase` items within `catechism`.
 * Items are according to a depth-first traversal of `catechism`,
 * which results in the following for the returned list of content:
 * - parents precede their children
 * - children precede siblings
 * - siblings appear in-order
 */
export function getAllContentBaseItems(catechism: CatechismStructure): Array<ContentBase> {
    const allContent = getAllContent(catechism);
    return getAllContentBaseItemsFromList(allContent);
}

export function getAllContentBaseItemsFromList(allContent: Array<ContentBase>): Array<ContentBase> {
    return allContent.flatMap((content) => helper(content));

    function helper(content: ContentBase): Array<ContentBase> {
        if (hasMainContent(content)) {
            const children = getAllChildContent(content);
            return [
                content,
                ...children.flatMap((child) => helper(child)),
            ];
        } else {
            return [content];
        }
    }
}
//#endregion

//#region Type guards
export function isContentContainer(content: ContentBase): content is ContentContainer {
    return hasOpeningContent(content) &&
        hasMainContent(content) &&
        hasFinalContent(content);
}

export function isArticle(c: ContentBase): c is Article {
    return Content.ARTICLE === c.contentType;
}

export function isArticleParagraph(c: ContentBase): c is ArticleParagraph {
    return Content.ARTICLE_PARAGRAPH === c.contentType;
}

export function isBibleReference(r: ReferenceBase | null): r is BibleReference {
    return ReferenceEnum.BIBLE === r?.referenceType;
}

export function isChapter(c: ContentBase): c is Chapter {
    return Content.CHAPTER === c.contentType;
}

export function isChapterSection(c: ContentBase): c is ChapterSection {
    return Content.CHAPTER_SECTION === c.contentType;
}

export function isBlockQuote(c: ContentBase): c is BlockQuote {
    return Content.BLOCK_QUOTE === c.contentType;
}

export function isInBrief(c: ContentBase): c is InBrief {
    return Content.IN_BRIEF === c.contentType;
}

export function isInBriefContainer(content: ContentBase): content is InBriefContainer {
    return hasInBrief(content);
}

export function isOtherReference(r: ReferenceBase | null): r is OtherReference {
    return ReferenceEnum.OTHER === r?.referenceType;
}

export function isParagraph(c: ContentBase): c is Paragraph {
    return Content.PARAGRAPH === c.contentType;
}

export function isParagraphGroup(c: ContentBase): c is ParagraphGroup {
    return Content.PARAGRAPH_GROUP === c.contentType;
}

export function isParagraphReference(r: ReferenceBase): r is ParagraphReference {
    return ReferenceEnum.CATECHISM_PARAGRAPH === r.referenceType;
}

export function isParagraphSubitem(c: ContentBase): c is ParagraphSubitem {
    return Content.PARAGRAPH_SUB_ITEM === c.contentType;
}

export function isParagraphSubitemContainer(c: ContentBase): c is ParagraphSubitemContainer {
    return Content.PARAGRAPH_SUB_ITEM_CONTAINER === c.contentType;
}

export function isPart(c: ContentBase): c is Part {
    return Content.PART === c.contentType;
}
export function isPrologue(c: ContentBase): c is Prologue {
    return Content.PROLOGUE === c.contentType;
}

export function isPrologueSection(c: ContentBase): c is PrologueSection {
    return Content.PROLOGUE_SECTION === c.contentType;
}

// deno-lint-ignore no-explicit-any
export function isReference(o: any): o is ReferenceBase {
    const referenceType = o['referenceType'];
    return !!referenceType && Object.values(ReferenceEnum).includes(referenceType);
}

export function isSection(c: ContentBase): c is Section {
    return Content.SECTION === c.contentType;
}

export function isSubarticle(c: ContentBase): c is Subarticle {
    return Content.SUB_ARTICLE === c.contentType;
}

export function isText(c: ContentBase): c is Text {
    return Content.TEXT === c.contentType;
}

export function isTextBlock(c: ContentBase): c is TextBlock {
    return Content.TEXT_BLOCK === c.contentType;
}

export function isTextHeading(c: ContentBase): c is TextHeading {
    return Content.TEXT_HEADING === c.contentType;
}

export function isTextWrapper(c: ContentBase): c is TextWrapper {
    return Content.TEXT_WRAPPER === c.contentType;
}
//#endregion

//#region Content checkers
export function hasMainContent(content: ContentBase): boolean {
    return 'mainContent' in content && Array.isArray(content.mainContent);
}

export function hasOpeningContent(content: ContentBase): boolean {
    return 'openingContent' in content && Array.isArray(content.openingContent);
}

export function hasFinalContent(content: ContentBase): boolean {
    return 'finalContent' in content && Array.isArray(content.finalContent);
}

export function hasInBrief(content: ContentBase): boolean {
    return 'inBrief' in content && !!content.inBrief;
}
//#endregion
