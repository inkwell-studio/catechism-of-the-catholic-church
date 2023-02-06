import { getTitleText } from './general.ts';
import { buildSubarticle } from './subarticle.ts';
import { intArrayOfRandomLength } from './utils.ts';
import { Limits } from '../config.ts';
import { ArticleParagraph, Content, Subarticle, TextKey } from '../../source/types/types.ts';

export function buildArticleParagraph(articleParagraphNumber: number): ArticleParagraph {
    return {
        contentType: Content.ARTICLE_PARAGRAPH,
        // This will be set later, after all content is created
        pathID: '0',
        articleParagraphNumber,
        title: getTitleText(Content.ARTICLE_PARAGRAPH, articleParagraphNumber) as TextKey,
        mainContent: buildContent(),
    };
}

function buildContent(): Array<Subarticle> {
    return intArrayOfRandomLength(Limits.articleParagraph.subarticle).map((i) => buildSubarticle(i));
}
