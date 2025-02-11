import { assertStrictEquals } from '@std/assert';

import Catechism from '@artifacts/primitive/catechism-la.json' with { type: 'json' };
import { CatechismStructure, Language } from '@catechism-types';

console.log('\nLatin text fragments ...');

Deno.test('the correct Catechism is loaded', () => {
    const actual = (Catechism as CatechismStructure).language;
    const expected = Language.LATIN;
    assertStrictEquals(actual, expected, `found [${actual}] instead of [${expected}]`);
});
