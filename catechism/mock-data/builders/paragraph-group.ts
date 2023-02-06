import { Content, ParagraphGroup, TextContent, TextKey } from '../../source/types/types.ts';
import { buildTextContent } from './text-content.ts';
import { getTitleText } from './general.ts';
import { intArrayOfRandomLength } from './utils.ts';
import { Limits } from '../config.ts';

export function buildParagraphGroup(index: number): ParagraphGroup {
    return {
        contentType: Content.PARAGRAPH_GROUP,
        // This will be set later, after all content is created
        pathID: '0',
        paragraphGroupNumber: 1,
        title: getTitleText(Content.PARAGRAPH_GROUP, index) as TextKey,
        mainContent: buildContent(),
    };
}

function buildContent(): Array<TextContent> {
    return intArrayOfRandomLength(Limits.paragraphGroup.text).map(() => buildTextContent(true));
}
