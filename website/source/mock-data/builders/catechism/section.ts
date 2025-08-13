import { Article, Chapter, Content, ContentBase, InBrief, Paragraph, ParagraphGroup, Section } from '@catechism-types';

import { buildArticle } from './article.ts';
import { buildChapter } from './chapter.ts';
import { getTitleText } from './general.ts';
import { buildInBrief } from './in-brief.ts';
import { buildParagraph } from './paragraph.ts';
import { buildParagraphGroup } from './paragraph-group.ts';

import { getLimits } from '../../config/limits.ts';
import { Probability } from '../../config/probability.ts';
import { chance, getContentCounts, intArrayOfRandomLength, randomBoolean } from '../../utils.ts';

export function buildSection(sectionNumber: number): Section {
    const inBrief = buildInBriefHelper();

    const openingContent = chance(Probability.section.hasOpeningText) ? buildOpeningContent() : [];
    const mainContent = buildMainContent(openingContent, !!inBrief);

    return {
        contentType: Content.SECTION,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        sectionNumber,
        title: getTitleText(Content.SECTION),
        openingContent,
        mainContent,
        finalContent: [],
        inBrief,
    };
}

function buildOpeningContent(): Array<ParagraphGroup | Paragraph> {
    const openingContent: Array<ParagraphGroup | Paragraph> = [];

    let numParagraphGroups = 0;
    const numChildren = intArrayOfRandomLength(getLimits().section.openingContent).length;
    for (let i = 0; i < numChildren; i++) {
        const useParagraph = randomBoolean();
        if (useParagraph) {
            openingContent.push(buildParagraph());
        } else {
            numParagraphGroups++;
            openingContent.push(buildParagraphGroup(numParagraphGroups));
        }
    }

    return openingContent;
}

function buildMainContent(
    precedingContent: Array<ContentBase>,
    hasInBrief: boolean,
): Array<Chapter> | Array<Article> | Array<ParagraphGroup> {
    const contentCounts = getContentCounts(precedingContent);

    if (hasInBrief) {
        // Sections with an In Brief item contain no Chapters or Articles
        const offset = contentCounts.get(Content.PARAGRAPH_GROUP) ?? 0;
        return intArrayOfRandomLength(getLimits().section.paragraphGroup).map((i) => buildParagraphGroup(i + offset));
    } else {
        const useChapters = chance(Probability.section.useChapters);
        if (useChapters) {
            const offset = contentCounts.get(Content.CHAPTER) ?? 0;
            const multipleChapters = chance(Probability.section.multipleChapters);
            if (multipleChapters) {
                return intArrayOfRandomLength(getLimits().section.multipleChapter).map((i) => buildChapter(i + offset));
            } else {
                return [buildChapter(1 + offset)];
            }
        } else {
            const offset = contentCounts.get(Content.ARTICLE) ?? 0;
            return intArrayOfRandomLength(getLimits().section.article).map((i) => buildArticle(i + offset));
        }
    }
}

function buildInBriefHelper(): InBrief | null {
    return chance(Probability.section.hasInBrief) ? buildInBrief() : null;
}
