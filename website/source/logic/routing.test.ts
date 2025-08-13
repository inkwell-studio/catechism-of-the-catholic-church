import { assertStrictEquals } from '@std/assert';
import { DEFAULT_LANGUAGE, Language, SemanticPath } from '@catechism-types';
import { getLanguages } from '@catechism-utils/language.ts';

import {
    getLanguageFromPathname,
    getLanguageTag,
    getParagraphNumber,
    getPartialContentUrls,
    getUrl,
    isHomePage,
    joinPaths,
    removeLanguageTag,
} from './routing.ts';
import { AuxiliaryRouteKey, AuxiliaryRoutesByKeyAndLanguage } from '@logic/constants.ts';

console.log('\nrouting utils ...');

//#region joinPaths()
Deno.test('joinPaths()', async (test) => {
    await test.step('non-root paths never end with a trailing slash,', async (t) => {
        const testCases = [
            [[], ''],
            [[''], ''],

            [['123'], '123'],
            [['123/'], '123'],
            [['abc', '123'], 'abc/123'],
            [['abc/', '123'], 'abc/123'],
            [['abc', '123/'], 'abc/123'],
            [['abc/', '123/'], 'abc/123'],
            [['abc/', '', '123/'], 'abc/123'],

            // with hashes
            [['#123'], '#123'],
            [['', '#123'], '#123'],
            [['/#123'], '#123'],
            [['/', '#123'], '#123'],

            [['abc#123'], 'abc#123'],
            [['abc/#123'], 'abc#123'],

            [['abc', '#123'], 'abc#123'],
            [['abc/', '#123'], 'abc#123'],
        ] as const;

        for (const [args, expectedResult] of testCases) {
            const testDescription = getTestDescription(args);

            await t.step(testDescription, () => {
                const result = joinPaths(...args);
                assertStrictEquals(result, expectedResult);
            });
        }
    });

    await test.step('the root path is preserved,', async (t) => {
        const testCases = [
            [['/'], '/'],
            [['', '/'], '/'],
            [['/', ''], '/'],
            [['/', '/'], '/'],
        ] as const;

        for (const [args, expectedResult] of testCases) {
            const testDescription = getTestDescription(args);

            await t.step(testDescription, () => {
                const result = joinPaths(...args);
                assertStrictEquals(result, expectedResult);
            });
        }
    });

    function getTestDescription(testArguments: Readonly<Array<string>>): string {
        // deno-fmt-ignore
        return testArguments.length === 1
            ? `'${testArguments[0]}'`
            : testArguments.map((a) => `'${a}'`).join(' + ');
    }
});
//#endregion

//#region getUrl()
function urlTest(semanticPath: SemanticPath, expectedUrl: string, includeFragment = true): void {
    const url = getUrl(Language.ENGLISH, semanticPath, includeFragment);
    assertStrictEquals(url, expectedUrl);
}

Deno.test('getUrl(): high-level content', () => {
    [
        [
            'prologue',
            '/prologue',
        ],
        [
            'part-1',
            '/part-1',
        ],
        [
            'part-1/section-3',
            '/part-1/section-3',
        ],
        [
            'part-1/section-3/chapter-2',
            '/part-1/section-3/chapter-2',
        ],
        [
            'part-1/section-3/chapter-2/article-4',
            '/part-1/section-3/chapter-2/article-4',
        ],
    ].forEach((testCase) => urlTest(testCase[0], testCase[1]));
});

Deno.test('getUrl(): the first Article Paragraphs', () => {
    urlTest(
        'part-1/section-3/chapter-2/article-4/article-paragraph-1',
        '/part-1/section-3/chapter-2/article-4#article-paragraph-1',
    );
});

Deno.test('getUrl(): the subsequent Article Paragraphs', () => {
    urlTest(
        'part-1/section-3/chapter-2/article-4/article-paragraph-7',
        '/part-1/section-3/chapter-2/article-4/article-paragraph-7',
    );
});

Deno.test('getUrl(): low-level content within the Prologue', () => {
    urlTest('prologue/prologue-section-1', '/prologue#prologue-section-1');
});

