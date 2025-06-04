import { Content, ContentBase, Language, SemanticPath, SemanticPathSource } from '@catechism-types';
import { getContentNumber } from '@utils/title.ts';
import { translate } from '@utils/translation.ts';

/**
 * @param ancestors a list of ancestors of `child`, in descending order (i.e. `ancestors[i]` is the parent of `ancestors[i+1]`)
 */
export function buildSemanticPath(
    language: Language,
    child: SemanticPathSource,
    ancestors: Array<SemanticPathSource>,
): SemanticPath {
    return [...ancestors, child]
        .map((segment) => getSegmentString(language, segment))
        .join('/');
}

export function getSemanticPathSource(content: ContentBase, isFinalContent: boolean): SemanticPathSource {
    return {
        content: content.contentType,
        number: getContentNumber(content),
        isFinalContent,
    };
}

function getSegmentString(language: Language, segment: SemanticPathSource): string {
    if (segment.isFinalContent) {
        return translate('final-content', language);
    } else {
        const words = getSegmentContentString(language, segment.content);
        if (null !== segment.number) {
            return words + `-${segment.number}`;
        } else {
            return words;
        }
    }
}

function getSegmentContentString(language: Language, contentType: Content): string {
    // `switch` is used here to ensure that every content type is handled
    switch (contentType) {
        case Content.PROLOGUE:
            return translate('prologue', language);

        case Content.PROLOGUE_SECTION:
            return translate('prologue-section', language);

        case Content.PART:
            return translate('part', language);

        case Content.SECTION:
            return translate('section', language);

        case Content.CHAPTER:
            return translate('chapter', language);

        case Content.CHAPTER_SECTION:
            return translate('chapter-section', language);

        case Content.ARTICLE:
            return translate('article', language);

        case Content.ARTICLE_PARAGRAPH:
            return translate('article-paragraph', language);

        case Content.SUB_ARTICLE:
            return translate('subarticle', language);

        case Content.IN_BRIEF:
            return translate('in-brief', language);

        case Content.PARAGRAPH_GROUP:
            return translate('paragraph-group', language);

        case Content.GENERIC_CONTENT_CONTAINER:
            return translate('generic-content-container', language);

        case Content.BLOCK_QUOTE:
            return translate('block-quote', language);

        case Content.PARAGRAPH:
            return translate('paragraph', language);

        case Content.PARAGRAPH_SUB_ITEM_CONTAINER:
            return translate('paragraph-sub-item-container', language);

        case Content.PARAGRAPH_SUB_ITEM:
            return translate('paragraph-sub-item', language);

        case Content.TEXT_BLOCK:
            return translate('text-block', language);

        case Content.TEXT_HEADING:
            return translate('text-heading', language);

        case Content.TEXT_WRAPPER:
            return translate('text-wrapper', language);

        case Content.TEXT:
            return translate('text', language);

        case Content.CREED:
            return translate('creed', language);

        case Content.TEN_COMMANDMENTS:
            return translate('ten-commandments', language);
    }
}
