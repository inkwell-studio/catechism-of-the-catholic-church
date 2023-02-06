import { Text as englishText } from './text-en.ts';
import { CatechismText, TextKey } from '../types/types.ts';

import {
    assert,
    assertNotMatch,
    assertNotStrictEquals,
    assertStrictEquals,
    assertStringIncludes,
    fail,
} from '../../../dependencies.ts';

//#region setup
const allTexts: Array<[string, CatechismText]> = [
    ['English', englishText],
];
const lineKeys = Object.values(TextKey);

const expectedCharacters = 'abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    '0123456789' +
    ' ,.:;?' +
    '“”‘’' +
    `'` +
    '—-_…()';
//#endregion

//#region helpers
function errorMessage(language: string, lineKey: string, message: string): string {
    return `\n\n[${language}] [${lineKey}] ${message}\n`;
}

function testLines(func: (languageParam: string, lineParam: string, lineKeyParam: string) => void): void {
    for (const [language, text] of allTexts) {
        const keysAndLines = lineKeys.map((key) => [key, text[key]]);

        for (const [lineKey, line] of keysAndLines) {
            func(language, line, lineKey);
        }
    }
}

function testCharacters(func: (languageParam: string, characterParam: string, lineKeyParam: string) => void): void {
    for (const [language, text] of allTexts) {
        const keysAndLines = lineKeys.map((key) => [key, text[key]]);

        for (const [lineKey, line] of keysAndLines) {
            for (const character of line) {
                func(language, character, lineKey);
            }
        }
    }
}

function countOccurrences(line: string, testString: string): number {
    return line.split(testString).length - 1;
}
//#endregion

//#region tests
console.log('\nAll text fragments ...');
Deno.test('contain only expected characters', () => {
    testCharacters((language, character, lineKey) =>
        assertStringIncludes(
            expectedCharacters,
            character,
            errorMessage(language, lineKey, `unexpected character ${character}`),
        )
    );
});

Deno.test('contain no consecutive spaces', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            / {2}/,
            errorMessage(language, lineKey, 'consecutive spaces'),
        )
    );
});

Deno.test('contain no consecutive periods', () => {
    testLines((langauge, line, lineKey) =>
        assertNotMatch(
            line,
            /\.\./,
            errorMessage(langauge, lineKey, 'consecutive periods'),
        )
    );
});

Deno.test('contain no consecutive commas', () => {
    testLines((langauge, line, lineKey) =>
        assertNotMatch(
            line,
            /,,/,
            errorMessage(langauge, lineKey, 'consecutive commas'),
        )
    );
});

Deno.test('contain no consecutive colons', () => {
    testLines((langauge, line, lineKey) =>
        assertNotMatch(
            line,
            /::/,
            errorMessage(langauge, lineKey, 'consecutive colons'),
        )
    );
});

Deno.test('contain no consecutive semicolons', () => {
    testLines((langauge, line, lineKey) =>
        assertNotMatch(
            line,
            /;;/,
            errorMessage(langauge, lineKey, 'consecutive semicolons'),
        )
    );
});

Deno.test('ellipses are not written using three consecutive periods (the U+2026 unicode character should be used instead)', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            /\.\.\./,
            errorMessage(
                language,
                lineKey,
                'ellipsis written with three consecutive periods (use the U+2026 unicode character instead: …)',
            ),
        )
    );
});

Deno.test('ellipses are not written using multiple spaced-out periods (the U+2026 unicode character should be used instead)', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            /\. \./,
            errorMessage(
                language,
                lineKey,
                'ellipsis written with three consecutive periods (use the U+2026 unicode character instead: …)',
            ),
        )
    );
});

Deno.test('ellipses are not preceded by a space', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            / …/,
            errorMessage(language, lineKey, 'ellipsis preceded by a space'),
        )
    );
});

Deno.test('ellipses are followed by a space or are at the end of a quotation or text fragment', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            /…[^\s‘“’”]+/,
            errorMessage(language, lineKey, 'ellipsis not followed by a space'),
        )
    );
});

Deno.test('em-dashes are surrounded by spaces', () => {
    const regex = /[^\s]—|—[^\s]/;
    testLines((language, line, lineKey) => {
        assertNotMatch(line, regex, errorMessage(language, lineKey, 'em-dash not surrounded by spaces'));
    });
});

