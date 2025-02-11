import { DEFAULT_LANGUAGE, Language } from '@catechism-types';
import { getLanguages } from '@catechism-utils/language.ts';
import { getTopLevelUrls } from '@catechism-utils/table-of-contents.ts';

import { getAllCrossReferences, getAllParagraphNumbers, getTableOfContents } from '@logic/artifacts.ts';
import { path as joinPaths } from '@logic/navigation-utils.ts';

const languages = getLanguages().map(([_languageKey, language]) => language);

export interface ContentRoute {
    params: {
        language: Language;
        path: string;
    };
}

export interface CrossReferenceRoute {
    params: {
        language: Language;
        reference: string;
    };
}

export enum BasicPath {
    GLOSSARY = 'glossary',
    INDEX_TOPICS = 'index-topics',
    INDEX_CITATIONS = 'index-citations',
    APOSTOLIC_LETTER = 'apostolic-letter',
    APOSTOLIC_CONSTITUTION = 'apostolic-constitution',
}

export const basicPaths = Object.values(BasicPath);

export function getBasicRoutes(): Array<ContentRoute> {
    return basicPaths.flatMap((basicPath) =>
        languages.map((language) => {
            const prefix = DEFAULT_LANGUAGE === language ? '' : language;
            const path = joinPaths('/', prefix, basicPath);
            return { params: { language, path } };
        })
    );
}

export async function getCrossReferencePartialRoutes(): Promise<Array<CrossReferenceRoute>> {
    const languagesAndCrossReferences = await Promise.all(
        languages.map(async (language) => ({
            language,
            crossReferences: await getAllCrossReferences(language),
        })),
    );

    return languagesAndCrossReferences.flatMap(({ language, crossReferences }) =>
        crossReferences.flatMap((reference) => {
            /*
                For robustness, build an endpoint for each cross-reference specifying
                multiple paragraphs with an en dash and a hyphen (e.g. `/101–105` and `/101-105`)
            */

            const withEnDash = reference.toString();
            const withHyphen = reference.toString().replace('–', '-');

            return [
                { params: { language, reference: withEnDash } },
                { params: { language, reference: withHyphen } },
            ];
        })
    );
}

export function getHomePageRoutes(): Array<ContentRoute> {
    return languages
        .filter((language) => DEFAULT_LANGUAGE !== language)
        .flatMap((language) => ({ params: { language, path: `/${language}` } }));
}

export async function getParagraphNumberRoutes(): Promise<Array<ContentRoute>> {
    const languagesAndParagraphNumbers = await Promise.all(
        languages.map(async (language) => (
            {
                language,
                paragraphNumbers: await getAllParagraphNumbers(language),
            }
        )),
    );

    return languagesAndParagraphNumbers.flatMap(({ language, paragraphNumbers }) =>
        paragraphNumbers
            .map((n) =>
                // deno-fmt-ignore
                DEFAULT_LANGUAGE === language
                    ? joinPaths('/', n)
                    : joinPaths('/', language, n)
            )
            .map((path) => ({ params: { language, path } }))
    );
}

export async function getTableOfContentsRoutes(): Promise<Array<ContentRoute>> {
    const tables = await Promise.all(
        languages.map((language) => getTableOfContents(language)),
    );

    return tables.flatMap((table) =>
        getTopLevelUrls(table)
            .map((path) =>
                // deno-fmt-ignore
                DEFAULT_LANGUAGE === table.language
                    ? joinPaths('/', path)
                    : joinPaths('/', table.language, path)
            )
            .map((path) => ({ params: { language: table.language, path } }))
    );
}
