import { APIRoute } from 'astro';

import { getLanguages } from '@catechism-utils/language.ts';
import { Language } from '@catechism-types';

import { getAllParagraphNumbers, getParagraphContentMap } from '@logic/artifacts.ts';

interface Route {
    params: {
        language: Language;
        paragraphNumber: number;
    };
}

export async function getStaticPaths(): Promise<Array<Route>> {
    const languagesAndParagraphNumbers = await Promise.all(
        getLanguages().map(async ([_languageKey, language]) => ({
            language,
            paragraphNumbers: await getAllParagraphNumbers(language),
        })),
    );

    return languagesAndParagraphNumbers.flatMap((t) =>
        t.paragraphNumbers.map((paragraphNumber) => ({
            params: {
                language: t.language,
                paragraphNumber,
            },
        }))
    );
}

export const GET: APIRoute = async ({ params }) => {
    const paragraphMap = await getParagraphContentMap(params.language as Language);
    const paragraph = paragraphMap[Number(params.paragraphNumber)];

    return new Response(JSON.stringify(paragraph));
};
