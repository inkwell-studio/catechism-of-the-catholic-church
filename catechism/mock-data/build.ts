// deno-lint-ignore-file
import { buildPart } from './builders/part.ts';
import { buildPrologue } from './builders/prologue.ts';
import { Limits, Probability } from './config.ts';
import { chance, intArrayOfRandomLength, MinMax, randomInt } from './utils.ts';
import { writeSourceCode } from './write.ts';
import {
    CatechismStructure,
    Content,
    ContentBase,
    ContentContainer,
    Paragraph,
    Part,
    PartEnum,
    Prologue,
} from '../source/types/types.ts';
import { NumberOrNumberRange } from '../source/types/number-or-number-range.ts';
import { PathID } from '../source/types/path-id.ts';

run();

//#region top-level functions
function run(): void {
    const catechism = buildMockData();
    writeSourceCode(catechism);
}

function buildMockData(): CatechismStructure {
    console.log('\nBuilding mock data...');

    let catechism = {
        prologue: buildPrologue('0'),
        parts: [
            buildPart(PartEnum.PART_ONE, 1),
            // TODO: Revert
            // buildPart(PartEnum.PART_TWO, 2),
            // buildPart(PartEnum.PART_THREE, 3),
        ],
    };

    catechism = setPathIDs(catechism);
    catechism = setParagraphNumbers(catechism);

    console.log('Validating mock data...');
    const valid = validateCatechism(catechism);
    if (!valid) {
        console.log('\nExiting without writing data.');
        Deno.exit(-1);
    }

    console.log('Creating cross references...');
    const results = buildParagraphCrossReferences(catechism);
    catechism = results.catechism;

    const paragraphCount = getParagraphs(catechism).length;
    console.log(`\nFinished: built ${paragraphCount} paragraphs with ${results.crossReferenceCount} cross references`);

    return catechism;
}
//#endregion

//#region helper functions
function setPathIDs(catechism: CatechismStructure): CatechismStructure {
    catechism = structuredClone(catechism);

    const prologuePathID = '0';
    (catechism.prologue as any).pathID = prologuePathID;
    (catechism.prologue as any).mainContent = setPathIDsHelper(catechism.prologue.mainContent, prologuePathID);

    catechism.parts.forEach((part, index) => {
        const pathID: PathID = `${index + 1}`;
        (part as any).pathID = pathID;
        (part as any).openingContent = setPathIDsHelper(part.openingContent, pathID);
        (part as any).mainContent = setPathIDsHelper(part.mainContent, pathID);
    });

    return catechism;
}

function setPathIDsHelper<T extends ContentBase>(content: Array<T>, parentPathID: PathID): Array<T> {
    content.forEach((c, index) => {
        const pathID = getPathID(index, parentPathID);
        (c as any).pathID = pathID;

        if (hasOpeningContent(c)) {
            (c as any).openingContent = setPathIDsHelper((c as any).openingContent, pathID);
        }

        if (hasMainContent(c)) {
            (c as any).mainContent = setPathIDsHelper((c as any).mainContent, pathID);
        }
    });

    return content;
}

function getPathID(index: number, parentPathID: PathID): PathID {
    return `${parentPathID}-${index}` as PathID;
}

function hasOpeningContent<T extends ContentBase>(c: T): boolean {
    return Object.hasOwn(c, 'openingContent') && Array.isArray((c as any).openingContent);
}

function hasMainContent<T extends ContentBase>(c: T): boolean {
    return Object.hasOwn(c, 'mainContent') && Array.isArray((c as any).mainContent);
}

function setParagraphNumbers(catechism: CatechismStructure): CatechismStructure {
    catechism = structuredClone(catechism);

    const prologueResults = setParagraphNumbersHelper([catechism.prologue], 1);
    (catechism as any).prologue = prologueResults.content[0];

    const partsResults = setParagraphNumbersHelper(catechism.parts, prologueResults.nextParagraphNumber);
    (catechism as any).parts = partsResults.content;

    return catechism;
}

function setParagraphNumbersHelper<T extends ContentBase & ContentContainer>(
    content: Array<T>,
    nextParagraphNumber: number,
): { content: Array<T>; nextParagraphNumber: number } {
    content.forEach((c) => {
        if (Content.PARAGRAPH === c.contentType) {
            (c as any)['paragraphNumber'] = nextParagraphNumber++;
        } else if (Array.isArray(c.mainContent)) {
            const mainAndOpeningContent = getMainAndOpeningContent(c);
            const results = setParagraphNumbersHelper(mainAndOpeningContent, nextParagraphNumber);
            nextParagraphNumber = results.nextParagraphNumber;

            return {
                content: results.content,
                nextParagraphNumber,
            };
        }
    });

    return { content, nextParagraphNumber };
}

/**
 * @returns the `Paragraph`s of the Catechism in the order that they are listed
 */
