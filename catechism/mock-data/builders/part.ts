import { TextKey } from '../../source/types/text-key.ts';
import { Content, ParagraphGroup, Part, PartEnum, Section, TextContent } from '../../source/types/types.ts';
import { Limits, Probability } from '../config.ts';
import { getTitleText } from './general.ts';
import { buildParagraphGroup } from './paragraph-group.ts';
import { buildSection } from './section.ts';
import { buildTextContent } from './text-content.ts';
import { chance, intArrayOfRandomLength, randomBoolean } from '../utils.ts';

export function buildPart(part: PartEnum, index: number): Part {
    const openingContent = buildOpeningContent();
    const mainContent = buildSections();

    return {
        contentType: Content.PART,
        pathID: `${index}`,
        part,
        title: getTitleText(Content.PART, index) as TextKey,
        mainContent,
        openingContent,
    };
}

function buildOpeningContent(): Array<ParagraphGroup | TextContent> {
    if (chance(Probability.part.hasOpeningContent)) {
        return intArrayOfRandomLength(Limits.part.openingContent).map((i) =>
            randomBoolean() ? buildParagraphGroup(i) : buildTextContent(randomBoolean())
        );
    } else {
        return [];
    }
}

function buildSections(): Array<Section> {
    const multipleSections = chance(Probability.part.multipleSections);
    if (multipleSections) {
        return intArrayOfRandomLength(Limits.part.multipleSections).map((i) => buildSection(i));
    } else {
        return [buildSection(1)];
    }
}
