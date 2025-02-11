import { TextContent } from '@catechism-types';

import { buildBlockQuote } from './block-quote.ts';
import { buildTextBlock } from './text-block.ts';
import { Probability } from '../../config/probability.ts';
import { chance } from '../../utils.ts';

export function buildTextContent(includeBlockQuotes: boolean): TextContent {
    if (includeBlockQuotes && chance(Probability.textContent.blockQuote)) {
        return buildBlockQuote();
    } else {
        return buildTextBlock();
    }
}
