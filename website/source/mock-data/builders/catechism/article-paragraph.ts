import { ArticleParagraph, Content, Subarticle } from '@catechism-types';

import { getTitleText } from './general.ts';
import { buildInBrief } from './in-brief.ts';
import { buildSubarticle } from './subarticle.ts';

import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength } from '../../utils.ts';

export function buildArticleParagraph(articleParagraphNumber: number): ArticleParagraph {
    return {
        contentType: Content.ARTICLE_PARAGRAPH,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        articleParagraphNumber,
        title: getTitleText(Content.ARTICLE_PARAGRAPH),
        openingContent: [],
        mainContent: buildMainContent(),
        finalContent: [],
        inBrief: buildInBrief(),
    };
}

function buildMainContent(): Array<Subarticle> {
    return intArrayOfRandomLength(getLimits().articleParagraph.subarticle).map((i) => buildSubarticle(i));
}
