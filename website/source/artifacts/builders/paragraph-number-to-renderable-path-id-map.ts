import { getTopLevelEntries } from '@logic/table-of-contents.ts';

import { ParagraphNumberPathIdMap, TableOfContentsType } from '../types/types.ts';

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
