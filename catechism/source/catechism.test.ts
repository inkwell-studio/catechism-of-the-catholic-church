import { Catechism } from './catechism.ts';
import { assert, assertStrictEquals } from '../../dependencies.ts';
import { PathID } from './types/path-id.ts';
import { Subarticle } from './types/subarticle.ts';

import { CatechismStructure, Content, ContentBase, ContentContainer, Paragraph } from './types/types.ts';

console.log('\nCatechism data ...');

const paragraphs = getParagraphs(Catechism);

//#region helpers
/**
 * @returns the `Paragraph`s of the Catechism in the order that they are listed
 */
function getParagraphs(catechism: CatechismStructure): Array<Paragraph> {
    return helper([], [catechism.prologue, ...catechism.parts]);

    function helper<T extends ContentBase & ContentContainer>(
        paragraphs: Array<Paragraph>,
        content: Array<T>,
    ): Array<Paragraph> {
        content.forEach((c) => {
            if (Content.PARAGRAPH === c.contentType) {
                paragraphs.push(c as unknown as Paragraph);
            } else if (Array.isArray(c.mainContent)) {
                // deno-lint-ignore no-explicit-any
                const openingContent = Object.hasOwn(c, 'openingContent') ? (c as any)['openingContent'] : [];
                const childContent = [...openingContent, ...c.mainContent] as Array<ContentBase & ContentContainer>;
                return helper(paragraphs, childContent);
            }
        });

        return paragraphs;
    }
}
//#endregion

//#region tests
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
//#endregion
