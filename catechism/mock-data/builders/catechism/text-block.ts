import { Content, TextBlock, TextWrapper } from '@catechism-types';

import { buildTextWrapper } from './text-wrapper.ts';
import { getLimits } from '../../config/limits.ts';
import { Probability } from '../../config/probability.ts';
import { chance, intArrayOfRandomLength } from '../../utils.ts';

export function buildTextBlock(): TextBlock {
    const supplementary = chance(Probability.textBlock.supplementary);

    return {
        contentType: Content.TEXT_BLOCK,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        supplementary,
        openingContent: [],
        mainContent: buildContent(),
        finalContent: [],
    };
}

function buildContent(): Array<TextWrapper> {
    return intArrayOfRandomLength(getLimits().textBlock.textWrapper).map(() => buildTextWrapper());
}
