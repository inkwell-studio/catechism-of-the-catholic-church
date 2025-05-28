import { Content, Paragraph, PrologueSection } from '@catechism-types';

import { getTitleText } from './general.ts';
import { buildParagraph } from './paragraph.ts';
import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength } from '../../utils.ts';

export function buildPrologueSection(prologueSectionNumber: number): PrologueSection {
    return {
        contentType: Content.PROLOGUE_SECTION,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        prologueSectionNumber,
        title: getTitleText(Content.PROLOGUE_SECTION, prologueSectionNumber),
        openingContent: [],
        mainContent: buildMainContent(),
        finalContent: [],
    };
}

function buildMainContent(): Array<Paragraph> {
    return intArrayOfRandomLength(getLimits().prologueSection.paragraph).map(() => buildParagraph());
}
