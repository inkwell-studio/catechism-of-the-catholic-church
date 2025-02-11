import { CatechismStructure, ParagraphNumberContentMap } from '@catechism-types';
import { getAllParagraphs } from '@utils/content.ts';

export function build(catechism: CatechismStructure): ParagraphNumberContentMap {
    const contentMap: ParagraphNumberContentMap = {};

    getAllParagraphs(catechism).forEach((p) => contentMap[p.paragraphNumber] = p);

    return contentMap;
}
