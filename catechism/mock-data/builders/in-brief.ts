import { buildParagraph } from './paragraph.ts';
import { intArrayOfRandomLength } from './utils.ts';
import { Content, InBrief, Paragraph } from '../../source/types/types.ts';
import { Limits } from '../config.ts';

export function buildInBrief(): InBrief {
    return {
        contentType: Content.IN_BRIEF,
        // This will be set later, after all content is created
        pathID: '0',
        mainContent: buildContent(),
    };
}

function buildContent(): Array<Paragraph> {
    return intArrayOfRandomLength(Limits.inBrief.paragraph).map(() => buildParagraph());
}
