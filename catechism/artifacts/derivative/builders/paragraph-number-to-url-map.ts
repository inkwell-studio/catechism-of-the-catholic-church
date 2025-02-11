import { CatechismStructure, ParagraphNumberUrlMap } from '@catechism-types';
import { getAllParagraphs } from '@utils/content.ts';
import { getUrl } from '@website/source/logic/routing.ts';

export function build(catechism: CatechismStructure): ParagraphNumberUrlMap {
    const urlMap: ParagraphNumberUrlMap = {};

    getAllParagraphs(catechism).forEach((p) => urlMap[p.paragraphNumber] = getUrl(catechism.language, p.semanticPath));

    return urlMap;
}
