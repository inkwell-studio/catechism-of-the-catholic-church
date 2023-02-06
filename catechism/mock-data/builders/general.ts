import { chance, indexLimits, randomBoolean, randomInt } from '../utils.ts';
import {
    BibleBook,
    BibleReference,
    Content,
    OtherReference,
    OtherSourceEnum,
    Reference,
    ReferenceEnum,
    TextKey,
} from '../../source/types/types.ts';
import { Limits, Probability } from '../config.ts';

export function getTitleTextKey(contentType: Content, num: number): TextKey {
    return contentType + '_' + num as TextKey;
}

export function getTitleText(contentType: Content, num: number): string {
    return contentType
        .split('_')
        // enforce title-case
        .map((text) => text[0].toUpperCase() + text.slice(1).toLowerCase())
        .join(' ') +
        ' ' + num;
}

export function buildReferences(): Array<Reference> {
    const references = [];
    let numReferences = 0;

    if (chance(Probability.references.count.one)) {
        numReferences = 1;
    }
    if (chance(Probability.references.count.two)) {
        numReferences = 2;
    }
    if (chance(Probability.references.count.three)) {
        numReferences = 3;
    }
    if (chance(Probability.references.count.four)) {
        numReferences = 4;
    }

    for (let i = 0; i < numReferences; i++) {
        references.push(
            randomBoolean() ? buildBibleReference() : buildOtherReference(),
        );
    }

    return references;
}

function buildBibleReference(): BibleReference {
    const books = [
        BibleBook.GENESIS,
        BibleBook.PSALMS,
        BibleBook.MICAH,
        BibleBook.JOHN,
        BibleBook.ACTS_OF_THE_APOSTLES,
        BibleBook.EPHESIANS,
        BibleBook.HEBREWS,
    ];

    let verses: number | `${number}-${number}` = randomInt(Limits.bibleReference.verses);
    const multipleVerses = randomBoolean();
    if (multipleVerses) {
        const upperVerse = verses + randomInt(Limits.bibleReference.verseRangeSize);
        verses = `${verses}-${upperVerse}`;
    }

    return {
        referenceType: ReferenceEnum.BIBLE,
        direct: randomBoolean(),
        book: books[randomInt(indexLimits(books))],
        chapter: randomInt(Limits.bibleReference.chapter),
        verses,
    };
}

function buildOtherReference(): OtherReference {
    const sources = [
        OtherSourceEnum.SOURCE_1,
        OtherSourceEnum.SOURCE_2,
        OtherSourceEnum.SOURCE_3,
    ];

    const pointers = [
        '',
        '398-401',
        '742',
        'Ch. IX, p.4',
        'Article VII, 8, 3, 1-2',
    ];

    return {
        referenceType: ReferenceEnum.OTHER,
        direct: randomBoolean(),
        source: sources[randomInt(indexLimits(sources))],
        pointer: pointers[randomInt(indexLimits(pointers))],
    };
}
