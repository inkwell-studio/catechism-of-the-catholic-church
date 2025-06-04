import { Language } from '@catechism-types';

export function translate(englishText: string, language: Language): string {
    // deno-fmt-ignore
    const result = Language.ENGLISH === language
        ? englishText
        : translationMap[englishText]?.[language];

    if (result) {
        return result;
    } else {
        if (typeof result === 'string') {
            console.warn(`Translation warning [${language}] empty string: "${englishText}"`);
            return '';
        } else {
            throw new Error(`Translation error [${language}]: "${englishText}"`);
        }
    }
}

const translationMap: Record<string, Record<Exclude<Language, Language.ENGLISH>, string>> = {
    'creed': {
        [Language.LATIN]: 'creed',
        [Language.SPANISH]: 'creed',
    },
    'ten-commandments': {
        [Language.LATIN]: 'ten-commandments',
        [Language.SPANISH]: 'ten-commandments',
    },
    'prologue': {
        [Language.LATIN]: 'prooemium',
        [Language.SPANISH]: 'prologo',
    },
    'prologue-section': {
        [Language.LATIN]: 'prooemium-sectio',
        [Language.SPANISH]: 'prologo-seccion',
    },
    'part': {
        [Language.LATIN]: 'pars',
        [Language.SPANISH]: 'parte',
    },
    'section': {
        [Language.LATIN]: 'sectio',
        [Language.SPANISH]: 'seccion',
    },
    'chapter': {
        [Language.LATIN]: 'caput',
        [Language.SPANISH]: 'capitulo',
    },
    'chapter-section': {
        [Language.LATIN]: 'caput-sectio',
        [Language.SPANISH]: 'capitulo-seccion',
    },
    'article': {
        [Language.LATIN]: 'articulus',
        [Language.SPANISH]: 'articulo',
    },
    'article-paragraph': {
        [Language.LATIN]: 'articulus-paragraphus',
        [Language.SPANISH]: 'articulo-parrafo',
    },
    'in-brief': {
        [Language.LATIN]: 'compendium',
        [Language.SPANISH]: 'resumen',
    },
    'subarticle': {
        [Language.LATIN]: 'subarticulus',
        [Language.SPANISH]: 'subartículo',
    },
    'subarticle-': {
        [Language.LATIN]: 'subarticulus-',
        [Language.SPANISH]: 'subartículo-',
    },
    'paragraph': {
        [Language.LATIN]: 'paragraphus',
        [Language.SPANISH]: 'parrafo',
    },
    'paragraph-group': {
        [Language.LATIN]: 'paragraphus-classis',
        [Language.SPANISH]: 'parrafo-grupo',
    },
    'final-content': {
        [Language.LATIN]: 'finalis-contentus',
        [Language.SPANISH]: 'contenido-final',
    },
    // It is acceptable to use English for the following values
    'generic-content-container': {
        [Language.LATIN]: 'generic-content-container',
        [Language.SPANISH]: 'generic-content-container',
    },
    'block-quote': {
        [Language.LATIN]: 'block-quote',
        [Language.SPANISH]: 'block-quote',
    },
    'paragraph-sub-item-container': {
        [Language.LATIN]: 'paragraph-sub-item-container',
        [Language.SPANISH]: 'paragraph-sub-item-container',
    },
    'paragraph-sub-item': {
        [Language.LATIN]: 'paragraph-sub-item',
        [Language.SPANISH]: 'paragraph-sub-item',
    },
    'text-block': {
        [Language.LATIN]: 'text-block',
        [Language.SPANISH]: 'text-block',
    },
    'text-heading': {
        [Language.LATIN]: 'text-heading',
        [Language.SPANISH]: 'text-heading',
    },
    'text-wrapper': {
        [Language.LATIN]: 'text-wrapper',
        [Language.SPANISH]: 'text-wrapper',
    },
    'text': {
        [Language.LATIN]: 'text',
        [Language.SPANISH]: 'text',
    },
    // (end of section where English use is acceptable)
};
