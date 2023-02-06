import { buildTextContainer } from './text-container.ts';
import { chance, intArrayOfRandomLength } from './utils.ts';
import { Limits, Probability } from '../config.ts';
import { Content, Paragraph, TextContainer } from '../../source/types/types.ts';

export function buildParagraph(): Paragraph {
    const supplementary = chance(Probability.paragraph.supplementary);

    return {
        contentType: Content.PARAGRAPH,
        // This will be set later, after all content is created
        pathID: '0',
        // This will be set later, after all content is created
        paragraphNumber: 1,
        supplementary,
        mainContent: buildContent(),
    };
}

function buildContent(): Array<TextContainer> {
    return intArrayOfRandomLength(Limits.paragraph.textContainers).map(() => buildTextContainer());
}
