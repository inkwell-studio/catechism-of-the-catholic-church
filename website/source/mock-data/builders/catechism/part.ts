import { Content, Paragraph, ParagraphGroup, Part, Section } from '@catechism-types';

import { getTitleText } from './general.ts';
import { buildParagraph } from './paragraph.ts';
import { buildParagraphGroup } from './paragraph-group.ts';
import { buildSection } from './section.ts';

import { getLimits } from '../../config/limits.ts';
import { Probability } from '../../config/probability.ts';
import { chance, intArrayOfRandomLength, randomBoolean } from '../../utils.ts';

export function buildPart(partNumber: number): Part {
    const openingContent = buildOpeningContent();
    const mainContent = buildSections();

    return {
        contentType: Content.PART,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        partNumber,
        title: getTitleText(Content.PART),
        openingContent,
        mainContent,
        finalContent: [],
        creed: null,
        tenCommandments: null,
    };
}

function buildOpeningContent(): Array<ParagraphGroup | Paragraph> {
    if (chance(Probability.part.hasOpeningContent)) {
        const useParagraphGroups = randomBoolean();
        return useParagraphGroups
            ? intArrayOfRandomLength(getLimits().part.openingContent).map((i) => buildParagraphGroup(i))
            : intArrayOfRandomLength(getLimits().part.openingContent).map(() => buildParagraph());
    } else {
        return [];
    }
}

function buildSections(): Array<Section> {
    const multipleSections = chance(Probability.part.multipleSections);
    if (multipleSections) {
        return intArrayOfRandomLength(getLimits().part.multipleSections).map((i) => buildSection(i));
    } else {
        return [buildSection(1)];
    }
}