Deno.test('getUrl(): low-level content within a Chapter', () => {
    [
        [
            'part-1/section-3/chapter-2/in-brief',
            '/part-1/section-3/chapter-2#in-brief',
        ],
        [
            'part-1/section-3/chapter-2/paragraph-702',
            '/part-1/section-3/chapter-2#702',
        ],
        [
            'part-1/section-3/chapter-2/subarticle-5',
            '/part-1/section-3/chapter-2#subarticle-5',
        ],
        [
            'part-1/section-3/chapter-2/subarticle-5/paragraph-group-6',
            '/part-1/section-3/chapter-2#subarticle-5/paragraph-group-6',
        ],
        [
            'part-1/section-3/chapter-2/subarticle-5/paragraph-group-6/paragraph-702',
            '/part-1/section-3/chapter-2#702',
        ],
        [
            'part-1/section-3/chapter-2/subarticle-5/paragraph-702',
            '/part-1/section-3/chapter-2#702',
        ],
        [
            'part-1/section-3/chapter-2/paragraph-group-5',
            '/part-1/section-3/chapter-2#paragraph-group-5',
        ],
        [
            'part-1/section-3/chapter-2/paragraph-group-5/paragraph-702',
            '/part-1/section-3/chapter-2#702',
        ],
        [
            'part-1/section-3/chapter-2/paragraph-702',
            '/part-1/section-3/chapter-2#702',
        ],
    ].forEach((testCase) => urlTest(testCase[0], testCase[1]));
});

Deno.test('getUrl(): low-level content within a (Chapter > Article)', () => {
    [
        [
            'part-1/section-3/chapter-2/article-4/in-brief',
            '/part-1/section-3/chapter-2/article-4#in-brief',
        ],
        [
            'part-1/section-3/chapter-2/article-4/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/subarticle-5',
            '/part-1/section-3/chapter-2/article-4#subarticle-5',
        ],
        [
            'part-1/section-3/chapter-2/article-4/subarticle-5/paragraph-group-6',
            '/part-1/section-3/chapter-2/article-4#subarticle-5/paragraph-group-6',
        ],
        [
            'part-1/section-3/chapter-2/article-4/subarticle-5/paragraph-group-6/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/subarticle-5/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/paragraph-group-5',
            '/part-1/section-3/chapter-2/article-4#paragraph-group-5',
        ],
        [
            'part-1/section-3/chapter-2/article-4/paragraph-group-5/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
    ].forEach((testCase) => urlTest(testCase[0], testCase[1]));
});

Deno.test('getUrl(): low-level content within a (Section > Article)', () => {
    [
        [
            'part-1/section-3/article-4/in-brief',
            '/part-1/section-3/article-4#in-brief',
        ],
        [
            'part-1/section-3/article-4/paragraph-702',
            '/part-1/section-3/article-4#702',
        ],
        [
            'part-1/section-3/article-4/subarticle-5',
            '/part-1/section-3/article-4#subarticle-5',
        ],
        [
            'part-1/section-3/article-4/subarticle-5/paragraph-group-6',
            '/part-1/section-3/article-4#subarticle-5/paragraph-group-6',
        ],
        [
            'part-1/section-3/article-4/subarticle-5/paragraph-group-6/paragraph-702',
            '/part-1/section-3/article-4#702',
        ],
        [
            'part-1/section-3/article-4/subarticle-5/paragraph-702',
            '/part-1/section-3/article-4#702',
        ],
        [
            'part-1/section-3/article-4/paragraph-group-5',
            '/part-1/section-3/article-4#paragraph-group-5',
        ],
        [
            'part-1/section-3/article-4/paragraph-group-5/paragraph-702',
            '/part-1/section-3/article-4#702',
        ],
        [
            'part-1/section-3/article-4/paragraph-702',
            '/part-1/section-3/article-4#702',
        ],
    ].forEach((testCase) => urlTest(testCase[0], testCase[1]));
});

Deno.test('getUrl(): low-level content within an initial ArticleParagraph', () => {
    [
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/in-brief',
            '/part-1/section-3/chapter-2/article-4#article-paragraph-1/in-brief',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/subarticle-5',
            '/part-1/section-3/chapter-2/article-4#article-paragraph-1/subarticle-5',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/subarticle-5/paragraph-group-6',
            '/part-1/section-3/chapter-2/article-4#article-paragraph-1/subarticle-5/paragraph-group-6',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/subarticle-5/paragraph-group-6/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/subarticle-5/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/paragraph-group-5',
            '/part-1/section-3/chapter-2/article-4#article-paragraph-1/paragraph-group-5',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/paragraph-group-5/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-1/paragraph-702',
            '/part-1/section-3/chapter-2/article-4#702',
        ],
    ].forEach((testCase) => urlTest(testCase[0], testCase[1]));
});

