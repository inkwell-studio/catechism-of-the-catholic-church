import { Content, PathID, Prologue, PrologueSection, TextContent } from '@catechism-types';

import { getTitleText } from './general.ts';
import { buildPrologueSection } from './prologue-section.ts';
import { buildTextBlock } from './text-block.ts';

import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength } from '../../utils.ts';

export function buildPrologue(pathID: PathID): Prologue {
    const openingContent = buildOpeningContent();
    const mainContent = buildMainContent();

    return {
        contentType: Content.PROLOGUE,
        pathID,
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        title: getTitleText(Content.PROLOGUE),
        openingContent,
        mainContent,
        finalContent: [],
    };
}

function buildOpeningContent(): Array<TextContent> {
    return intArrayOfRandomLength(getLimits().prologue.text).map(() => buildTextBlock());
}

function buildMainContent(): Array<PrologueSection> {
    return [1, 2, 3, 4, 5].map((i) => buildPrologueSection(i));
}
