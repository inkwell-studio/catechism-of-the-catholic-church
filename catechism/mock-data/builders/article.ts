import { buildArticleParagraph } from './article-paragraph.ts';
import { getTitleText } from './general.ts';
import { buildInBrief } from './in-brief.ts';
import { chance, intArrayOfRandomLength } from './utils.ts';
import { buildSubarticle } from './subarticle.ts';
import { buildTextContent } from './text-content.ts';
import { Limits, Probability } from '../config.ts';
import {
    Article,
    ArticleParagraph,
    Content,
    InBrief,
    ParagraphGroup,
    Subarticle,
    TextContent,
    TextKey,
} from '../../source/types/types.ts';

export function buildArticle(articleNumber: number): Article {
    return {
        contentType: Content.ARTICLE,
        // This will be set later, after all content is created
        pathID: '0',
        articleNumber,
        title: getTitleText(Content.ARTICLE, articleNumber) as TextKey,
        mainContent: buildContent(),
        openingContent: buildOpeningContent(),
    };
}

function buildContent(): Array<ArticleParagraph | Subarticle | ParagraphGroup | InBrief> {
    const content = [];

    const useArticleParagraphs = chance(Probability.article.useArticleParagraphs);
    if (useArticleParagraphs) {
        const articleParagraphs = intArrayOfRandomLength(Limits.article.articleParagraph).map((i) =>
            buildArticleParagraph(i)
        );
        content.push(...articleParagraphs);
    } else {
        const subarticles = chance(Probability.article.createSubarticles) ? buildSubarticles() : [];
        content.push(...subarticles);
    }

    const inBrief = buildInBrief();
    content.push(inBrief);

    return content;
}

function buildOpeningContent(): Array<TextContent> {
    return intArrayOfRandomLength(Limits.article.textContent).map(() => buildTextContent(false));
}

function buildSubarticles(): Array<Subarticle> {
    return intArrayOfRandomLength(Limits.article.subarticle).map((i) => buildSubarticle(i));
}
