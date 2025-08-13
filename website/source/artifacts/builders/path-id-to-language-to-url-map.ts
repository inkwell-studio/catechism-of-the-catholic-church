import { PathID } from '@catechism-types';
import { getAllEntries } from '@logic/table-of-contents.ts';

import { PathIdLanguageUrlMap, TableOfContentsType } from '../types/types.ts';

export function build(allTableOfContents: Array<TableOfContentsType>): PathIdLanguageUrlMap {
    const map: Record<PathID, Record<string, string>> = {};

    allTableOfContents.forEach((tableOfContents) => {
        const language = tableOfContents.language;
        const tocEntries = getAllEntries(tableOfContents);

        tocEntries.forEach((tocEntry) => {
            const { pathID, url } = tocEntry;

            if (!map[pathID]) {
                map[pathID] = { [language]: url };
            } else {
                map[pathID][language] = url;
            }
        });
    });

    return map as PathIdLanguageUrlMap;
}
