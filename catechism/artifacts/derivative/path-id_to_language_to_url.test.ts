import { assertEquals, assertStrictEquals } from '@std/assert';

import { DEFAULT_LANGUAGE } from '@catechism-types';
import { getPathIdLanguageUrlMap, getTableOfContents } from '@utils/artifacts.ts';
import { getLanguages } from '@utils/language.ts';
import { getAllEntries } from '@utils/table-of-contents.ts';

console.log('\nPathID to Language to URL map ...');
const urlMap = await getPathIdLanguageUrlMap();
const tableOfContents = await getTableOfContents(DEFAULT_LANGUAGE);

Deno.test('all entries have a submap with every language populated', () => {
    const allLanguages = getLanguages().map(([_languageKey, language]) => language).sort();

    for (const [pathID, submap] of Object.entries(urlMap)) {
        const languages = Object.keys(submap).sort();
        assertEquals(languages, allLanguages, `missing or extra mappings for PathID ${pathID}`);

        const urls = Object.values(submap);

        const numUrls = urls.length;
        const numUniqueUrls = new Set(urls).size;

        assertStrictEquals(numUrls, numUniqueUrls, `${numUrls - numUniqueUrls} duplicate URLs exist for PathID ${pathID}`);
    }
});

Deno.test('every PathID in the table of contents is accounted for', () => {
    const tocPathIDs = getAllEntries(tableOfContents).map((e) => e.pathID).sort();
    const pathIDs = Object.keys(urlMap).sort();

    assertEquals(pathIDs, tocPathIDs);
});
