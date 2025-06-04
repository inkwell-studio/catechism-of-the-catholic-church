import { Language } from '@catechism-types';

import { removeLanguageTag } from './routing.ts';

export const CATECHISM_OF_THE_CATHOLIC_CHURCH = 'Catechism of the Catholic Church';

export enum AuxiliaryRouteKey {
    GLOSSARY = 'glossary',
    INDEX_TOPICS = 'index-topics',
    INDEX_CITATIONS = 'index-citations',
    APOSTOLIC_LETTER = 'apostolic-letter',
    APOSTOLIC_CONSTITUTION = 'apostolic-constitution',
}

enum AuxiliaryRouteValue {
    GLOSSARY__EN = 'glossary',
    INDEX_TOPICS__EN = 'index-topics',
    INDEX_CITATIONS__EN = 'index-citations',
    APOSTOLIC_LETTER__EN = 'apostolic-letter',
    APOSTOLIC_CONSTITUTION__EN = 'apostolic-constitution',

    GLOSSARY__LA = 'glossarium',
    INDEX_TOPICS__LA = 'index-topics-la',
    INDEX_CITATIONS__LA = 'index-citationes',
    APOSTOLIC_LETTER__LA = 'apostolica',
    APOSTOLIC_CONSTITUTION__LA = 'proponde',

    GLOSSARY__ES = 'glosario',
    INDEX_TOPICS__ES = 'indice-temas',
    INDEX_CITATIONS__ES = 'indice-cita',
    APOSTOLIC_LETTER__ES = 'carta-apostolica',
    APOSTOLIC_CONSTITUTION__ES = 'constitucion-apostolica',
}

export const AuxiliaryRouteLabels: Record<AuxiliaryRouteKey, Record<Language, string>> = {
    [AuxiliaryRouteKey.GLOSSARY]: {
        [Language.ENGLISH]: 'Glossary',
        [Language.LATIN]: 'Glossarium',
        [Language.SPANISH]: 'Glosario',
    },
    [AuxiliaryRouteKey.INDEX_TOPICS]: {
        [Language.ENGLISH]: 'Index: Topics',
        [Language.LATIN]: 'Index: Topics (Latin)',
        [Language.SPANISH]: 'Indice: Temas',
    },
    [AuxiliaryRouteKey.INDEX_CITATIONS]: {
        [Language.ENGLISH]: 'Index: Citations',
        [Language.LATIN]: 'Index: Citationes',
        [Language.SPANISH]: 'Indice: Cita',
    },
    [AuxiliaryRouteKey.APOSTOLIC_LETTER]: {
        [Language.ENGLISH]: 'Apostolic Letter',
        [Language.LATIN]: 'Apostolica',
        [Language.SPANISH]: 'Carta Apostolica',
    },
    [AuxiliaryRouteKey.APOSTOLIC_CONSTITUTION]: {
        [Language.ENGLISH]: 'Apostolic Constitution',
        [Language.LATIN]: 'Proponde',
        [Language.SPANISH]: 'Constitucion Apostolica',
    },
} as const;

