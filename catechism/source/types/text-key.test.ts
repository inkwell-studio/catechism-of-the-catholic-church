import { TextKey } from './text-key.ts';

import { assertStrictEquals, fail } from '../../../dependencies.ts';

console.log('\nText keys ...');

Deno.test('values match their key', () => {
    for (const key in TextKey) {
        const value = TextKey[key as TextKey];
        assertStrictEquals(value, key, `TextKey.${key} has a non-matching value`);
    }
});

Deno.test('have unique values', () => {
    const values = Object.values(TextKey);
    const uniqueValues = [...new Set(values)];

    if (uniqueValues.length !== values.length) {
        // Now do extra work to display the duplicates
        const duplicateValues = values.filter((value, index) => values.indexOf(value, index + 1) > 0);

        const duplicateKeys: Array<string> = [];
        for (const key in TextKey) {
            const value = TextKey[key as TextKey];
            if (duplicateValues.includes(value)) {
                duplicateKeys.push(key);
            }
        }

        fail(`multiple TextKey's have identical values:\n\n    ${duplicateKeys.join('\n    ')}\n`);
    }
});
