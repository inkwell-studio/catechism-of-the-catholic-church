import { APIRoute } from 'astro';

import { Language, NumberOrNumberRange, ParagraphNumberContentMap } from '@catechism-types';
import { getParagraphNumbers } from '@catechism-utils/content.ts';
import { getLanguages } from '@catechism-utils/language.ts';

import map_en from '@artifacts/derivative/paragraph-number_to_content-en.json' with { type: 'json' };
import map_es from '@artifacts/derivative/paragraph-number_to_content-es.json' with { type: 'json' };
import map_la from '@artifacts/derivative/paragraph-number_to_content-la.json' with { type: 'json' };

const contentMaps: Record<Language, object> = {
    [Language.ENGLISH]: map_en,
    [Language.SPANISH]: map_es,
    [Language.LATIN]: map_la,
};

export const prerender = false;

export const GET: APIRoute = ({ params }) => {
    const language = params.language as Language;
    const paragraphRange = params.paragraphRange;

    const paragraphMap = contentMaps[language] as ParagraphNumberContentMap;

    if (!paragraphMap) {
        const validLanguagesText = getLanguages()
            .map(([languageKey, language]) => `- ${language} (${languageKey})`)
            .join('\n');

        return new Response(
            `Error: invalid language: ${language}\n\nValid options are:\n\n${validLanguagesText}`,
            { status: 404 },
        );
    }

    if (paragraphRange) {
        const range = paragraphRange
            // Decode a UTF-8-encoded en dash
            .replace('%E2%80%93', '–')
            // Replace a hyphen with an en dash
            .replace('-', '–') as NumberOrNumberRange;

        const paragraphNumbers = getParagraphNumbers(range);
        const paragraphs = paragraphNumbers
            .map((n) => paragraphMap[n])
            .filter((paragraph) => paragraph);

        return new Response(JSON.stringify(paragraphs));
    } else {
        return new Response(null);
    }
};
