import Catechism from './catechism-es.json' assert { type: 'json' };

import { assertStrictEquals } from '$deno/assert/mod.ts';

import { CatechismStructure, Language } from '../source/types/types.ts';

console.log('\nSpanish text fragments ...');

Deno.test('the correct Catechism is loaded', () => {
    const actual = (Catechism as CatechismStructure).language;
    const expected = Language.SPANISH;
    assertStrictEquals(actual, expected, `found [${actual}] instead of [${expected}]`);
});