function getParagraphs(catechism: CatechismStructure): Array<Paragraph> {
    const allContent = getAllContent(catechism);
    return helper([], allContent);

    function helper<T extends ContentBase & ContentContainer>(
        paragraphs: Array<Paragraph>,
        content: Array<T>,
    ): Array<Paragraph> {
        content.forEach((c) => {
            if (Content.PARAGRAPH === c.contentType) {
                paragraphs.push(c as unknown as Paragraph);
            } else if (Array.isArray(c.mainContent)) {
                const childContent = getMainAndOpeningContent(c);
                return helper(paragraphs, childContent);
            }
        });

        return paragraphs;
    }
}

function validateCatechism(catechism: CatechismStructure): boolean {
    function fail(message: string): false {
        console.log(`\nVALIDATION FAILURE: ${message}`);
        return false;
    }

    const paragraphNumbers = getParagraphs(catechism).map((p) => p.paragraphNumber);
    const uniqueParagraphNumbers = new Set(paragraphNumbers);

    const numParagraphs = paragraphNumbers.length;
    const numUniqueParagraphNumbers = uniqueParagraphNumbers.size;
    if (numParagraphs !== numUniqueParagraphNumbers) {
        return fail(
            `Duplicate paragraph numbers exist (${numParagraphs} paragraphs, but only ${numUniqueParagraphNumbers} paragraph numbers)`,
        );
    }

    const finalParagraphNumber = Math.max(...uniqueParagraphNumbers);
    if (finalParagraphNumber !== numParagraphs) {
        return fail(
            `The final paragraph number is incorrect: expected ${numParagraphs}, found ${finalParagraphNumber}`,
        );
    }

    return true;
}

function buildParagraphCrossReferences(
    catechism: CatechismStructure,
): { catechism: CatechismStructure; crossReferenceCount: number } {
    catechism = structuredClone(catechism);

    const paragraphNumbers = getParagraphs(catechism).map((p) => p.paragraphNumber);
    const maxParagraphNumber = Math.max(...paragraphNumbers);

    const prologueResults = helper([catechism.prologue], maxParagraphNumber, 0);
    (catechism as any).prologue = prologueResults.content[0];

    const partsResults = helper(catechism.parts, maxParagraphNumber, prologueResults.crossReferenceCount);
    (catechism as any).parts = partsResults.content;

    return {
        catechism,
        crossReferenceCount: partsResults.crossReferenceCount,
    };

    function helper<T extends ContentBase & ContentContainer>(
        content: Array<T>,
        maxParagraphNumber: number,
        crossReferenceCount: number,
    ): { content: Array<T>; crossReferenceCount: number } {
        content.forEach((c) => {
            // Only build cross references for paragraphs outside of the "In Brief" sections
            if (Content.TEXT_CONTAINER === c.contentType && chance(Probability.crossReference.create)) {
                const references = buildReferences(maxParagraphNumber);
                (c as any)['paragraphReferences'] = references;
                crossReferenceCount += references.length;
            } else if (Content.IN_BRIEF !== c.contentType && Array.isArray(c.mainContent)) {
                const mainAndOpeningContent = getMainAndOpeningContent(c);

                const results = helper(
                    mainAndOpeningContent,
                    maxParagraphNumber,
                    crossReferenceCount,
                );
                crossReferenceCount = results.crossReferenceCount;

                return results;
            }
        });

        return { content, crossReferenceCount };
    }

    function buildReferences(maxParagraphNumber: number): Array<NumberOrNumberRange> {
        return chance(Probability.crossReference.multiple)
            ? buildMultipleReferences(maxParagraphNumber)
            : [buildReference(maxParagraphNumber)];
    }

    function buildMultipleReferences(maxParagraphNumber: number): Array<NumberOrNumberRange> {
        return intArrayOfRandomLength(Limits.paragraph.crossReference.count).map((i) =>
            buildReference(maxParagraphNumber)
        );
    }

    function buildReference(maxParagraphNumber: number): NumberOrNumberRange {
        const buildRange = chance(Probability.crossReference.range);
        const paragraphLimits: MinMax = { min: 1, max: maxParagraphNumber };

        if (buildRange) {
            const num1 = randomInt(paragraphLimits);
            const num2 = num1 + randomInt(Limits.paragraph.crossReference.range);
            return `${num1}-${num2}`;
        } else {
            return randomInt(paragraphLimits);
        }
    }
}

// TODO: Remove, if possible
function getAllContent(catechism: CatechismStructure): Array<Prologue | Part> {
    return [catechism.prologue, ...catechism.parts];
}

function getMainAndOpeningContent<T extends ContentBase & ContentContainer>(c: T): Array<T> {
    const openingContent = Object.hasOwn(c, 'openingContent') ? (c as any)['openingContent'] : [];

    return [...openingContent, ...c.mainContent];
}
//#endregion
