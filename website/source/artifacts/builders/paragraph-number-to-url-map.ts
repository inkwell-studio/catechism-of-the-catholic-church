import { CatechismStructure } from '@catechism-types';
import { getAllParagraphs } from '@catechism-utils/content.ts';

import { getUrl } from '@logic/routing.ts';

import { ParagraphNumberUrlMap } from '../types/types.ts';

export function build(catechism: CatechismStructure): ParagraphNumberUrlMap {
    const urlMap: ParagraphNumberUrlMap = {};

    getAllParagraphs(catechism).forEach((p) => urlMap[p.paragraphNumber] = getUrl(catechism.language, p.semanticPath));

    return urlMap;
}
