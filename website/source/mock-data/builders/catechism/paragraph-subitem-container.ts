import { Content, ParagraphSubitem, ParagraphSubitemContainer } from '@catechism-types';

import { buildParagraphSubitem } from './paragraph-subitem.ts';

import { getLimits } from '../../config/limits.ts';
import { intArrayOfRandomLength, randomBoolean } from '../../utils.ts';

export function buildParagraphSubitemContainer(): ParagraphSubitemContainer {
    return {
        contentType: Content.PARAGRAPH_SUB_ITEM_CONTAINER,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        semanticPath: '',
        // This will be set later, after all content is created
        naturalLanguagePath: [],
        // This will be set later, after all content is created
        rank: 0,
        ordered: randomBoolean(),
        openingContent: [],
        mainContent: buildContent(),
        finalContent: [],
    };
}

function buildContent(): Array<ParagraphSubitem> {
    return intArrayOfRandomLength(getLimits().paragraphSubitemContainer.subitem).map(() => buildParagraphSubitem());
}
