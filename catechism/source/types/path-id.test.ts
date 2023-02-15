import { getPathID } from './path-id.ts';
import { assertStrictEquals, fail } from '../../../dependencies.ts';

//#region tests
console.log('\nPathIDs ...');
Deno.test('cannot be parsed from non-string values', () => {
    const testCases = [
        null,
        undefined,
        NaN,
        0,
        1,
        {},
        []
    ];

    testCases.forEach(testCase => verifyFailure(testCase));
});

Deno.test('cannot be parsed from the empty string', () => {
    assertStrictEquals(getPathID(''), null);
});

Deno.test('cannot be parsed from strings containing characters other than numbers and forward-slashes', () => {
    const testCases = [
        'a',
        'a/',
        'a/1',
        '1/a',
        '1-2',
        '1.2'
    ];

    testCases.forEach(testCase => verifyFailure(testCase));
});

Deno.test('can be parsed from strings containing only numbers and forward-slashes', () => {
    const testCases = [
        [ '0', '0' ],
        [ '1', '1' ],
        [ '1/2', '1-2' ],
        [ '3/1/2', '3-1-2' ],
    ];

    const failures = testCases
        .map(testCase => {
            const input = testCase[0];
            const expectedResult = testCase[1];
            const actualResult = getPathID(input);
            return { input, expectedResult, actualResult };
        })
        .filter(result =>
            result.actualResult !== result.expectedResult
        );

    if (failures.length > 0) {
        const message = failures
            .map(failure => `\tinput: ${failure.input}\t expected: ${failure.expectedResult}\t actual: ${failure.actualResult}`)
            .join('\n');

        fail('\n\n' + message + '\n');
    }
});
//#endregion

//#region helpers
// deno-lint-ignore no-explicit-any
function verifyFailure(value: any): void {
    const result = getPathID(value);
    assertStrictEquals(result, null, `value should not be parseable: ${JSON.stringify(value)}`);
}
//#endregion