Deno.test('getUrl(): low-level content within a subsequent ArticleParagraph', () => {
    [
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-7/in-brief',
            '/part-1/section-3/chapter-2/article-4/article-paragraph-7#in-brief',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-7/subarticle-5',
            '/part-1/section-3/chapter-2/article-4/article-paragraph-7#subarticle-5',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-7/subarticle-5/paragraph-group-6',
            '/part-1/section-3/chapter-2/article-4/article-paragraph-7#subarticle-5/paragraph-group-6',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-7/subarticle-5/paragraph-group-6/paragraph-702',
            '/part-1/section-3/chapter-2/article-4/article-paragraph-7#702',
        ],
        [
            'part-1/section-3/chapter-2/article-4/article-paragraph-7/subarticle-5/paragraph-702',
            '/part-1/section-3/chapter-2/article-4/article-paragraph-7#702',
        ],
    ].forEach((testCase) => urlTest(testCase[0], testCase[1]));
});

Deno.test('getUrl(): low-level content with fragment omitted', () => {
    urlTest('part-1/section-3/chapter-2/in-brief', '/part-1/section-3/chapter-2', false);
});
//#endregion

//#region getPartialContentUrls()
function getPartialContentUrlsTest(
    url: string,
    language: Language | undefined,
    expectedClientUrl: string,
    expectedContentUrl: string,
): void {
    const { clientUrl, contentUrl } = getPartialContentUrls(url, language);
    assertStrictEquals(clientUrl, expectedClientUrl);
    assertStrictEquals(contentUrl, expectedContentUrl);
}

Deno.test('getPartialContentUrls(): regular content paths', () => {
    const testCases: Array<[string, Language | undefined, string, string]> = [
        ['/part-1', undefined, '/part-1', '/partials/part-1'],

        ['/part-1', DEFAULT_LANGUAGE, '/part-1', '/partials/part-1'],
        ['/part-1', DEFAULT_LANGUAGE, '/part-1', '/partials/part-1'],
        ['/part-1#section-1', DEFAULT_LANGUAGE, '/part-1#section-1', '/partials/part-1'],

        ['/pars-1', Language.LATIN, '/la/pars-1', '/partials/la/pars-1'],
        ['/pars-1#section-1', Language.LATIN, '/la/pars-1#section-1', '/partials/la/pars-1'],
    ];

    testCases.forEach(([url, language, expectedClientUrl, expectedContentUrl]) => {
        getPartialContentUrlsTest(url, language, expectedClientUrl, expectedContentUrl);
    });
});

Deno.test('getPartialContentUrls(): paragraph numbers', () => {
    const testCases: Array<[string, Language | undefined, string, string]> = [
        ['/1', undefined, '/1', '/partials/1'],

        ['/1', DEFAULT_LANGUAGE, '/1', '/partials/1'],
        ['221', DEFAULT_LANGUAGE, '/221', '/partials/221'],
        ['43#extra/things', DEFAULT_LANGUAGE, '/43#extra/things', '/partials/43'],

        ['/1', Language.LATIN, '/la/1', '/partials/la/1'],
        ['221', Language.LATIN, '/la/221', '/partials/la/221'],
        ['43#extra/things', Language.LATIN, '/la/43#extra/things', '/partials/la/43'],
    ];

    testCases.forEach(([url, language, expectedClientUrl, expectedContentUrl]) => {
        getPartialContentUrlsTest(url, language as Language, expectedClientUrl, expectedContentUrl);
    });
});

