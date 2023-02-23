// deno-lint-ignore-file
import { Catechism } from '../source/catechism.ts';
import { ArticleParagraph } from '../source/types/article-paragraph.ts';
import { Subarticle } from '../source/types/subarticle.ts';
import {
    Article,
    Chapter,
    Content,
    ContentBase,
    ContentContainer,
    Entry,
    Part,
    Section,
    TableOfContents,
} from '../source/types/types.ts';
import { getParagraphs, hasMainContent } from '../utils.ts';
import { join } from '../../dependencies.ts';

export function buildAndWrite(): void {
    const tableOfContents = build();
    write(tableOfContents);
}

//#region builders
function build(): TableOfContents {
    return {
        prologue: buildEntry(Catechism.prologue, null),
        parts: Catechism.parts.map((part) => buildEntry(part, null)),
    };
}

function buildEntry<T extends ContentBase | ContentBase & ContentContainer>(
    content: T,
    parentUrl: string | null,
): Entry {
    const firstParagraphNumber = getFirstParagraphNumber(content);
    if (typeof firstParagraphNumber !== 'number') {
        throw Error(
            `A paragraph could not be found for the given content: ${content.contentType}, pathID: ${content.pathID}`,
        );
    }

    const url = getUrl(content, parentUrl);

    return {
        contentType: content.contentType,
        title: getTitle(content),
        url,
        firstParagraphNumber,
        children: buildChildEntries(content, url),
    };
}

function buildChildEntries<T extends ContentBase | ContentBase & ContentContainer>(
    content: T,
    parentUrl: string,
): Array<Entry> {
    const mainContentExists = hasMainContent(content);
    if (mainContentExists) {
        return (content as ContentContainer).mainContent
            .filter((content) => includeInTableOfContents(content))
            .map((child) => buildEntry(child, parentUrl));
    } else {
        return [];
    }
}
//#endregion

//#region writers
function write(tableOfContents: TableOfContents): void {
    Deno.writeTextFileSync(
        join('catechism/artifacts', 'table-of-contents.json'),
        JSON.stringify(tableOfContents, undefined, '    '),
    );
}
//#endregion

//#region helpers
/**
 * @returns `true` if the content should be included in the Table of Content, and `false` if not
 */
function includeInTableOfContents<T extends ContentBase>(content: T): boolean {
    return Content.PROLOGUE === content.contentType ||
        Content.PART === content.contentType ||
        Content.SECTION === content.contentType ||
        Content.CHAPTER === content.contentType ||
        Content.ARTICLE === content.contentType ||
        Content.ARTICLE_PARAGRAPH === content.contentType ||
        Content.SUB_ARTICLE === content.contentType ||
        Content.IN_BRIEF === content.contentType;
}

function getTitle(content: ContentBase): string {
    return `${Content[content.contentType]} ${content.pathID}`;
}

function getUrl<T extends ContentBase>(content: T, parentUrl: string | null): string {
    const kind = content.contentType.toLowerCase().replaceAll('_', '-');
    let segment = kind;

    if (Content.PROLOGUE !== content.contentType && Content.IN_BRIEF !== content.contentType) {
        segment += '-' + getNumber(content);
    }

    return parentUrl ? parentUrl + `/${segment}` : segment;
}

function getNumber<T extends ContentBase>(content: T): number {
    if (Content.PART === content.contentType) {
        return (content as unknown as Part).partNumber;
    } else if (Content.SECTION === content.contentType) {
        return (content as unknown as Section).sectionNumber;
    } else if (Content.CHAPTER === content.contentType) {
        return (content as unknown as Chapter).chapterNumber;
    } else if (Content.ARTICLE === content.contentType) {
        return (content as unknown as Article).articleNumber;
    } else if (Content.ARTICLE_PARAGRAPH === content.contentType) {
        return (content as unknown as ArticleParagraph).articleParagraphNumber;
    } else if (Content.SUB_ARTICLE === content.contentType) {
        return (content as unknown as Subarticle).subarticleNumber;
    } else {
        throw Error(
            `An unexpected content type was encountered: ${content.contentType}`,
        );
    }
}

/**
 * @returns the `paragraphNumber` value of the first `Paragraph` that's a child of the given content, or `null` if no such `Paragraph` exists
 */
function getFirstParagraphNumber<T extends ContentBase | ContentBase & ContentContainer>(content: T): number | null {
    const mainContentExists = hasMainContent(content);
    if (mainContentExists) {
        const paragraphs = getParagraphs([content as ContentBase & ContentContainer]);
        return paragraphs[0]?.paragraphNumber ?? null;
    } else {
        return null;
    }
}
//#endregion