export const AuxiliaryRoutesByKeyAndLanguage: Record<AuxiliaryRouteKey, Record<Language, string>> = {
    // deno-fmt-ignore
    [AuxiliaryRouteKey.GLOSSARY]: {
        [Language.ENGLISH]: AuxiliaryRouteValue.GLOSSARY__EN,
        [Language.LATIN]:   AuxiliaryRouteValue.GLOSSARY__LA,
        [Language.SPANISH]: AuxiliaryRouteValue.GLOSSARY__ES,
    },
    // deno-fmt-ignore
    [AuxiliaryRouteKey.INDEX_TOPICS]: {
        [Language.ENGLISH]: AuxiliaryRouteValue.INDEX_TOPICS__EN,
        [Language.LATIN]:   AuxiliaryRouteValue.INDEX_TOPICS__LA,
        [Language.SPANISH]: AuxiliaryRouteValue.INDEX_TOPICS__ES,
    },
    // deno-fmt-ignore
    [AuxiliaryRouteKey.INDEX_CITATIONS]: {
        [Language.ENGLISH]: AuxiliaryRouteValue.INDEX_CITATIONS__EN,
        [Language.LATIN]:   AuxiliaryRouteValue.INDEX_CITATIONS__LA,
        [Language.SPANISH]: AuxiliaryRouteValue.INDEX_CITATIONS__ES,
    },
    // deno-fmt-ignore
    [AuxiliaryRouteKey.APOSTOLIC_LETTER]: {
        [Language.ENGLISH]: AuxiliaryRouteValue.APOSTOLIC_LETTER__EN,
        [Language.LATIN]:   AuxiliaryRouteValue.APOSTOLIC_LETTER__LA,
        [Language.SPANISH]: AuxiliaryRouteValue.APOSTOLIC_LETTER__ES,
    },
    // deno-fmt-ignore
    [AuxiliaryRouteKey.APOSTOLIC_CONSTITUTION]: {
        [Language.ENGLISH]: AuxiliaryRouteValue.APOSTOLIC_CONSTITUTION__EN,
        [Language.LATIN]:   AuxiliaryRouteValue.APOSTOLIC_CONSTITUTION__LA,
        [Language.SPANISH]: AuxiliaryRouteValue.APOSTOLIC_CONSTITUTION__ES,
    },
} as const;

export const AuxiliaryRouteKeysByLanguageAndRoute: Record<Language, Record<string, AuxiliaryRouteKey>> = {
    // deno-fmt-ignore
    [Language.ENGLISH]: {
        [AuxiliaryRouteValue.GLOSSARY__EN]:               AuxiliaryRouteKey.GLOSSARY,
        [AuxiliaryRouteValue.INDEX_TOPICS__EN]:           AuxiliaryRouteKey.INDEX_TOPICS,
        [AuxiliaryRouteValue.INDEX_CITATIONS__EN]:        AuxiliaryRouteKey.INDEX_CITATIONS,
        [AuxiliaryRouteValue.APOSTOLIC_LETTER__EN]:       AuxiliaryRouteKey.APOSTOLIC_LETTER,
        [AuxiliaryRouteValue.APOSTOLIC_CONSTITUTION__EN]: AuxiliaryRouteKey.APOSTOLIC_CONSTITUTION,
    },
    // deno-fmt-ignore
    [Language.LATIN]: {
        [AuxiliaryRouteValue.GLOSSARY__LA]:               AuxiliaryRouteKey.GLOSSARY,
        [AuxiliaryRouteValue.INDEX_TOPICS__LA]:           AuxiliaryRouteKey.INDEX_TOPICS,
        [AuxiliaryRouteValue.INDEX_CITATIONS__LA]:        AuxiliaryRouteKey.INDEX_CITATIONS,
        [AuxiliaryRouteValue.APOSTOLIC_LETTER__LA]:       AuxiliaryRouteKey.APOSTOLIC_LETTER,
        [AuxiliaryRouteValue.APOSTOLIC_CONSTITUTION__LA]: AuxiliaryRouteKey.APOSTOLIC_CONSTITUTION,
    },
    // deno-fmt-ignore
    [Language.SPANISH]: {
        [AuxiliaryRouteValue.GLOSSARY__ES]:               AuxiliaryRouteKey.GLOSSARY,
        [AuxiliaryRouteValue.INDEX_TOPICS__ES]:           AuxiliaryRouteKey.INDEX_TOPICS,
        [AuxiliaryRouteValue.INDEX_CITATIONS__ES]:        AuxiliaryRouteKey.INDEX_CITATIONS,
        [AuxiliaryRouteValue.APOSTOLIC_LETTER__ES]:       AuxiliaryRouteKey.APOSTOLIC_LETTER,
        [AuxiliaryRouteValue.APOSTOLIC_CONSTITUTION__ES]: AuxiliaryRouteKey.APOSTOLIC_CONSTITUTION,
    },
};

export function getAuxiliaryRouteLabel(path: string, language: Language): string {
    path = path.replace('/', '');
    path = removeLanguageTag(path, language);
    const key = AuxiliaryRouteKeysByLanguageAndRoute[language][path];
    return AuxiliaryRouteLabels[key][language];
}
