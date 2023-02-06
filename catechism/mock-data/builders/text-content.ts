import { buildBlockQuote } from './block-quote.ts';
import { buildParagraph } from './paragraph.ts';
import { buildTextContainer } from './text-container.ts';
import { TextContent } from '../../source/types/types.ts';
import { chance } from './utils.ts';
import { Probability } from '../config.ts';

export function buildTextContent(includeBlockQuotes: boolean): TextContent {
    if (includeBlockQuotes && chance(Probability.textContent.blockQuote)) {
        return buildBlockQuote();
    } else if (chance(Probability.textContent.text)) {
        return buildTextContainer();
    } else {
        return buildParagraph();
    }
}
