import { assertStrictEquals } from '@std/assert';

import { getLanguages } from '@catechism-utils/language.ts';

import { getRenderablePathMap } from '@logic/artifacts.ts';

import { SemanticPathPathIdMap } from './types/types.ts';

console.log('\nSemanticPath to renderable PathID map ...');
for await (const [key, language] of getLanguages()) {
    const renderablePathMap = await getRenderablePathMap(language);
    runTests(key, renderablePathMap);
}

function runTests(
    languageKey: string,
    renderablePathMap: SemanticPathPathIdMap,
): void {
    Deno.test(`[${languageKey}] all SemanticPaths are unique`, () => {
        const semanticPaths = Object.keys(renderablePathMap);
        const numUniqueSemanticPaths = new Set(semanticPaths).size;

        const numSemanticPaths = semanticPaths.length;
        assertStrictEquals(
            numSemanticPaths,
            numUniqueSemanticPaths,
            `${numSemanticPaths - numUniqueSemanticPaths} duplicate SemanticPaths exist`,
        );
    });
}
