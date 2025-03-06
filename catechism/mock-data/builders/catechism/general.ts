import { getContentTitle } from '@artifacts/derivative/builders/utils.ts';

import { getLimits } from '../../config/limits.ts';
import { Probability } from '../../config/probability.ts';
import { chance, indexLimits, randomBoolean, randomInt } from '../../utils.ts';
import { getLanguage } from '../../language/language-state.ts';
import {
    BibleBook,
    BibleReference,
    Content,
    Language,
    NumberOrNumberRange,
    OtherReference,
    OtherSourceEnum,
    Reference,
    ReferenceCollection,
    ReferenceEnum,
} from '@catechism-types';

export function getTitleText(contentType: Content, num: number): string {
    const language = getLanguage();
    if (Language.ENGLISH === language) {
        return getMockTitle(contentType, num);
    } else {
        return getContentTitle(language, contentType) + ' ' + num;
    }
}

export function buildReferenceCollection(): ReferenceCollection {
    const language = getLanguage();

    return {
        // This will be set later, after all content is created
        referenceNumber: 0,
        references: buildReferences(language),
    };
}

function buildReferences(language: Language): Array<Reference> {
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

    for (let i = 0; i < numReferences; i++) {
        const reference = randomBoolean() ? buildBibleReference() : buildOtherReference(language);
        references.push(reference);
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

    let verses: NumberOrNumberRange = randomInt(
        getLimits().bibleReference.verses,
    );
    const multipleVerses = randomBoolean();
    if (multipleVerses) {
        const upperVerse = verses +
            randomInt(getLimits().bibleReference.verseRangeSize);
        verses = `${verses}–${upperVerse}`;
    }

    const auxillaryText = chance(Probability.references.bible.auxillaryText) ? 'Vulgate' : null;

    return {
        referenceType: ReferenceEnum.BIBLE,
        direct: randomBoolean(),
        folio: false,
        book: books[randomInt(indexLimits(books))],
        chapter: randomInt(getLimits().bibleReference.chapter),
        verses,
        auxillaryText,
    };
}

function buildOtherReference(language: Language): OtherReference {
    const sources = [
        OtherSourceEnum.CHRISTIFIDELES_LAICI,
        OtherSourceEnum.GAUDIUM_ET_SPES,
        OtherSourceEnum.HUMANAE_VITAE,
    ];

    return {
        referenceType: ReferenceEnum.OTHER,
        direct: randomBoolean(),
        folio: false,
        source: sources[randomInt(indexLimits(sources))],
        pointer: getPointer(language),
    };
}

function getPointer(language: Language): string | null {
    const pointers = getPointers(language);
    return pointers[randomInt(indexLimits(pointers))];
}

function getPointers(language: Language): Array<string | null> {
    switch (language) {
        case Language.ENGLISH:
            return getPointersEnglish();
        case Language.LATIN:
            return getPointersLatin();
        case Language.SPANISH:
            return getPointersSpanish();
    }
}

function getPointersEnglish(): Array<string | null> {
    return [
        null,
        '398–401',
        '742',
        'Ch. IX, p.4',
        'Article VII, 8, 3, 1-2',
    ];
}

function getPointersLatin(): Array<string | null> {
    return [
        null,
        '22–23',
        '342',
    ];
}

function getPointersSpanish(): Array<string | null> {
    return [
        null,
        '424–438',
        '32',
    ];
}

function getMockTitle(contentType: Content, num: number): string {
    const allTitles: Record<Content, Array<string>> = {
        [Content.PROLOGUE]: ['Prologue'],
        [Content.PART]: [
            'Winter and Summer',
            'A Warm Day in Spring',
            'The Calm Light of an Autumn Evening',
            'Summer Without End',
        ],
        [Content.SECTION]: [
            'All the Ways That Spelunking Can Improve Your Life',
            'Risky Kayaking',
            'Biking in the Rain',
            'Walking, Strolling, Running, and Jogging',
            'Exploring Forgotten Places',
            'West Coast Surfing',
            'Hiking in Extreme Wind',
            'Why Cliff Diving is Becoming Popular',
            'The Best Gear for Tree Climbing',
            'Horseback Riding: A History Of',
            'The Great American Story of Baseball',
            'Snowshoeing With Bears',
        ],
        [Content.CHAPTER]: [
            `Letters From Cousins`,
            `Magazines Can Have Beautiful Covers`,
            `Some Books Are Worth Keeping on a Good Shelf by Your Front Door So You May Easily Share Them With Others`,
            `Portable Stamp Collections`,
            `Mysterious Photo Albums`,
            `Heavy Collections of Newspaper Clippings`,
            `Assorted Papers Found in Your Neighbor's Basement`,
            `Old School Documents`,
            `Black and White Carnival Photographs`,
            `Radio Transcripts from the 1930s`,
            `Memoirs of Minnesota Mayors`,
            `Every Manuscript that the Seventh Grade Gym Teacher Never Published`,
            `Journals, Cards, and Keepsakes`,
            `A Collection of Final Christmas Cards`,
            `Musty Textbooks in the Back of a Forgotten Antique Store`,
            `Homemade Soaps Can Make Convenient and Pleasing Paperweights`,
            `Silly Notes We Passed in Class`,
            `Sheet Music From Australia`,
            `Every Novel From Your Grandmother's Den`,
            `Clipped Classifieds`,
        ],
        [Content.CHAPTER_SECTION]: [
            `Jack Saved Our Town`,
            `Susan and Her Dog`,
            `Farmer Tom`,
            `The Homes of Elizabeth`,
            `Margaret is Everyone's Friend`,
            `How Do We Know John?`,
            `Remembering Ellen's Jokes`,
            `Combines, Tractors, and Richard`,
            `Katie is Almost a Ninja`,
            `Fred's Bakery`,
        ],
        [Content.ARTICLE]: [
            'Red Dwarves',
            'Constellations To Be',
            'The First Month of Studying the Heavens',
            'The Second Month of Studying the Heavens',
            'The Third Month of Studying the Heavens',
            'Pretty Protostars',
            'The Fourth Month of Studying the Heavens',
            'The Arrangement of Galaxies',
            'The Fifth Month of Studying the Heavens',
            'A Handful of Stars',
            'Red Shift',
            'Interstellar Dust',
            'Many Moons and Many Rings',
            'The Sixth Month of Studying the Heavens',
            'The Seventh Month of Studying the Heavens',
            'A Dozen Strange Planets',
            'The Study of Supernovas',
            'The Formation of Planets',
            'A Billion Black Holes',
            'Meteor Collections',
            'The Eighth Month of Studying the Heavens',
            'The Ninth Month of Studying the Heavens',
            'Photosphere',
            'Nebulas Around Us',
            'The Tenth Month of Studying the Heavens',
            'The Eleventh Month of Studying the Heavens',
            'The Twelfth Month of Studying the Heavens',
        ],
        [Content.ARTICLE_PARAGRAPH]: [
            'How Bicycles are Made',
            'How Automobiles are Painted',
            'How Airplanes are Repaired',
            'How Motorcycles are Packed for Shipping',
            'How Sailboats are Named',
            'What Cows Eat',
            'What Raccoons Will Not Eat',
            'What Cats Do At Night',
            'What Giraffes See at Zoos',
            'What Rhinos Like',
            'Why is Snow White?',
            'Why is the Sky Blue?',
            'Why do Earthquakes Occur?',
            'Why do Islands Exist?',
            'Whey does the Weather Vary?',
            'Mountains and Their Heights',
            'Rivers of Norway',
            'Rainforests of South America',
            'The Many Colors of Deserts',
            'Wild Horses of America',
        ],
        [Content.SUB_ARTICLE]: [
            'Hydrogen',
            'Helium',
            'Lithium',
            'Beryllium',
            'Boron',
            'Carbon',
            'Nitrogen',
            'Oxygen',
            'Fluorine',
            'Neon',
            'Sodium',
            'Magnesium',
            'Aluminium',
            'Silicon',
            'Phosphorus',
            'Sulfur',
            'Chlorine',
            'Argon',
            'Potassium',
            'Calcium',
            'Scandium',
            'Titanium',
            'Vanadium',
            'Chromium',
            'Manganese',
            'Iron',
            'Cobalt',
            'Nickel',
            'Copper',
            'Zinc',
        ],
        [Content.PARAGRAPH_GROUP]: [
            'Afghanistan',
            'Albania',
            'Algeria',
            'Andorra',
            'Angola',
            'Antigua and Barbuda',
            'Argentina',
            'Armenia',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bhutan',
            'Bolivia',
            'Bosnia and Herzegovina',
            'Botswana',
            'Brazil',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            `Côte d'Ivoire`,
            'Cabo Verde',
            'Cambodia',
            'Cameroon',
            'Canada',
            'Central African Republic',
            'Chad',
            'Chile',
            'China',
            'Colombia',
            'Comoros',
            'Congo (Congo-Brazzaville)',
            'Costa Rica',
            'Croatia',
            'Cuba',
            'Cyprus',
            'Czechia (Czech Republic)',
            'Democratic Republic of the Congo',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Eritrea',
            'Estonia',
            'Eswatini (fmr. "Swaziland")',
            'Ethiopia',
            'Fiji',
            'Finland',
            'France',
        ],
        // The following values are intentionally empty
        [Content.IN_BRIEF]: [],
        [Content.PARAGRAPH]: [],
        [Content.GENERIC_CONTENT_CONTAINER]: [],
        [Content.BLOCK_QUOTE]: [],
        [Content.PARAGRAPH_SUB_ITEM_CONTAINER]: [],
        [Content.PARAGRAPH_SUB_ITEM]: [],
        [Content.TEXT_BLOCK]: [],
        [Content.TEXT_HEADING]: [],
        [Content.TEXT_WRAPPER]: [],
        [Content.TEXT]: [],
        [Content.CREED]: [],
        [Content.TEN_COMMANDMENTS]: [],
    };

    const titles = allTitles[contentType];
    if (titles.length > 0) {
        num = Math.max(0, num - 1);
        return titles[num % titles.length];
    } else {
        throw new Error(`Unprepared to generate a mock title: ${contentType}`);
    }
}
