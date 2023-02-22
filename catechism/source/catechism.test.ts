import { Catechism } from './catechism.ts';
import { Content, ContentBase, PathID, Subarticle } from './types/types.ts';
import { getParagraphs } from '../utils.ts';
import { assert, assertStrictEquals } from '../../dependencies.ts';

console.log('\nCatechism data ...');

const paragraphs = getParagraphs(Catechism);

Deno.test('the Prologue pathIDs are correctly set', () => {
    Catechism.prologue.mainContent.forEach((c, index) => {
        const prologuePathIdPrefix = '0-';
        const expectedResult = prologuePathIdPrefix + index;

        assertStrictEquals(
            c.pathID,
            expectedResult,
            `Catechism.prologue.mainContent[${index}].pathID should be ${expectedResult}, but is ${c.pathID}`,
        );
        if (Content.SUB_ARTICLE === c.contentType) {
            pathIdHelper((c as Subarticle).mainContent, c.pathID);
        }
    });
});

Deno.test('the Part pathIDs are correctly set', () => {
    Catechism.parts.forEach((part, index) => {
        const expectedPathID = index + 1;

        assertStrictEquals(
            part.pathID,
            `${expectedPathID}`,
            `Catechism.parts[${index}].pathID should be ${expectedPathID}, but is ${part.pathID}`,
        );
        pathIdHelper(part.mainContent, part.pathID);
        pathIdHelper(part.openingContent, part.pathID);
    });
});

function pathIdHelper<T extends ContentBase>(content: Array<T>, parentPathID: PathID): void {
    content.forEach((c, index) => {
        const expectedPathID = `${parentPathID}-${index}`;
        assertStrictEquals(
            c.pathID,
            expectedPathID,
            `Content expected to have pathID of ${expectedPathID}, but has ${c.pathID} instead`,
        );
    });
}

// * ensure that there are no missing paragraphs between #1 and the greatest number
Deno.test('the paragraph range is continuous', () => {
    const paragraphNumbers = paragraphs.map((p) => p.paragraphNumber);

    assertStrictEquals(paragraphNumbers[0], 1, 'paragraph #1 is missing');

    paragraphNumbers.forEach((num, index) =>
        assertStrictEquals(
            num,
            index + 1,
            `paragraph ${index + 1} should follow paragraph ${index} (encountered ${num} instead)`,
        )
    );
});

Deno.test('all paragraphs have content', () => {
    paragraphs.forEach((paragraph) =>
        assert(paragraph.mainContent.length > 0, `paragraph ${paragraph.paragraphNumber} has no content`)
    );
});
