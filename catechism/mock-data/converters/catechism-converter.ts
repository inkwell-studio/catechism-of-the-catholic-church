import { ReferenceEnum } from '../../source/types/reference-enum.ts';
import {
    Article,
    ArticleParagraph,
    BibleReference,
    BlockQuote,
    CatechismStructure,
    Chapter,
    Content,
    ContentBase,
    InBrief,
    NumberOrNumberRange,
    OtherReference,
    Paragraph,
    ParagraphGroup,
    Part,
    PartEnum,
    Prologue,
    Reference,
    Section,
    Subarticle,
    Text,
    TextContainer,
} from '../../source/types/types.ts';

export function getCatechismSourceCode(catechism: CatechismStructure): string {
    const prologueSourceCode = getSourceCodeForPrologue(catechism.prologue);

    const partsSourceCode = catechism.parts
        .map((part) => getSourceCodeForPart(part))
        .join(',');

    return `// deno-fmt-ignore-file
import {
    BibleBook,
    CatechismStructure,
    Content,
    OtherSourceEnum,
    PartEnum,
    ReferenceEnum,
    TextKey,
} from './types/types.ts';

export const Catechism: CatechismStructure = {
    prologue: ${prologueSourceCode},
    parts: [
        ${partsSourceCode}
    ]
};`;
}

function indent(indentationLevel: number, sourceCode: string): string {
    const indent = '    ';
    let indentation = '';
    for (let i = 0; i < indentationLevel; i++) {
        indentation += indent;
    }

    return sourceCode
        .split('\n')
        .map((line) => indentation + line)
        .join('\n');
}

function getSourceCodeForPrologue(prologue: Prologue): string {
    return indent(
        1,
        `\
        {
            contentType: Content.PROLOGUE,
            pathID: '${prologue.pathID}',
            title: ${prologue.title},
            mainContent: [
                ${getSourceCodeForContent(prologue.mainContent, 2)}
            ],
        }`,
    );
}

function getSourceCodeForPart(part: Part): string {
    return indent(
        1,
        `\
        {
            contentType: Content.PART,
            pathID: '${part.pathID}',
            part: PartEnum.${getPartKey(part.part)},
            title: ${part.title},
            mainContent: [
                ${getSourceCodeForContent(part.mainContent, 2)}
            ],
            openingContent: [
                ${getSourceCodeForContent(part.openingContent, 2)}
            ],
        }`,
    );
}

function getPartKey(part: PartEnum): string {
    const match = Object.entries(PartEnum).find((e) => part === e[1]);
    return match?.[1] ?? '';
}

function getSourceCodeForContent<T extends ContentBase>(content: Array<T>, indentationLevel: number): string {
    return content
        .map((contentItem) => getSourceCode(contentItem, indentationLevel))
        .join('\n');
}

function getSourceCode<T extends ContentBase>(content: T, indentationLevel: number): string {
    switch (content.contentType) {
        case Content.SECTION: {
            return getSourceCodeForSection(content as unknown as Section, indentationLevel);
        }
        case Content.CHAPTER: {
            return getSourceCodeForChapter(content as unknown as Chapter, indentationLevel);
        }
        case Content.ARTICLE: {
            return getSourceCodeForArticle(content as unknown as Article, indentationLevel);
        }
        case Content.ARTICLE_PARAGRAPH: {
            return getSourceCodeForArticleParagraph(content as unknown as ArticleParagraph, indentationLevel);
        }
        case Content.SUB_ARTICLE: {
            return getSourceCodeForSubarticle(content as unknown as Subarticle, indentationLevel);
        }
        case Content.IN_BRIEF: {
            return getSourceCodeForInBrief(content as unknown as InBrief, indentationLevel);
        }
        case Content.PARAGRAPH_GROUP: {
            return getSourceCodeForParagraphGroup(content as unknown as ParagraphGroup, indentationLevel);
        }
        case Content.BLOCK_QUOTE: {
            return getSourceCodeForBlockQuote(content as unknown as BlockQuote, indentationLevel);
        }
        case Content.PARAGRAPH: {
            return getSourceCodeForParagraph(content as unknown as Paragraph, indentationLevel);
        }
        case Content.TEXT_CONTAINER: {
            return getSourceCodeForTextContainer(content as unknown as TextContainer, indentationLevel);
        }
        default: {
            console.log(`\n\n\nWARNING: Unhandled content type: ${content.contentType}\n\n\n`);
            return '';
        }
    }
}

