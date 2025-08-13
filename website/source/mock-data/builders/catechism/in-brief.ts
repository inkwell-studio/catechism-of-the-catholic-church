import { Content, InBrief, Paragraph } from '@catechism-types';

import { buildParagraph } from './paragraph.ts';

import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength } from '../../utils.ts';

export function buildInBrief(): InBrief {
    return {
        contentType: Content.IN_BRIEF,
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

function buildContent(): Array<Paragraph> {
    return intArrayOfRandomLength(getLimits().inBrief.paragraph).map(() => buildParagraph());
}
