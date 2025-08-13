import { CatechismStructure } from '@catechism-types';
import { getAllParagraphs } from '@catechism-utils/content.ts';

import { ParagraphNumberContentMap } from '../types/types.ts';

export function build(catechism: CatechismStructure): ParagraphNumberContentMap {
    const contentMap: ParagraphNumberContentMap = {};

    getAllParagraphs(catechism).forEach((p) => contentMap[p.paragraphNumber] = p);

    return contentMap;
}
