import { Text } from './text-en.ts';
import { TextKey } from '../types/types.ts';

import { assertNotMatch, assertStrictEquals } from '../../../dependencies.ts';

const lineKeys = Object.values(TextKey);

//#region helpers
function testLines(func: (character: string, lineKey: string) => void): void {
    const keysAndLines = lineKeys.map((key) => [key, Text[key]]);

    for (const [lineKey, line] of keysAndLines) {
        func(line, lineKey);
    }
}

function errorMessage(lineKey: string, message: string): string {
    return `[${lineKey}] ${message}`;
}
//#endregion

//#region tests
console.log('\nEnglish text fragments ...');
Deno.test('"LORD" is spelled as "Lord" with small-capital formatting markings', () => {
    // TODO: Implement
    // TODO: Verify no instances of `LORD` exist (match case)
    // Do not need to verify that any instances of `___Lord___` exist
});

Deno.test('do not contain any British English spellings ("ou")', () => {
    // Fail if any words are found containg "ou" unless they are found in the `allowedWords` list
    const ouFalsePositives = [
        'about',
        'bound',
        'country',
        'group',
        'mountain',
        'mouth',
        'thoroughly',
        'throughout',
        'yourselves',
    ];

    const regex = /\b[a-zA-Z]+ou[a-zA-Z]+\b/;
    testLines((line, lineKey) => {
        const ouPotentials = line.toLowerCase().match(regex);

        if (ouPotentials) {
            const matches = ouPotentials.filter((word) => !ouFalsePositives.includes(word.toLowerCase()));
            assertStrictEquals(matches.length, 0, errorMessage(lineKey, 'contains a British spelling: ' + matches[0]));
        }
    });
});

Deno.test('do not contain any British English spellings (whole words)', () => {
    const alternateSpellings = [
        ['fulfil', 'fulfill'],
        ['fulfils', 'fulfills'],
        ['fulfilment', 'fulfillment'],
    ];

    testLines((line, lineKey) => {
        alternateSpellings.forEach((alternate) => {
            const britishSpelling = alternate[0];
            const regex = new RegExp('\\b' + britishSpelling + '\\b');
            assertNotMatch(
                line.toLowerCase(),
                regex,
                errorMessage(lineKey, `uses the British spelling ${britishSpelling} instead of ${alternate[1]}`),
            );
        });
    });
});

Deno.test('closing single-quotes are preceded by the proper puncuation', () => {
    const regex = /[^…\.,!]’/;
    testLines((line, lineKey) =>
        assertNotMatch(
            line,
            regex,
            errorMessage(lineKey, 'closing single-quote preceded by a character other than a period or ellipsis'),
        )
    );
});

Deno.test('closing double-quotes are preceded by the proper punctuation', () => {
    const exceptions: Array<TextKey> = [];

    const regex = /[^…\.,!]”/;
    testLines((line, lineKey) => {
        if (!exceptions.includes(lineKey as TextKey)) {
            assertNotMatch(
                line,
                regex,
                errorMessage(lineKey, 'closing double-quote preceded by a character other than a period or ellipsis'),
            );
        }
    });
});

Deno.test('closing single-quotes are not followed by by punctuation', () => {
    const regex = /’[…\.,!]/;
    testLines((line, lineKey) =>
        assertNotMatch(line, regex, errorMessage(lineKey, 'closing single-quote followed by a period or ellipsis'))
    );
});

Deno.test('closing double-quotes are not followed by by punctuation', () => {
    const regex = /”[…\.,!]/;
    testLines((line, lineKey) =>
        assertNotMatch(line, regex, errorMessage(lineKey, 'closing double-quote followed by a period or ellipsis'))
    );
});
//#endregion
