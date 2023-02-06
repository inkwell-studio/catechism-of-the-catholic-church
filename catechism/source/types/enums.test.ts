import { BibleBook, Content, OtherSourceEnum, PartEnum, ReferenceEnum, TextKey } from './types.ts';
import { assertStrictEquals } from '../../../dependencies.ts';

console.log('\nEnums ...');
Deno.test('have unique values', () => {
    const allEnumValues = [
        ...Object.values(BibleBook),
        ...Object.values(Content),
        ...Object.values(OtherSourceEnum),
        ...Object.values(PartEnum),
        ...Object.values(ReferenceEnum),
        ...Object.values(TextKey),
    ];

    const uniqueEnumValues = [...new Set(allEnumValues)];

    assertStrictEquals(allEnumValues.length, uniqueEnumValues.length, 'Duplicate enum values exist');
});
