import { buildReferences } from './general.ts';
import { buildText } from './text.ts';
import { intArrayOfRandomLength } from '../utils.ts';
import { Limits } from '../config.ts';
import { Content, Text, TextContainer } from '../../source/types/types.ts';

export function buildTextContainer(): TextContainer {
    return {
        contentType: Content.TEXT_CONTAINER,
        // This will be set later, after all content is created
        pathID: '0',
        mainContent: buildContent(),
        references: buildReferences(),
        // These are set later, after all content is created
        paragraphReferences: [],
    };
}

function buildContent(): Array<Text> {
    return intArrayOfRandomLength(Limits.textContainer.parts).map(() => buildText());
}