Deno.test('hyphens are surrounded by non-space characters', () => {
    const regex = /(\s-)|(-\s)/;
    testLines((language, line, lineKey) => {
        assertNotMatch(line, regex, errorMessage(language, lineKey, 'hyphen bordered by a space'));
    });
});

Deno.test('are not empty', () => {
    testLines((language, line, lineKey) =>
        assertNotStrictEquals(line, '', errorMessage(language, lineKey, 'empty string'))
    );
});

Deno.test('do not contain only whitespace', () => {
    testLines((language, line, lineKey) =>
        assertNotStrictEquals(line.trim(), '', errorMessage(language, lineKey, 'whitespace-only string'))
    );
});

Deno.test('do not begin with whitespace', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            /^ /,
            errorMessage(language, lineKey, 'fragment begins with whitespace'),
        )
    );
});

Deno.test('do not end with whitespace', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            / $/,
            errorMessage(language, lineKey, 'fragment ends with whitespace'),
        )
    );
});

Deno.test('begin with a letter, opening quote, or em-dash', () => {
    const regex = /[a-zA-Z“‘—]/;
    const test = ((line: string) => line[0].match(regex));

    testLines((language, line, lineKey) => {
        let valid = test(line);
        if (!valid) {
            // Remove any formatting characters to ensure that only content characters are being tested
            line = line.replaceAll('_', '');
            valid = test(line);
            if (!valid) {
                fail(
                    errorMessage(
                        language,
                        lineKey,
                        `begins with the character ${line[0]} instead of a letter, opening quote, or em-dash`,
                    ),
                );
            }
        }
    });
});

Deno.test('quotations do not begin with whitespace', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            /[‘“] /,
            errorMessage(language, lineKey, 'quotation begins with whitespace'),
        )
    );
});

Deno.test('quotations do not end with whitespace', () => {
    testLines((language, line, lineKey) =>
        assertNotMatch(
            line,
            / [’”]/,
            errorMessage(language, lineKey, 'quotation ends with whitespace'),
        )
    );
});

Deno.test('have an even number of underscores', () => {
    testLines((language, line, lineKey) => {
        const numUnderscores = countOccurrences(line, '_');
        const even = numUnderscores % 2 === 0;
        assert(even, errorMessage(language, lineKey, 'odd number of underscores'));
    });
});

Deno.test('do not contain empty single-quotes', () => {
    const regex = /‘(\s)*’/;
    testLines((language, line, lineKey) => {
        assertNotMatch(line, regex, errorMessage(language, lineKey, 'contains empty single-quotes'));
    });
});

Deno.test('do not contain empty double-quotes', () => {
    const regex = /“(\s)*”/;
    testLines((language, line, lineKey) => {
        assertNotMatch(line, regex, errorMessage(language, lineKey, 'contains empty double-quotes'));
    });
});

Deno.test('have the same number of opening and closing single-quotes', () => {
    testLines((language, line, lineKey) => {
        const numOpening = countOccurrences(line, '‘');
        const numClosing = countOccurrences(line, '’');
        assertStrictEquals(
            numOpening,
            numClosing,
            errorMessage(language, lineKey, `single-quote mismatch: ${numOpening} opening, ${numClosing} closing`),
        );
    });
});

Deno.test('have the same number of opening and closing double-quotes', () => {
    testLines((language, line, lineKey) => {
        const numOpening = countOccurrences(line, '“');
        const numClosing = countOccurrences(line, '”');
        assertStrictEquals(
            numOpening,
            numClosing,
            errorMessage(language, lineKey, `double-quote mismatch: ${numOpening} opening, ${numClosing} closing`),
        );
    });
});

Deno.test('do not have an opening single-quote without a closing single-quote', () => {
    // TODO: Implement
});

Deno.test('do not have an opening double-quote without a closing double-quote', () => {
    // TODO: Implement
});

Deno.test('do not have a closing single-quote appear before an opening single-quote', () => {
    // TODO: Implement
});

Deno.test('do not have a closing double-quote appear before an opening double-quote', () => {
    // TODO: Implement
});
//#endregion
