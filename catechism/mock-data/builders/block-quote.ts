import { buildTextContainer } from './text-container.ts';
import { intArrayOfRandomLength } from '../utils.ts';
import { BlockQuote, Content, TextContainer } from '../../source/types/types.ts';
import { Limits } from '../config.ts';

export function buildBlockQuote(): BlockQuote {
    return {
        contentType: Content.BLOCK_QUOTE,
        // This will be set later, after all content is created
        pathID: '0',
        mainContent: buildContent(),
    };
}

function buildContent(): Array<TextContainer> {
    return intArrayOfRandomLength(Limits.blockQuote.text).map(() => buildTextContainer());
}