Deno.test('getPartialContentUrls(): auxiliary paths', () => {
    const routeMap = AuxiliaryRoutesByKeyAndLanguage[AuxiliaryRouteKey.INDEX_TOPICS];

    const routeDefaultLanguage = routeMap[DEFAULT_LANGUAGE];
    const routeLatin = routeMap[Language.LATIN];

    const testCases: Array<[string, Language | undefined, string, string]> = [
        [routeDefaultLanguage, undefined, `/${routeDefaultLanguage}`, `/partials/${routeDefaultLanguage}`],

        [routeDefaultLanguage, DEFAULT_LANGUAGE, `/${routeDefaultLanguage}`, `/partials/${routeDefaultLanguage}`],
        [
            `${routeDefaultLanguage}#something/more`,
            DEFAULT_LANGUAGE,
            `/${routeDefaultLanguage}#something/more`,
            `/partials/${routeDefaultLanguage}`,
        ],

        [routeLatin, Language.LATIN, `/la/${routeLatin}`, `/partials/la/${routeLatin}`],
        [routeLatin + '#something/more', Language.LATIN, `/la/${routeLatin}#something/more`, `/partials/la/${routeLatin}`],
    ];

    testCases.forEach(([url, language, expectedClientUrl, expectedContentUrl]) => {
        getPartialContentUrlsTest(url, language as Language, expectedClientUrl, expectedContentUrl);
    });
});
//#endregion

//#region getLanguageTag
Deno.test('getLanguageTag()', async (t) => {
    const testCases = [
        [undefined, null],
        ['', null],
        ['/', null],
        ['abc', null],
        ['abc/', null],
        ['/abc', null],
        ['/abc/', null],
        ['abc/xyz', null],
        ['abc/xyz/', null],
        ['/abc/xyz', null],
        ['/abc/xyz/', null],
        ['la', Language.LATIN],
        ['/la', Language.LATIN],
        ['la/', Language.LATIN],
        ['/la/', Language.LATIN],
        ['la/abc', Language.LATIN],
        ['/la/abc', Language.LATIN],
        ['la/abc/', Language.LATIN],
        ['/la/abc/', Language.LATIN],
        ['la/abc/xyz', Language.LATIN],
        ['/la/abc/xyz', Language.LATIN],
        ['la/abc/xyz/', Language.LATIN],
        ['/la/abc/xyz/', Language.LATIN],
    ] as const;

    for (const [path, expectedResult] of testCases) {
        await t.step(path ?? `(${JSON.stringify(path)})`, () => {
            const result = getLanguageTag(path);
            assertStrictEquals(result, expectedResult);
        });
    }
});
//#endregion

//#region isHomePage
Deno.test('isHomePage()', async (t) => {
    const testCases: Array<[Language, string, boolean]> = [
        [DEFAULT_LANGUAGE, '', true],
        [DEFAULT_LANGUAGE, '/', true],
        [DEFAULT_LANGUAGE, '1', false],
        [DEFAULT_LANGUAGE, '/1', false],
        [DEFAULT_LANGUAGE, 'abc', false],
        [DEFAULT_LANGUAGE, '/abc', false],

        [Language.LATIN, 'la', true],
        [Language.LATIN, '/la', true],

        [Language.LATIN, '', false],
        [Language.LATIN, '/', false],
        [Language.LATIN, '1', false],
        [Language.LATIN, '/1', false],
        [Language.LATIN, 'abc', false],
        [Language.LATIN, '/abc', false],

        [Language.LATIN, 'la/1', false],
        [Language.LATIN, '/la/1', false],
        [Language.LATIN, 'la/abc', false],
        [Language.LATIN, '/la/abc', false],
    ];

    for (const [language, path, expectedResult] of testCases) {
        await t.step(`"${path}", ${language}`, () => {
            const result = isHomePage(path, language);
            assertStrictEquals(result, expectedResult);
        });
    }
});
//#endregion

