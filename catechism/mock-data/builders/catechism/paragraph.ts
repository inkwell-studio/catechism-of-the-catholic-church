import { Content, Paragraph, ParagraphSubitemContainer, TextBlock } from '@catechism-types';

import { buildTextBlock } from './text-block.ts';
import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength } from '../../utils.ts';

export function buildParagraph(): Paragraph {
    return {
        contentType: Content.PARAGRAPH,
        openingContent: [],
        mainContent: buildContent(),
        finalContent: [],

        // Each of these will be set later, after all content is created
        pathID: '0',
        semanticPath: '',
        naturalLanguagePath: [],
        rank: 0,
        paragraphNumber: 1,
    };
}

function buildContent(): Array<ParagraphSubitemContainer | TextBlock> {
    return intArrayOfRandomLength(getLimits().paragraph.textBlock).map(() => buildTextBlock());
}
