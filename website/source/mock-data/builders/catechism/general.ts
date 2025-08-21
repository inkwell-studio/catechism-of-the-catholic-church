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
            `On Why This Volume Is Heavier Than Your Grandmother's Family Bible`,
            `Rules for Quoting Latin Without Really Knowing Latin`,
            `On Believing Things You Cannot See (or Wi-Fi)`,
            `The Rosary: 59 Beads to Rule Them All`,
            `Holy Orders, or, How to Wear Vestments with Style`,
        ],
        [Language.LATIN]: [
            `De Causa Quam Proponit Hic Liber Gravior Est Quam Biblia Familiae Aviae Tuae`,
            `Regulae Pro Citando Latinam Nesciente Latine Vere`,
            `De Credendo Rebus Quas Non Potes Videre (Vel Wi-Fi)`,
            `Rosarium: LIX Munera Ad Omnia Regenda`,
            `Sacri Ordines, Vel Quomodo Vestimenta Cum Elegantia Gerere`,
        ],
        [Language.SPANISH]: [
            `Sobre por qué este volumen es más pesado que la Biblia familiar de tu abuela`,
            `Reglas para citar en latín sin realmente saber latín`,
            `Sobre creer en cosas que no puedes ver (o Wi-Fi)`,
            `El rosario: 59 cuentas para gobernarlos a todos`,
            `Órdenes sagradas, o cómo usar vestimentas con estilo`,
        ],
    },
    [Content.PART]: {
        [Language.ENGLISH]: [
            `The Desire for God in Every Heart`,
            `Humanity's Search for Meaning`,
            `Faith as Response to Divine Initiative`,
            `Life in Grace (or Trying To)`,
        ],
        [Language.LATIN]: [
            `Desiderium Dei in Omni Corde`,
            `Quaestio Humanitatis pro Significatu`,
            `Fides Ut Responsio ad Divinam Inceptionem`,
            `Vita in Gratia (Vel Conans)`,
        ],
        [Language.SPANISH]: [
            `El deseo de Dios en cada corazón`,
            `La búsqueda de la humanidad de un sentido`,
            `La fe como respuesta a la iniciativa divina`,
            `La vida en gracia (o intentando)`,
        ],
    },
    [Content.SECTION]: {
        [Language.ENGLISH]: [
            `The Universal Longing`,
            `Poor Substitutes for the Divine`,
            `God Knocks, Humanity Pretends It's Busy`,
            `The Ten Commandments with Footnotes`,
            `Virtues and Vices That Didn't Make the Final Draft`,
            `Parables for Daily Annoyances`,
            `The Proper Postures for Prayer and Nap Time`,
            `Rosaries, Beads, and Unexpected Knots`,
            `The Eternal Silence (Except When Someone Sneezes)`,
        ],
        [Language.LATIN]: [
            `Desiderium Universale`,
            `Miseri Substituti Pro Divino`,
            `Deus Pulsat, Humanitas Simulat Se Occupatam Esse`,
            `Decem Praecepta cum Notis Marginalibus`,
            `Virtutes et Vitia Quae Ad Confectum Finale Non Pervenerunt`,
            `Parabolae pro Cotidianis Molestiis`,
            `Positiones Rectae pro Precatione et Tempore Quiescendi`,
            `Rosaria, Monilia, et Noduli Inopinati`,
            `Aeternum Silentium (Nisi Cum Aliquis Sternuit)`,
        ],
        [Language.SPANISH]: [
            `El anhelo universal`,
            `Pobres sustitutos de lo divino`,
            `Dios llama, la humanidad finge estar ocupada`,
            `Los diez mandamientos con notas al pie`,
            `Virtudes y vicios que no llegaron al borrador final`,
            `Parábolas para las molestias diarias`,
            `Las posturas adecuadas para la oración y la siesta`,
            `Rosarios, cuentas y nudos inesperados`,
            `El silencio eterno (excepto cuando alguien estornuda)`,
        ],
    },
    [Content.CHAPTER]: {
        [Language.ENGLISH]: [
            `Evident in Human History`,
            `Attempts to Fill the Void`,
            `Entertainment Without Contentment`,
            `Excuses Offered Across History`,
            `Persistent Invitation of Grace`,
            `Thou Shalt Probably Text Back`,
            `Keeping Holy the Weekend`,
            `The Lost Virtue of Timely Emails`,
            `The Vice of Excessive Post-It Notes`,
            `The Good Samaritan in Rush Hour Traffic`,
            `The Prodigal Wi-Fi Signal`,
            `Kneeling vs. Lounging Debate`,
            `Approved Prayer Recliners`,
            `How to Untangle Holiness`,
            `Liturgical Bless-You Etiquette`,
            `Keeping Quiet While Your Stomach Growls`,
        ],
        [Language.LATIN]: [
            `In Historia Humana Evidens`,
            `Conatus Vacuae Plenitudinis`,
            `Oblectatio Sine Contentione`,
            `Excusationes per Historiam Oblatae`,
            `Persistens Invitatio Gratiae`,
            `Fortasse Textum Respondes`,
            `Servans Sanctum Fines Hebdomadis`,
            `Virtus Perdita Epistularum Tempestivarum`,
            `Vitium Notularum Excessivarum`,
            `Bonus Samaritanus in Hora Turbae`,
            `Prodigium Signum Wi-Fi`,
            `Disputatio De Genuflexione ac Relaxatione`,
            `Lecti Precationis Approbati`,
            `Quomodo Sanctitatem Resolvere`,
            `Ritus Benedictionis in Liturgia`,
            `Tacere Dum Venter Murmurat`,
        ],
        [Language.SPANISH]: [
            `Evidente en la historia humana`,
            `Intentos de llenar el vacío`,
            `Entretenimiento sin satisfacción`,
            `Excusas ofrecidas a lo largo de la historia`,
            `Persistente invitación de la gracia`,
            `Probablemente responderás con un mensaje`,
            `Guardar santo el fin de semana`,
            `La virtud perdida de los correos electrónicos a tiempo`,
            `El vicio de las notas adhesivas en exceso`,
            `El buen samaritano en la hora pico`,
            `La señal prodigiosa de Wi-Fi`,
            `Debate entre arrodillarse o estar relajado`,
            `Reposapiés aprobados para la oración`,
            `Cómo desenredar la santidad`,
            `Etiqueta litúrgica para decir “salud”`,
            `Guardar silencio mientras tu estómago ruge`,
        ],
    },
    [Content.CHAPTER_SECTION]: {
        [Language.ENGLISH]: [
            `Creation as Reminder to Pray (Especially Mosquitoes)`,
            `Christ Teaches Prayer (And Finishes on Time, Unlike Some Preachers)`,
            `The Spirit Groans Too, Possibly About Choir Practice`,
            `Tradition of Prayer`,
            `The Psalms: Ancient Playlist, No Skip Button`,
            `Universal Prayer of the Church, Kneelers Included`,
            `Silence as the Forgotten Prayer (Hard Mode)`,
            `Petitionary Prayer, Heavy on the “Please Help Me Find My Keys”`,
            `Meditation, Constantly Interrupted by Grocery Lists`,
        ],
        [Language.LATIN]: [
            `Creatio Ut Monitio ad Orandum (Praesertim Culices)`,
            `Christus Doctrinam Orationis Tradit (Et Tempus Servat, Immo Discipuli Nonnulli)`,
            `Spiritus Etiam Gemit, Forsitan De Chori Exercitatione`,
            `Traditio Orationis`,
            `Psalmi: Vetus Indicium Cantus, Nulla Praemissione`,
            `Oratio Universalis Ecclesiae, Genuflexionibus Inclusis`,
            `Silentium Ut Oratio Oblita (Modus Difficilis)`,
            `Oratio Petitoria, Praesertim “Quaeso Adiuva Me Claves Meas Invenire”`,
            `Meditatio, Saepe Interrupta Ab Indicibus Mercatus`,
        ],
        [Language.SPANISH]: [
            `La creación como recordatorio para orar (especialmente los mosquitos)`,
            `Cristo enseña a orar (y termina a tiempo, a diferencia de algunos predicadores)`,
            `El Espíritu también gime, posiblemente por la práctica del coro`,
            `La tradición de la oración`,
            `Los salmos: lista de reproducción antigua, sin botón de salto`,
            `Oración universal de la Iglesia, incluidos los que se arrodillan`,
            `El silencio como la oración olvidada (modo difícil)`,
            `Oración de petición, mucho “por favor ayúdame a encontrar mis llaves”`,
            `Meditación, constantemente interrumpida por listas de compras`,
        ],
    },
    [Content.ARTICLE]: {
        [Language.ENGLISH]: [
            `Sacred Yearnings of Early Humanity`,
            `Philosophers Asking Infinite “Why” Questions`,
            `Distractions of Modern Culture`,
            `False Idols Today`,
            `Circuses, Colosseums, and Reality TV`,
            `Online Comments as New Arena of Conflict`,
            `“My Ox Needs Feeding” (Ancient Excuse)`,
            `“Wi-Fi Is Down” (Modern Excuse)`,
            `Divine Alarm Clock With No Snooze Option`,
            `Providence Scheduling Conflicts for Our Good`,
            `The Weight of Tradition`,
            `Storage Solutions for Bulky Theology`,
            `Impressing Guests with Large Books`,
            `Pronunciation Debates No One Wins`,
            `Classic Phrases That Always Impress`,
            `When to Pretend You Forgot the Translation`,
            `The Nature of Faith`,
            `Doubt and Signal Loss`,
            `Hope in Unlimited Data Plans`,
            `Creation and the Cosmic Laundry Basket`,
            `Free Will and Sock Selection`,
            `Eschatology of Lost Socks`,
            `Analogies Gone Wrong`,
            `Applications in Daily Life`,
        ],
        [Language.LATIN]: [
            `Sacra Desideria Primaevae Humanitatis`,
            `Philosophi Quodammodo Infinitas Quaestiones “Cur” Rogantes`,
            `Distractiones Culturae Modernae`,
            `Falsa Idola Hodie`,
            `Circenses, Colosseae, et Televisio Realitatis`,
            `Commentaria Online Novum Pugnae Locus`,
            `“Bos Meus Nutrimentum Exigit” (Excusatio Antiqua)`,
            `“Wi-Fi Deficit” (Excusatio Moderna)`,
            `Divinus Horologium Sine Optionis Postponendi`,
            `Providentia Conflictus Tempestivos Pro Bono Nostro Ordinans`,
            `Gravitas Traditionis`,
            `Solutiones Reponendi Theologiam Magna`,
            `Admirationem Hospitum Libris Magnis Excitare`,
            `De Pronuntiatione Disputationes Nulli Vincuntur`,
            `Sententiae Classicae Semper Impressivae`,
            `Quando Fingere Translationem Obliviscendi`,
            `Natura Fidei`,
            `Dubium et Signi Amissio`,
            `Spes in Planis Datae Illimitatae`,
            `Creatio et Cesta Cosmici Lavandi`,
            `Libera Voluntas et Electio Caligarum`,
            `Eschatologia Caligarum Amissarum`,
            `Analogiae Male Factae`,
            `Applicationes in Vita Quotidiana`,
        ],
        [Language.SPANISH]: [
            `Anhelos sagrados de la humanidad primitiva`,
            `Filósofos haciendo infinitas preguntas de "por qué"`,
            `Distracciones de la cultura moderna`,
            `Falsos ídolos hoy`,
            `Circus, coliseos y televisión de realidad`,
            `Comentarios en línea como nueva arena de conflicto`,
            `“Mi buey necesita ser alimentado” (excusa antigua)`,
            `“Wi-Fi está caído” (excusa moderna)`,
            `Reloj despertador divino sin opción de posponer`,
            `La providencia programa conflictos de horario para nuestro bien`,
            `El peso de la tradición`,
            `Soluciones de almacenamiento para la teología voluminosa`,
            `Impresionar a los invitados con libros grandes`,
            `Debates de pronunciación que nadie gana`,
            `Frases clásicas que siempre impresionan`,
            `Cuándo fingir que olvidaste la traducción`,
            `La naturaleza de la fe`,
            `Duda y pérdida de señal`,
            `Esperanza en planes de datos ilimitados`,
            `La creación y la cesta cósmica de la ropa sucia`,
            `Libre albedrío y selección de calcetines`,
            `Escatología de los calcetines perdidos`,
            `Analogías mal hechas`,
            `Aplicaciones en la vida diaria`,
        ],
    },
    [Content.ARTICLE_PARAGRAPH]: {
        [Language.ENGLISH]: [
            `Cave Paintings as Proto-Sacraments`,
            `Mammoth Hunts and Mystical Chants`,
            `Socrates Annoying Dinner Guests`,
            `Aristotle Drafting First Bulletin Board`,
            `Streaming Marathons as Ersatz Pilgrimages`,
            `Shopping Sprees in Substitution for Grace`,
            `Smartphones as Tiny Golden Calves`,
            `Wi-Fi Outages as Modern Test of Faith`,
            `Lions as Ancient Final Boss`,
            `Gladiatorial Text Messaging`,
            `Caps Lock as Weapon of War`,
            `Rouses Even Heavy Sleepers`,
            `Inescapable Push Notifications from Heaven`,
            `Flight Delays That Saved Pilgrims`,
            `Detours That Revealed Shrines`,
        ],
        [Language.LATIN]: [
            `Picturae Parietales ut Proto-Sacramenta`,
            `Venationes Mammothum et Mysticae Canticum`,
            `Socrates Hospites Comedentes Invadens`,
            `Aristoteles Primum Tabulae Nuntiorum Scribens`,
            `Marathones Streaming ut Peregrinationes Ersatz`,
            `Stultae Emptiones pro Gratia Substitutio`,
            `Telephona Callida ut Parvi Taurus Aureus`,
            `Intermissio Wi-Fi ut Modernum Fidei Probatio`,
            `Leones ut Antiqui Ultimi Praelii`,
            `Nuntii Gladiatorii per Textum`,
            `Caps Lock ut Bellum Telum`,
            `Evocat Etiam Somniatores Gravos`,
            `Notificationes Impulsus Ineluctabiles a Caelo`,
            `Morae Volatus Peregrinos Servantes`,
            `Dialexis Quae Sacella Revelaverunt`,
        ],
        [Language.SPANISH]: [
            `Pinturas rupestres como proto-sacramentos`,
            `Cacerías de mamuts y cantos místicos`,
            `Sócrates molestando a los invitados a la cena`,
            `Aristóteles redactando el primer tablón de anuncios`,
            `Maratones de streaming como peregrinaciones sustitutas`,
            `Compras compulsivas en sustitución de la gracia`,
            `Smartphones como pequeños becerros de oro`,
            `Cortes de Wi-Fi como prueba moderna de fe`,
            `Leones como jefe final antiguo`,
            `Mensajes de texto gladiatorios`,
            `Bloqueo de mayúsculas como arma de guerra`,
            `Despierta incluso a los durmientes profundos`,
            `Notificaciones emergentes inevitables del cielo`,
            `Retrasos de vuelos que salvaron peregrinos`,
            `Desvíos que revelaron santuarios`,
        ],
    },
    [Content.SUB_ARTICLE]: {
        [Language.ENGLISH]: [
            `Coffee as First Religious Sacrament of Morning`,
            `Paper Stock and Eternity`,
            `Binding as a Metaphor for Salvation`,
            `Accidental Workouts from Carrying It to Class`,
            `Shelving That Can Handle Divine Gravitas`,
            `Hiding the Book Under Smaller Books`,
            `Using It as a Doorstop, Reverently`,
            `Pretending You've Read It Cover-to-Cover`,
            `The Art of Subtle Page-Flipping`,
            `Soft vs. Hard “C” in Cicero (Fight Ensues)`,
            `Should You Roll Your Rs?`,
            `Adding “-us” to Seem Official`,
            `In vino veritas at Dinner Parties`,
            `Sic semper tyrannis in Political Conversations`,
            `Et cetera for Theological Emergencies`,
            `Staring Thoughtfully into the Distance`,
            `Shrugging with Academic Authority`,
            `Redirecting the Conversation to Augustine`,
            `Trusting in Unseen Mysteries`,
            `How Faith is Like Using Bluetooth Headphones`,
            `Faith Beyond Scientific Proof`,
            `Why God Doesn't Always Answer on the First Ring`,
            `Spiritual Dead Zones`,
            `The Rosary: Mysteries, Knots, and Beads Under the Couch`,
            `Pilgrimages: Holiness on the Road, Snacks Included`,
            `The Grace of Perseverance in Hope, Even Through Parish Finance Meetings`,
            `The Beatific Vision: Eternal Joy, Unlimited Donuts, and No More Parking Problems`,
            `The Burden of Freedom: Choosing Salad or Fries`,
            `Conscience as Inner GPS`,
            `Learning From Mistakes, Preferably Before the Second Dessert`,
        ],
        [Language.LATIN]: [
            `CoffeeCoffea ut Primus Sacramentum Religiosum Matutinale`,
            `Stipendium Charta et Aeternitas`,
            `Ligatio ut Metaphora Salutis`,
            `Inopinatae Exercitationes Exvehendo Id ad Classem`,
            `Reposito Qui Divinam Gravitatem Sustinere Potest`,
            `Occultatio Libri Sub Libris Minoribus`,
            `Utendo ut Ostium Pessulum, Devote`,
            `Simulare Te Legisse Totum Librum`,
            `Ars Subtilis Paginarum Rescissio`,
            `Cicero: Mollis vs Dura “C” (Pugna Sequitur)`,
            `Debesne Rolâre R?`,
            `Addere “-us” Ad Modum Officialem Apparere`,
            `In vino veritas apud Cenationes`,
            `Sic semper tyrannis in Colloquiis Politicalibus`,
            `Et cetera pro Emergenitiis Theologicis`,
            `Cogitabunda Intuentia in Longinqua`,
            `Imperium Academicum Shrugging`,
            `Conversatio Ad Augustinum Redirecta`,
            `Fides in Mysteriis Invisibilibus Fida`,
            `Quomodo Fides Est Usus Bluetooth Aurium`,
            `Fides Ultra Probationem Scientificam`,
            `Cur Deus Non Semper Primo Annuo Respondit`,
            `Zonae Spirituales Mortuae`,
            `Rosarium: Mysteria, Noduli, et Monilia Sub Solio`,
            `Peregrinationes: Sanctitas In Via, Cibaria Inclusa`,
            `Gratia Perseverantiae In Spe, Etiam Per Concilia Oeconomica Parochialia`,
            `Visio Beatifica: Gaudium Aeternum, Donutae Illimitatae, et Nullae Quaestiones de Statione`,
            `Onus Libertatis: Deligere Inter Saladum et Fricta`,
            `Conscientia Ut GPS Internus`,
            `Discere Ex Erroribus, Praesertim Priusquam Secundum Dessertum`,
        ],
        [Language.SPANISH]: [
            `Café como el primer sacramento religioso de la mañana`,
            `Acciones de papel y eternidad`,
            `Encuadernación como metáfora de la salvación`,
            `Ejercicios accidentales por llevarlo a clase`,
            `Estanterías que pueden soportar la gravedad divina`,
            `Esconder el libro debajo de libros más pequeños`,
            `Usarlo como tope de puerta, con reverencia`,
            `Pretender que lo has leído de principio a fin`,
            `El arte de pasar páginas sutilmente`,
            `“C” suave vs. dura en Cicerón (se desata la pelea)`,
            `¿Deberías pronunciar la erre vibrante?`,
            `Añadir “-us” para parecer oficial`,
            `En el vino está la verdad en las cenas`,
            `Sic semper tyrannis en conversaciones políticas`,
            `Etcétera para emergencias teológicas`,
            `Mirar pensativamente a la distancia`,
            `Encogerse de hombros con autoridad académica`,
            `Redirigir la conversación a Agustín`,
            `Confiar en misterios invisibles`,
            `Cómo la fe es como usar auriculares Bluetooth`,
            `Fe más allá de la prueba científica`,
            `Por qué Dios no siempre responde en la primera llamada`,
            `Zonas espirituales muertas`,
            `El rosario: misterios, nudos y cuentas bajo el sofá`,
            `Peregrinaciones: santidad en la carretera, con bocadillos incluidos`,
            `La gracia de la perseverancia en la esperanza, incluso durante reuniones financieras parroquiales`,
            `La visión beatífica: alegría eterna, donas ilimitadas y no más problemas de estacionamiento`,
            `La carga de la libertad: elegir entre ensalada o papas fritas`,
            `La conciencia como GPS interior`,
            `Aprender de los errores, preferentemente antes del segundo postre`,
        ],
    },
    [Content.PARAGRAPH_GROUP]: {
        [Language.ENGLISH]: [
            `Rebooting Your Prayer Life`,
            `Trusting in Future Upgrades`,
            `Belief in Eternal Connection`,
            `The Pairing of All Things`,
            `Order and Chaos in the Dryer`,
            `Eternal Search for the Missing`,
            `Choosing Mismatched Pairings (Original Sin?)`,
            `Stripes and Solids in Harmony`,
            `The Temptation of Novelty Socks`,
            `The Great Matching at the End of Time`,
            `Limbo for Unfound Footwear`,
            `Reunion in the Heavenly Closet`,
            `Three States of Water (Too Basic)`,
            `Shamrocks and Clover Confusion`,
            `Spinning Fidget Spinners`,
            `Not Three Gods, Just Three Persons`,
            `Unity with Diversity`,
            `The Everlasting Mystery Clause`,
            `Family Group Dynamics`,
            `Trinity as a Model for Team Projects`,
        ],
        [Language.LATIN]: [
            `Revivificatio Vitae Orationis Tuae`,
            `Fides in Upgrade Futuro`,
            `Credentia in Aeterno Coniunctione`,
            `Coniunctio Omnium Rerum`,
            `Ordo et Chaos in Tostamine`,
            `Aeternum Quaerere Amissorum`,
            `Eligendo Disparata Copula (Peccatum Originale?)`,
            `Striata et Solida in Harmonia`,
            `Temptatio Novarum Caligarum`,
            `Magna Coniunctio in Finem Temporis`,
            `Limbo Caligari Non Reperti`,
            `Reconciliatio in Armario Caelesti`,
            `Tres Status Aquae (Nimis Basicae)`,
            `Confusio Trifoliorum`,
            `Volventes Volutores Animi`,
            `Non Tres Dei, Sed Tres Personae`,
            `Unitas cum Diversitate`,
            `Aeternum Clausula Mysterii`,
            `Dynamica Familiae`,
            `Trinitas ut Exemplum Pro Proiectis Coetivis`,
        ],
        [Language.SPANISH]: [
            `Reiniciando tu vida de oración`,
            `Confiando en futuras actualizaciones`,
            `Creencia en la conexión eterna`,
            `La unión de todas las cosas`,
            `Orden y caos en la secadora`,
            `Búsqueda eterna de lo perdido`,
            `Elegir combinaciones disparejas (¿pecado original?)`,
            `Rayas y lisos en armonía`,
            `La tentación de los calcetines novedosos`,
            `La gran combinación al fin del tiempo`,
            `Limo para el calzado no encontrado`,
            `Reunión en el armario celestial`,
            `Tres estados del agua (demasiado básico)`,
            `Confusión de tréboles y shamrocks`,
            `Haciendo girar fidget spinners`,
            `No tres dioses, solo tres personas`,
            `Unidad con diversidad`,
            `La cláusula perpetua del misterio`,
            `Dinámica de grupos familiares`,
            `La Trinidad como modelo para proyectos de equipo`,
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
