import { assertStrictEquals } from '@std/assert';

import { path } from './navigation-utils.ts';

Deno.test('path()', async (test) => {
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
                const result = path(...args);
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
                const result = path(...args);
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
