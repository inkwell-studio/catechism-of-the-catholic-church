import { Content, ContentBase, PathID, Prologue, Subarticle, TextContent } from '@catechism-types';

import { getTitleText } from './general.ts';
import { buildSubarticle } from './subarticle.ts';
import { buildTextBlock } from './text-block.ts';

import { getLimits } from '../../config/limits.ts';
import { getContentCounts, intArrayOfRandomLength } from '../../utils.ts';

export function buildPrologue(pathID: PathID): Prologue {
    const openingContent = buildOpeningContent();
    const mainContent = buildMainContent(openingContent);

    return {
        contentType: Content.PROLOGUE,
        pathID,
        // This will be set later, after all content is created
        semanticPath: '',
        title: getTitleText(Content.PROLOGUE, 1),
        openingContent,
        mainContent,
        finalContent: [],
    };
}

function buildOpeningContent(): Array<TextContent> {
    return intArrayOfRandomLength(getLimits().prologue.text).map(() => buildTextBlock());
}

function buildMainContent(precedingContent: Array<ContentBase>): Array<Subarticle> {
    const contentCounts = getContentCounts(precedingContent);
    const offset = contentCounts.get(Content.SUB_ARTICLE) ?? 0;
    return intArrayOfRandomLength(getLimits().prologue.subarticle).map((i) => buildSubarticle(i + offset));
}