//#region removeLanguageTag
Deno.test('removeLanguageTag()', async (t) => {
    const testCases = [
        [DEFAULT_LANGUAGE, undefined, ''],
        [DEFAULT_LANGUAGE, 'abc/xyz', 'abc/xyz'],
        [DEFAULT_LANGUAGE, 'abc/xyz/', 'abc/xyz/'],
        [DEFAULT_LANGUAGE, '/abc/xyz', '/abc/xyz'],
        [DEFAULT_LANGUAGE, '/abc/xyz/', '/abc/xyz/'],
        [Language.ENGLISH, 'en/abc/xyz', 'abc/xyz'],
        [Language.ENGLISH, 'en/abc/xyz/', 'abc/xyz/'],
        [Language.ENGLISH, '/en/abc/xyz', '/abc/xyz'],
        [Language.ENGLISH, '/en/abc/xyz/', '/abc/xyz/'],
        [Language.LATIN, '', ''],
        [Language.LATIN, '/', '/'],
        [Language.LATIN, 'la', ''],
        [Language.LATIN, '/la', '/'],
        [Language.LATIN, 'la/', '/'],
        [Language.LATIN, '/la/', '/'],
        [Language.LATIN, 'la/abc/xyz', 'abc/xyz'],
        [Language.LATIN, 'la/abc/xyz/', 'abc/xyz/'],
        [Language.LATIN, '/la/abc/xyz', '/abc/xyz'],
        [Language.LATIN, '/la/abc/xyz/', '/abc/xyz/'],
    ] as const;

    for (const [language, path, expectedResult] of testCases) {
        await t.step(path ?? `(${JSON.stringify(path)})`, () => {
            const result = removeLanguageTag(path, language);
            assertStrictEquals(result, expectedResult);
        });
    }
});
//#endregion

//#region getLanguageFromPathname()
Deno.test('getLanguageFromPathname()', async (test) => {
    await test.step('supported languages', async (t) => {
        for (const [_languageKey, language] of getLanguages()) {
            const tests = buildTestCases(language);
            for (const pathname of tests) {
                await t.step(pathname, () => {
                    const result = getLanguageFromPathname(pathname);
                    assertStrictEquals(result, language);
                });
            }
        }
    });

    await test.step('unsupported language', async (t) => {
        const tests = buildTestCases('fake');
        for (const pathname of tests) {
            await t.step(pathname, () => {
                const result = getLanguageFromPathname(pathname);
                assertStrictEquals(result, null);
            });
        }
    });

    function buildTestCases(language: string): Array<string> {
        return [
            language,
            `/${language}`,
            `/${language}/`,
            `/${language}/123`,
            `/${language}/123/456`,
            `/${language}/prologue`,
            `/${language}/prologue/something-more`,
        ];
    }
});
//#endregion

//#region getParagraphNumberUrl()
Deno.test('getParagraphNumberUrl(): null', () => {
    const result = getParagraphNumber('');
    assertStrictEquals(result, null);
});

Deno.test('getParagraphNumberUrl(): ""', () => {
    const result = getParagraphNumber('');
    assertStrictEquals(result, null);
});

Deno.test('getParagraphNumberUrl(): 123', () => {
    const result = getParagraphNumber('123');
    assertStrictEquals(result, 123);
});

Deno.test('getParagraphNumberUrl(): /123', () => {
    const result = getParagraphNumber('/123');
    assertStrictEquals(result, 123);
});

Deno.test('getParagraphNumberUrl(): 123/', () => {
    const result = getParagraphNumber('123/');
    assertStrictEquals(result, 123);
});

Deno.test('getParagraphNumberUrl(): /123/', () => {
    const result = getParagraphNumber('/123/');
    assertStrictEquals(result, 123);
});

Deno.test('getParagraphNumberUrl(): all languages', async (t) => {
    const num = 123;

    for (const [_languageKey, language] of getLanguages()) {
        await t.step(`${language}/${num}`, () => {
            const result = getParagraphNumber(`${language}/${num}`);
            assertStrictEquals(result, num);
        });

        await t.step(`/${language}/${num}`, () => {
            const result = getParagraphNumber(`/${language}/${num}`);
            assertStrictEquals(result, num);
        });
    }
});

Deno.test('getParagraphNumberUrl(): semantic paths', async (t) => {
    const paths = [
        '/prologue',
        '/part-1',
        '/part-2/section-1',
        '/part-3/section-3/chapter-2',
        // Same paths as above, but without the leading slash
        'prologue',
        'part-1',
        'part-2/section-1',
        'part-3/section-3/chapter-2',
    ];

    for (const path of paths) {
        await t.step(path, () => {
            const result = getParagraphNumber(path);
            assertStrictEquals(result, null);
        });
    }
});
//#endregion
