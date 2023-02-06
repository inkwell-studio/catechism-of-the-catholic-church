import { getTitleText } from './general.ts';
import { buildParagraphGroup } from './paragraph-group.ts';
import { buildTextContent } from './text-content.ts';
import { chance, intArrayOfRandomLength, randomInt } from '../utils.ts';
import { Content, ParagraphGroup, Subarticle, TextContent, TextKey } from '../../source/types/types.ts';
import { Limits, Probability } from '../config.ts';

export function buildSubarticle(i: number): Subarticle {
    return {
        contentType: Content.SUB_ARTICLE,
        // This will be set later, after all content is created
        pathID: '0',
        subarticleNumber: i,
        title: getTitleText(Content.SUB_ARTICLE, i) as TextKey,
        mainContent: buildContent(),
    };
}

function buildContent(): Array<ParagraphGroup | TextContent> {
    const numItems = randomInt(Limits.subarticle.contentItems);

    const items = [];
    let paragraphGroupIndex = 0;
    for (let i = 0; i < numItems; i++) {
        const createParagraphGroup = chance(Probability.subarticle.paragraphGroup);
        if (createParagraphGroup) {
            items.push(buildParagraphGroup(paragraphGroupIndex++));
        } else {
            const textContent = intArrayOfRandomLength(Limits.subarticle.textContent).map(() => buildTextContent(true));
            items.push(...textContent);
        }
    }

    return items;
}
