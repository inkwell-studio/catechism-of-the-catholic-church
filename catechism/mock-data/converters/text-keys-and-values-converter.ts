// deno-lint-ignore-file no-explicit-any
import { TextKeyAndValue } from './text-key-and-value.ts';
import { CatechismStructure } from '../../source/types/catechism-structure.ts';
import { Content } from '../../source/types/content.ts';
import { ContentBase, Paragraph } from '../../source/types/types.ts';

type ContentOccurrences = Map<Content, number>;

export function determineTextKeysAndValuesAndUpdateCatechismObject(
    catechism: CatechismStructure,
): { catechism: CatechismStructure; texts: Array<TextKeyAndValue> } {
    catechism = structuredClone(catechism);

    const prologueResults = helper([catechism.prologue], null, [], []);
    const partsResults = helper(catechism.parts, null, [], []);

    (catechism as any).prologue = prologueResults.content[0];
    (catechism as any).parts = partsResults.content;

    const texts = [...prologueResults.texts, ...partsResults.texts];

    return {
        catechism,
        texts,
    };

    function helper<T extends ContentBase>(
        content: Array<T>,
        parent: T | null,
        path: Array<string>,
        texts: Array<TextKeyAndValue>,
    ): { content: Array<T>; texts: Array<TextKeyAndValue> } {
        const contentOccurrences: ContentOccurrences = new Map();

        content.forEach((c) => {
            const newOccurrenceCount = (contentOccurrences.get(c.contentType) ?? 0) + 1;
            contentOccurrences.set(c.contentType, newOccurrenceCount);

            const pathSegment = c.contentType + '_' + getPaddedNumber(newOccurrenceCount, 2);
            const newPath = [...path, pathSegment];

            const property = getPropertyRequiringTextReplacement(c);
            if (property) {
                const textKeyAndValue = determineTextKeyAndValue(
                    c,
                    property,
                    parent,
                    contentOccurrences,
                    newPath,
                );
                texts.push(textKeyAndValue);

                // overwrite the property value with the TextKey source code
                (c as any)[property] = 'TextKey.' + textKeyAndValue.key;
            }

            const hasOpeningContent = Object.hasOwn(c, 'openingContent') && Array.isArray((c as any)['openingContent']);
            if (hasOpeningContent) {
                const openingContent = (c as any)['openingContent'];
                const results = helper(openingContent, c, newPath, texts);
                texts = results.texts;
                (c as any)['openingContent'] = results.content;
            }

            const hasMainContent = Object.hasOwn(c, 'mainContent') && Array.isArray((c as any)['mainContent']);
            if (hasMainContent) {
                const mainContent = (c as any)['mainContent'];
                const results = helper(mainContent, c, newPath, texts);
                texts = results.texts;
                (c as any)['mainContent'] = results.content;
            }
        });

        return {
            content,
            texts,
        };
    }
}

/**
 * @returns the TextKey corresponding to the given content paired with the content
 */
function determineTextKeyAndValue<T extends ContentBase>(
    content: T,
    valueProperty: string,
    parent: T | null,
    contentOccurrences: ContentOccurrences,
    path: Array<string>,
): TextKeyAndValue {
    const contentCount = contentOccurrences.get(content.contentType) ?? 1;

    if (Content.PARAGRAPH === parent?.contentType) {
        return determineTextKeyAndValueForParagraph(content, valueProperty, parent, contentCount);
    } else {
        return determineTextKeyAndValueForNonParagraph(content, path);
    }
}

/**
 * The TextKey is set as follows:
 *
 * For paragraph texts:
 * `PARAGRAPH_[n1]__[n2]_TEXT`
 * where `n1` is the paragraph number, and `n2` is the text fragment of the paragraph.
 * `n2` comes before "TEXT" because there may be other types of data than "TEXT" in `Paragraph`s in the future (this is to be determined), and
 * the order of objects within a `Paragraph` is of higher precendence than their types.
 *
 * `n1` is padded with leading zeroes as necessary to ensure its length as a string is four characters; e.g. `24` becomes `0024`.
 *
 * `n2` is padded with leading zeroes as necessary to ensure its length as a string is two characters; e.g. `5` becomes `05`.
 */
function determineTextKeyAndValueForParagraph<T extends ContentBase>(
    content: T,
    valueProperty: string,
    parent: T | null,
    contentCount: number,
): TextKeyAndValue {
    const paragraphNumber = getPaddedNumber((parent as unknown as Paragraph).paragraphNumber, 4);
    const textNumber = getPaddedNumber(contentCount, 2);

    return {
        key: `PARAGRAPH_${paragraphNumber}__${textNumber}_TEXT`,
        value: (content as any)[valueProperty],
    };
}

/**
 * The TextKey is set as follows:
 *
 * `[path]__[content type]_[n1]__[property]`
 * where `n1` and is the ordinal number for the given content at the given path. Note that [property] is omitted for BlockQuote and Text types.
 *
 * For example, for the title of `Part 2 > Section 1 > Chapter 3 > Article 4`, the TextKey would be:
 * `PART_02__SECTION_01__CHAPTER_03__ARTICLE_04__TITLE`
 *
 * `n1` is padded with leading zeroes as necessary to ensure its length as a string is two characters; e.g. `7` becomes `07`.
 */
function determineTextKeyAndValueForNonParagraph<T extends ContentBase>(
    content: T,
    path: Array<string>,
): TextKeyAndValue {
    const propertyName = getPropertyRequiringTextReplacement(content) ?? 'MISSING_PROPERTY';
    if (!propertyName) {
        console.log(`WARNING: A property name could not be determined for ${content.contentType} at ${path.join('-')}`);
    }

    const key = Content.TEXT_CONTAINER === content.contentType
        ? path.join('__')
        : path.join('__') + `__${propertyName.toUpperCase()}`;

    return {
        key,
        value: (content as any)[propertyName],
    };
}

/**
 * @returns the name of the property on `content` requiring replacement with a `TextKey` reference, or `null` if no such property exists on the content
 */
function getPropertyRequiringTextReplacement<T extends ContentBase>(content: T): string | null {
    switch (content.contentType) {
        case Content.PROLOGUE: {
            return 'title';
        }
        case Content.PART: {
            return 'title';
        }
        case Content.SECTION: {
            return 'title';
        }
        case Content.CHAPTER: {
            return 'title';
        }
        case Content.ARTICLE: {
            return 'title';
        }
        case Content.ARTICLE_PARAGRAPH: {
            return 'title';
        }
        case Content.SUB_ARTICLE: {
            return 'title';
        }
        case Content.PARAGRAPH_GROUP: {
            return 'title';
        }
        case Content.TEXT: {
            return 'content';
        }
        default: {
            return null;
        }
    }
}

function getPaddedNumber(n: number, desiredLength: number): string {
    const s = `000${n}`;
    return s.slice(s.length - desiredLength);
}
