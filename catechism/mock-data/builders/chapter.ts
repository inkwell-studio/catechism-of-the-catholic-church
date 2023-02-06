import { buildArticle } from './article.ts';
import { getTitleText } from './general.ts';
import { Article, Chapter, Content, Subarticle, TextContent, TextKey } from '../../source/types/types.ts';
import { intArrayOfRandomLength, randomBoolean } from './utils.ts';
import { buildTextContent } from './text-content.ts';
import { Limits } from '../config.ts';

export function buildChapter(chapterNumber: number): Chapter {
    const openingContent = randomBoolean() ? buildOpeningContent() : [];

    return {
        contentType: Content.CHAPTER,
        // This will be set later, after all content is created
        pathID: '0',
        chapterNumber,
        title: getTitleText(Content.CHAPTER, chapterNumber) as TextKey,
        mainContent: buildContent(),
        openingContent,
    };
}

function buildContent(): Array<Article | Subarticle> {
    return intArrayOfRandomLength(Limits.chapter.article).map((i) => buildArticle(i));
}

function buildOpeningContent(): Array<TextContent> {
    return intArrayOfRandomLength(Limits.chapter.openingContent.textContent).map(() => buildTextContent(true));
}