function getSourceCodeForSection(section: Section, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.SECTION,
            pathID: '${section.pathID}',
            sectionNumber: ${section.sectionNumber},
            title: ${section.title},
            mainContent: [
                ${getSourceCodeForContent(section.mainContent, indentationLevel + 1)}
            ],
            openingContent: [
                ${getSourceCodeForContent(section.openingContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForChapter(chapter: Chapter, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.CHAPTER,
            pathID: '${chapter.pathID}',
            chapterNumber: ${chapter.chapterNumber},
            title: ${chapter.title},
            mainContent: [
                ${getSourceCodeForContent(chapter.mainContent, indentationLevel + 1)}
            ],
            openingContent: [
                ${getSourceCodeForContent(chapter.openingContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForArticle(article: Article, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.ARTICLE,
            pathID: '${article.pathID}',
            articleNumber: ${article.articleNumber},
            title: ${article.title},
            mainContent: [
                ${getSourceCodeForContent(article.mainContent, indentationLevel + 1)}
            ],
            openingContent: [
                ${getSourceCodeForContent(article.openingContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForArticleParagraph(articleParagraph: ArticleParagraph, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.ARTICLE_PARAGRAPH,
            pathID: '${articleParagraph.pathID}',
            articleParagraphNumber: ${articleParagraph.articleParagraphNumber},
            title: ${articleParagraph.title},
            mainContent: [
                ${getSourceCodeForContent(articleParagraph.mainContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForSubarticle(subarticle: Subarticle, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.SUB_ARTICLE,
            pathID: '${subarticle.pathID}',
            subarticleNumber: ${subarticle.subarticleNumber},
            title: ${subarticle.title},
            mainContent: [
                ${getSourceCodeForContent(subarticle.mainContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForInBrief(inBrief: InBrief, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.IN_BRIEF,
            pathID: '${inBrief.pathID}',
            mainContent: [
                ${getSourceCodeForContent(inBrief.mainContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForParagraphGroup(paragraphGroup: ParagraphGroup, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.PARAGRAPH_GROUP,
            pathID: '${paragraphGroup.pathID}',
            paragraphGroupNumber: ${paragraphGroup.paragraphGroupNumber},
            title: ${paragraphGroup.title},
            mainContent: [
                ${getSourceCodeForContent(paragraphGroup.mainContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForBlockQuote(blockQuote: BlockQuote, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.BLOCK_QUOTE,
            pathID: '${blockQuote.pathID}',
            mainContent: [
                ${getSourceCodeForContent(blockQuote.mainContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForParagraph(paragraph: Paragraph, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.PARAGRAPH,
            pathID: '${paragraph.pathID}',
            paragraphNumber: ${paragraph.paragraphNumber},
            supplementary: ${paragraph.supplementary},
            mainContent: [
                ${getSourceCodeForContent(paragraph.mainContent, indentationLevel + 1)}
            ],
        },`,
    );
}

function getSourceCodeForTextContainer(textContainer: TextContainer, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.TEXT_CONTAINER,
            pathID: '${textContainer.pathID}',
            mainContent: [
                ${getSourceCodeForTextArray(textContainer.mainContent, indentationLevel + 1)}
            ],
            references: [
                ${getSourceCodeForReferences(textContainer.references, indentationLevel + 1)}
            ],
            paragraphReferences: [
                ${getSourceCodeForParagraphReferences(textContainer.paragraphReferences)}
            ],
        },`,
    );
}

function getSourceCodeForTextArray(textArray: Array<Text>, indentationLevel: number): string {
    return textArray
        .map((text) => getSourceCodeForText(text, indentationLevel))
        .join(',\n');
}

function getSourceCodeForText(text: Text, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            contentType: Content.TEXT,
            pathID: '${text.pathID}',
            content: ${text.content},
            strong: ${text.strong},
            emphasis: ${text.emphasis},
            smallCaps: ${text.smallCaps},
        }`,
    );
}

function getSourceCodeForReferences(references: Array<Reference>, indentationLevel: number): string {
    return references
        .map((reference) => getSourceCodeForReference(reference, indentationLevel))
        .join('\n');
}

function getSourceCodeForReference(reference: Reference, indentationLevel: number): string {
    if (ReferenceEnum.BIBLE === reference.referenceType) {
        return getSourceCodeForBibleReference(reference, indentationLevel);
    } else {
        return getSourceCodeForOtherReference(reference, indentationLevel);
    }
}

function getSourceCodeForBibleReference(reference: BibleReference, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            referenceType: ReferenceEnum.BIBLE,
            direct: ${reference.direct},
            book: BibleBook.${reference.book},
            chapter: ${reference.chapter},
            verses: ${getNumberOrNumberRangeAsString(reference.verses)},
        },`,
    );
}

function getNumberOrNumberRangeAsString(value: NumberOrNumberRange): string {
    return 'number' === typeof value ? `${value}` : '`' + value + '`';
}

function getSourceCodeForOtherReference(reference: OtherReference, indentationLevel: number): string {
    return indent(
        indentationLevel,
        `\
        {
            referenceType: ReferenceEnum.OTHER,
            direct: ${reference.direct},
            source: OtherSourceEnum.${reference.source},
            pointer: \`${reference.pointer}\`,
        },`,
    );
}

function getSourceCodeForParagraphReferences(references: Array<NumberOrNumberRange>): string {
    return references
        .map((reference) => getNumberOrNumberRangeAsString(reference))
        .join(',');
}
