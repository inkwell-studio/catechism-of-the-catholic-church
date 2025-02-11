import { ParagraphNumberPathIdMap, TableOfContentsType } from '@catechism-types';
import { getTopLevelEntries } from '@utils/table-of-contents.ts';

export function build(tableOfContents: TableOfContentsType): ParagraphNumberPathIdMap {
    const map: ParagraphNumberPathIdMap = {};

    const topLevelEntries = getTopLevelEntries(tableOfContents);

    topLevelEntries.forEach((entry) => {
        for (let i = entry.firstParagraphNumber; i <= entry.lastParagraphNumber; i++) {
            map[i] = entry.pathID;
        }
    });

    return map;
}
