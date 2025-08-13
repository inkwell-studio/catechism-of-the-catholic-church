import { getLimits } from '../../config/limits.ts';
import { Probability } from '../../config/probability.ts';
import { getLanguage } from '../../language/language-state.ts';
import { chance, indexLimits, randomBoolean, randomInt } from '../../utils.ts';
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

const lastMockTitleIndex = new Map<Content, number>();

export function resetTitleRetrieval(): void {
    lastMockTitleIndex.clear();
}

export function getTitleText(contentType: Content): string {
    const language = getLanguage();
    return getMockTitle(contentType, language);
}

export function buildReferenceCollection(): ReferenceCollection | null {
    const language = getLanguage();

    const references = buildReferences(language);
    if (references.length > 0) {
        return {
            // This will be set later, after all content is created
            referenceNumber: 0,
            references,
        };
    } else {
        return null;
    }
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

function getMockTitle(contentType: Content, language: Language): string {
    const titles = mockTitles[contentType][language];
    if (titles.length > 0) {
        let index = 0;

        const lastIndex = lastMockTitleIndex.get(contentType);
        if (undefined !== lastIndex) {
            index = lastIndex + 1;
            if (index >= titles.length) {
                index = 0;
            }
        }

        lastMockTitleIndex.set(contentType, index);

        return titles[index];
    } else {
        throw new Error(`Unprepared to generate a mock title: ${contentType}, ${language}`);
    }
}

const mockTitles: Record<Content, Record<Language, Array<string>>> = {
    [Content.PROLOGUE]: {
        [Language.ENGLISH]: ['Prologue'],
        [Language.LATIN]: ['Prooemium'],
        [Language.SPANISH]: ['Prologo'],
    },
    [Content.PROLOGUE_SECTION]: {
        [Language.ENGLISH]: [
            'How to Find Your Way Out of a Forest',
            'A History of Cartography',
            'Discerning Edible Fungi',
            'The Effects of Prairie Fires',
            'Swallowing the Ocean',
        ],
        [Language.LATIN]: [
            'Quomodo Viam Ex Silva Invenire',
            'Historia Cartographiae',
            'Fungos Comestibiles Discernere',
            'Effectus Ignium Prati',
            'Oceanum Deglutire',
        ],
        [Language.SPANISH]: [
            `Cómo encontrar la salida del bosque`,
            `Historia de la cartografía`,
            `Distinguiendo los hongos comestibles`,
            `Efectos de los incendios en las praderas`,
            `Devorando el océano`,
        ],
    },
    [Content.PART]: {
        [Language.ENGLISH]: [
            'Winter and Summer',
            'A Warm Day in Spring',
            'The Calm Light of an Autumn Evening',
            'Summer Without End',
        ],
        [Language.LATIN]: [
            'Hiems Aestate',
            'A Calidum die in Vere',
            'Et Tranquillitas Lucis Autumno Vesperam',
            'Aestate Sine Fine',
        ],
        [Language.SPANISH]: [
            'Invierno y verano',
            'Un día cálido en primavera',
            'La luz tranquila de una noche de otoño',
            'Verano sin fin',
        ],
    },
    [Content.SECTION]: {
        [Language.ENGLISH]: [
            'All the Ways That Surfing Can Improve Your Life',
            'Horseback Riding: A History Of',
            'The Great American Story of Baseball',
            'Snowshoeing With Bears',
            'Biking in the Rain',
            'Exploring Forgotten Places',
            'West Coast Spelunking',
        ],
        [Language.LATIN]: [
            'Omnes Vias, Qui Superficies Potest Amplio Vestri Vitae',
            'Historia Equorum',
            'In Magna American Fabula De Baseballum',
            'Volans Cum Ullamcorper',
            'Cursor In Pluvia',
            'Exploratio Oblivioni Loca',
            'Speluncarum Exploratio',
        ],
        [Language.SPANISH]: [
            'Todas las formas en que el surf puede mejorar tu vida',
            'Montar a caballo: una historia de',
            'La gran historia americana del béisbol',
            'Raquetas de nieve con osos',
            'Borrajes en la lluvia',
            'Explorando lugares olvidados',
            'Spelleing de la costa oeste',
        ],
    },
    [Content.CHAPTER]: {
        [Language.ENGLISH]: [
            `Letters From Cousins`,
            `Magazines Can Have Beautiful Covers`,
            `Some Books Are Worth Keeping on a Good Shelf by Your Front Door So You May Easily Share Them With Others`,
            `Portable Stamp Collections`,
            `Assorted Papers Found in Your Neighbor's Basement`,
            `Old School Documents`,
            `Black and White Carnival Photographs`,
            `Memoirs of Minnesota Mayors`,
            `Every Manuscript that the Seventh Grade Gym Teacher Never Published`,
            `Journals, Cards, and Keepsakes`,
            `A Collection of Christmas Cards`,
            `Homemade Soaps Can Make Convenient and Pleasing Paperweights`,
            `Novels From Your Grandmother's Den`,
        ],
        [Language.LATIN]: [
            `Epistulae a Consobrinis`,
            `Ephemerides Tegumenta Pulchra Habere Possunt`,
            `Nonnulli Libri in Pluteo Bono Ianuae Tuae Servantur Ut Facile Cum Aliis Communices`,
            `Collectiones Sigillorum Portatiles`,
            `Chartae Variae in Subsellio Vicini Tui Inventae`,
            `Documenta Scholae Veteris`,
            `Photographiae Carnevalis Albae et Nigrae`,
            `Memoriae Praefectorum Urbis Minnesotae`,
            `Omnis Manuscriptus Quem Magister Gymnasii Septimi Gradus Numquam Edidit`,
            `Ephemerides, Chartae, et Memoriae`,
            `Collectio Chartarum Nataliciarum`,
            `Sapones Domestici Pressapapyri Commoda et Iucunda Facere Possunt`,
            `Fabulae Ex Cubili Aviae Tuae`,
        ],
        [Language.SPANISH]: [
            `Cartas de primos`,
            `Las revistas pueden tener hermosas portadas`,
            `Vale la pena mantener algunos libros en un buen estante junto a la puerta de su casa, por lo que puede compartirlos fácilmente con otros`,
            `Colecciones de sellos portátiles`,
            `Documentos variados que se encuentran en el sótano de su vecino`,
            `Documentos de la vieja escuela`,
            `Fotografías de carnaval en blanco y negro`,
            `Memorias de alcaldes de Minnesota`,
            `Cada manuscrito que el profesor de gimnasio de séptimo grado nunca publicó`,
            `Revistas, tarjetas y recuerdos`,
            `Una colección de tarjetas de Navidad`,
            `Los jabones caseros pueden hacer pisapapeles convenientes y agradables`,
            `Novelas de la guarida de tu abuela`,
        ],
    },
    [Content.CHAPTER_SECTION]: {
        [Language.ENGLISH]: [
            `Jack Saved Our Town`,
            `Susan and Her Dog`,
            `Farmer Tom`,
            `The Homes of Elizabeth`,
            `Margaret is Everyone's Friend`,
            `How Do We Know John?`,
            `Remembering Ellen's Jokes`,
            `Combines, Tractors, and Richard`,
            `Katie is Almost a Ninja`,
        ],
        [Language.LATIN]: [
            `Jack Salvus Civitatis`,
            `Susan et Canem Eius`,
            `Tom Agricola`,
            `Et Domos Elisabeth`,
            `Margareta est Amicus`,
            `Quid Enim Scimus John?`,
            `Memento Cornelius Scriptor Iocis`,
            `Combines, Tractors et Richard`,
            `Katie est Prope Ninja`,
        ],
        [Language.SPANISH]: [
            `Jack salvó nuestra ciudad`,
            `Susan y su perro`,
            `Agricultor`,
            `Las casas de Elizabeth`,
            `Margaret es amiga de todos`,
            `¿Cómo conocemos a John?`,
            `Recordando los chistes de Ellen`,
            `Combina, tractores y Richard`,
            `Katie es casi un ninja`,
        ],
    },
    [Content.ARTICLE]: {
        [Language.ENGLISH]: [
            `The Times They Are a-Changin'`,
            `Bringing It All Back Home`,
            `Highway 61 Revisited`,
            `Blood on the Tracks`,
            `Love and Theft`,
            `Modern Times`,
            `All Along the Watchtower`,
            `Like a Rolling Stone`,
            `Ring Them Bells`,
            `Tangled Up In Blue`,
            `Most Likely You'll Go Your Way (And I'll Go Mine)`,
            `Stuck Inside of Mobile with the Memphis Blues Again`,
            `One More Cup of Coffee (Valley Below)`,
        ],
        [Language.LATIN]: [
            `Temporibus sunt Mutantur`,
            `Reducere Eam Omnes Reversus in Domum Suam`,
            `Via LXI Revisit`,
            `Sanguis Vestigia`,
            `Amor et Furtum`,
            `Modern Temporum`,
            `Omnes per Specula`,
            `Velut Volvens Lapis`,
            `Tinniant eos Campanis`,
            `Implicitus in Caeruleum`,
            `Verisimile est Te Viam Tuam Ibis (et Ego Vadam Meum)`,
            `Adhæsit Intra Mobile Cum Memphis A Cappella Iterum`,
            `Unum Calicem Capulus (Vallis Infra)`,
        ],
        [Language.SPANISH]: [
            `Las veces que están cambiando`,
            `Traerlo todo de vuelta a casa`,
            `Carretera 61 revisitada`,
            `Sangre en las pistas`,
            `Amor y robo`,
            `Tiempos modernos`,
            `A lo largo de la torre de vigilancia`,
            `Como una piedra rodante`,
            `Llamarles campanas`,
            `Enredado en azul`,
            `Lo más probable es que vayas a tu manera (y me iré el mío)`,
            `Atrapado dentro de Mobile con el Memphis Blues nuevamente`,
            `Una taza de café más (Valle de abajo)`,
        ],
    },
    [Content.ARTICLE_PARAGRAPH]: {
        [Language.ENGLISH]: [
            `How Bicycles are Made`,
            `Automobiles are Painted Red`,
            `Airplanes are Repaired Quickly`,
            `Motorcycles are Packed for Shipping`,
            `Sailboats Named After Pilots`,
            `Things Raccoons Will Not Eat`,
            `Where Cats Go At Night`,
            `Giraffes See Many People at Zoos`,
            `Why is Snow White?`,
            `Why is the Sky Blue?`,
            `Why do Earthquakes Occur?`,
            `Mountains and Their Heights`,
            `Rivers of Norway`,
            `Rainforests of South America`,
            `The Many Colors of Deserts`,
            `Wild Horses of America`,
        ],
        [Language.LATIN]: [
            `Quomodo Bicicletae Fabricantur`,
            `Autocineta Rubro Colore Piguntur`,
            `Aeroplana Cito Reparantur`,
            `Motocycli ad Navigationem Implentur`,
            `Naves Velariae Nominatae ex Pilotis`,
            `Res Quas Procyones Non Comedunt`,
            `Quo Feles Nocte Eunt`,
            `Giraffae Multos Homines in Vivariis Vident`,
            `Cur Nix Alba Est?`,
            `Cur Caelum Caeruleum Est?`,
            `Cur Terrae Motus Fiunt?`,
            `Montes et Eorum Altitudines`,
            `Flumina Norvegiae`,
            `Silvae Pluviales Americae Meridionalis`,
            `Multi Colores Desertorum`,
            `Equi Feri Americae`,
        ],
        [Language.SPANISH]: [
            `Cómo se fabrican las bicicletas`,
            `Los automóviles se pintan de rojo`,
            `Los aviones se reparan rápidamente`,
            `Las motocicletas se empacan para su envío`,
            `Veleros que llevan el nombre de pilotos`,
            `Cosas que los mapaches no comen`,
            `A dónde van los gatos por la noche`,
            `Las jirafas ven a mucha gente en los zoológicos`,
            `¿Por qué es Blancanieves?`,
            `¿Por qué el cielo es azul?`,
            `¿Por qué ocurren los terremotos?`,
            `Las montañas y sus alturas`,
            `Ríos de Noruega`,
            `Selvas tropicales de Sudamérica`,
            `Los múltiples colores de los desiertos`,
            `Caballos salvajes de América`,
        ],
    },
    [Content.SUB_ARTICLE]: {
        [Language.ENGLISH]: [
            `The Wild, The Innocent, & The E Street Shuffle`,
            `Born to Run`,
            `Darkness on the Edge of Town`,
            `The River`,
            `We Shall Overcome`,
            `Madman Drummers, Bummers, and Indians in the Summer`,
            `Wounded Deep in Battle`,
            `It's Not Your Lungs This Time`,
            `Local Joker`,
            `The Power of a Locomotive`,
            `Broken on the Beach`,
            `We Were Both Hitchhikers`,
            `Some Metal-Tempered Engine`,
            `An Alien, Distant Shore`,
            `I've Broken All Your Windows`,
            `I've Rammed Through All Your Doors`,
            `I'm Not Sleepy`,
            `Jingle Jangle Morning`,
            `Evening's Empire`,
            `Magic Swirlin' Ship`,
            `I'm Ready to Go Anywhere`,
            `Swinging Madly Across the Sun`,
            `Escaping on the Run`,
            `Ragged Clown`,
            `The Twisted Reach of Crazy Sorrow`,
            `Haunted and Frightened Trees`,
            `Silhouetted by the Sea`,
            `Circled by the Circus Sands`,
            `Red Dwarves`,
            `Future Constellations`,
            `A Month of Studying the Heavens`,
            `Pretty Protostars`,
            `The Arrangement of Galaxies`,
            `A Handful of Stars`,
            `Blue Shift`,
            `Interstellar Dust`,
            `Many Moons and Many Rings`,
            `A Dozen Strange Planets`,
            `The Study of Supernovas`,
            `The Formation of Planets`,
            `A Billion Black Holes`,
            `Meteor Collections`,
            `Photosphere`,
            `Nebulas Around Us`,
        ],
        [Language.LATIN]: [
            `Et Feram, Innocentes & in e Platea Tergum`,
            `Nati Sunt Currere`,
            `Tenebris in Ore Oppidum`,
            `Flumen`,
            `Superabimus`,
            `Tympanistae Insani, Infelices, et Indi Aestate`,
            `Alte in Proelio Vulnerati`,
            `Non Pulmones Vestri Hoc Tempore Sunt`,
            `Ioculator Localis`,
            `Vis Locomotivae`,
            `Fractus in Litore`,
            `Ambo Autostopistae Eramus`,
            `Quaedam Machina Metallo Temperata`,
            `Litore Alieno, Remoto`,
            `Omnes Fenestras Vestras Fregi`,
            `Per Omnes Ianuas Vestras Perrupi`,
            `Non Somnolentus Sum`,
            `Tintinnabulum Tinnitus Mane`,
            `Imperium Vesperti`,
            `Navis Magica Volubilis`,
            `Paratus Sum Quolibet Ire`,
            `Furiose Trans Solem Pendulans`,
            `Fugens Fugans`,
            `Scurra Pannosa`,
            `Contorta Finis Doloris Insani`,
            `Arbores Perterritae et Infestae`,
            `A Mari Silhouettatae`,
            `A Circensi Arenae Circensis Circumdatae`,
            `Nani Rubri`,
            `Futurum Futurum`,
            `Mensis Studiorum Caelorum`,
            `Protostellae Pulchrae`,
            `Ordo Galaxiarum`,
            `Paucae Stellae`,
            `Mutatio Caerulea`,
            `Pulvis Interstellaris`,
            `Multae Lunae et Multi Anuli`,
            `Duodecim Planetae Mirabiles`,
            `Studium Supernovarum`,
            `Formatio Planetarum`,
            `Milliarda Foraminum Nigrorum`,
            `Collectiones Meteorum`,
            `Photosphaera`,
            `Nebulae Circum Nos`,
        ],
        [Language.SPANISH]: [
            `El salvaje, el inocente & el E calle barajar`,
            `Nacido para correr`,
            `Oscuridad en el borde de la ciudad`,
            `El río`,
            `Nosotros venceremos`,
            `Tamborileros locos, vagos e indios en verano`,
            `Herido en lo profundo de la batalla`,
            `Esta vez no son tus pulmones`,
            `Comodín local`,
            `El poder de una locomotora`,
            `Roto en la playa`,
            `Ambos éramos autoestopistas`,
            `Un motor de metal templado`,
            `Una costa lejana y alienígena`,
            `He roto todas tus ventanas`,
            `He derribado todas tus puertas`,
            `No tengo sueño`,
            `Tintineo sonar mañana`,
            `Imperio de la tarde`,
            `Magia remolino barco`,
            `Estoy listo para ir a cualquier parte`,
            `Balanceándome locamente a través del sol`,
            `Escapando a la carrera`,
            `Payaso harapiento`,
            `Alcance retorcido del dolor loco`,
            `Árboles embrujados y asustados`,
            `Siluetas junto al mar`,
            `Rodeadas por las arenas del circo`,
            `Enanas Rojas`,
            `Futuras Constelaciones`,
            `Un Mes Estudiando el Cielo`,
            `Hermosas Protoestrellas`,
            `La Disposición de las Galaxias`,
            `Un Puñado de Estrellas`,
            `Desplazamiento al Azul`,
            `Polvo Interestelar`,
            `Muchas Lunas y Muchos Anillos`,
            `Una Docena de Planetas Extraños`,
            `El Estudio de las Supernovas`,
            `La Formación de Planetas`,
            `Mil Millones de Agujeros Negros`,
            `Colecciones de Meteoros`,
            `Fotosfera`,
            `Nebulosas que Nos Rodean`,
        ],
    },
    [Content.PARAGRAPH_GROUP]: {
        [Language.ENGLISH]: [
            `Red Dwarves`,
            `Future Constellations`,
            `A Month of Studying the Heavens`,
            `Pretty Protostars`,
            `The Arrangement of Galaxies`,
            `A Handful of Stars`,
            `Blue Shift`,
            `Interstellar Dust`,
            `Many Moons and Many Rings`,
            `A Dozen Strange Planets`,
            `The Study of Supernovas`,
            `The Formation of Planets`,
            `A Billion Black Holes`,
            `Meteor Collections`,
            `Photosphere`,
            `Nebulas Around Us`,
        ],
        [Language.LATIN]: [
            `Nani Rubri`,
            `Futurum Futurum`,
            `Mensis Studiorum Caelorum`,
            `Protostellae Pulchrae`,
            `Ordo Galaxiarum`,
            `Paucae Stellae`,
            `Mutatio Caerulea`,
            `Pulvis Interstellaris`,
            `Multae Lunae et Multi Anuli`,
            `Duodecim Planetae Mirabiles`,
            `Studium Supernovarum`,
            `Formatio Planetarum`,
            `Milliarda Foraminum Nigrorum`,
            `Collectiones Meteorum`,
            `Photosphaera`,
            `Nebulae Circum Nos`,
        ],
        [Language.SPANISH]: [
            `Enanas Rojas`,
            `Futuras Constelaciones`,
            `Un Mes Estudiando el Cielo`,
            `Hermosas Protoestrellas`,
            `La Disposición de las Galaxias`,
            `Un Puñado de Estrellas`,
            `Desplazamiento al Azul`,
            `Polvo Interestelar`,
            `Muchas Lunas y Muchos Anillos`,
            `Una Docena de Planetas Extraños`,
            `El Estudio de las Supernovas`,
            `La Formación de Planetas`,
            `Mil Millones de Agujeros Negros`,
            `Colecciones de Meteoros`,
            `Fotosfera`,
            `Nebulosas que Nos Rodean`,
        ],
    },
    // The following values are intentionally empty
    [Content.IN_BRIEF]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.PARAGRAPH]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.GENERIC_CONTENT_CONTAINER]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.BLOCK_QUOTE]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.PARAGRAPH_SUB_ITEM_CONTAINER]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.PARAGRAPH_SUB_ITEM]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.TEXT_BLOCK]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.TEXT_HEADING]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.TEXT_WRAPPER]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.TEXT]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.CREED]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
    [Content.TEN_COMMANDMENTS]: { [Language.ENGLISH]: [], [Language.LATIN]: [], [Language.SPANISH]: [] },
};
