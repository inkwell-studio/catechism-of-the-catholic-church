import { buildChapter } from './chapter.ts';
import { getTitleText } from './general.ts';
import { buildParagraphGroup } from './paragraph-group.ts';
import { buildTextContent } from './text-content.ts';
import { chance, intArrayOfRandomLength, randomBoolean } from './utils.ts';
import { Article, Chapter, Content, ParagraphGroup, Section, TextContent, TextKey } from '../../source/types/types.ts';
import { Limits, Probability } from '../config.ts';

export function buildSection(index: number): Section {
    const openingContent = chance(Probability.section.hasOpeningText) ? buildOpeningContent() : [];

    return {
        contentType: Content.SECTION,
        pathID: `${index}`,
        sectionNumber: index,
        title: getTitleText(Content.SECTION, index) as TextKey,
        mainContent: buildContent(),
        openingContent,
    };
}

function buildContent(): Array<Chapter | Article> {
    const multipleChapters = chance(Probability.section.multipleChapters);
    if (multipleChapters) {
        return intArrayOfRandomLength(Limits.section.multipleChapters).map((i) => buildChapter(i));
    } else {
        return [buildChapter(1)];
    }
}

function buildOpeningContent(): Array<ParagraphGroup | TextContent> {
    return intArrayOfRandomLength(Limits.section.openingContent).map((i) =>
        randomBoolean() ? buildTextContent(true) : buildParagraphGroup(i)
    );
}
