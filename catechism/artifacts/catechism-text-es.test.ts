import { assertStrictEquals } from '@std/assert';

import Catechism from './catechism-es.json' with { type: 'json' };
import { CatechismStructure, Language } from '@catechism-types';

console.log('\nSpanish text fragments ...');

Deno.test('the correct Catechism is loaded', () => {
    const actual = (Catechism as CatechismStructure).language;
    const expected = Language.SPANISH;
    assertStrictEquals(actual, expected, `found [${actual}] instead of [${expected}]`);
});
