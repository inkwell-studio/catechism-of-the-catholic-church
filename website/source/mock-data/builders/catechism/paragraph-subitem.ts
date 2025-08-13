import { Content, ParagraphSubitem, TextBlock } from '@catechism-types';

import { buildTextBlock } from './text-block.ts';

import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength } from '../../utils.ts';

export function buildParagraphSubitem(): ParagraphSubitem {
    return {
        contentType: Content.PARAGRAPH_SUB_ITEM,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        openingContent: [],
        mainContent: buildContent(),
        finalContent: [],
    };
}

function buildContent(): Array<TextBlock> {
    return intArrayOfRandomLength(getLimits().paragraphSubitem.textBlock).map(() => buildTextBlock());
}
