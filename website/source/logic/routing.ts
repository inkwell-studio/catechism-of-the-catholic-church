import { DEFAULT_LANGUAGE, Language, PathID, SemanticPath } from '@catechism-types';
import { getLanguage, getLanguages } from '@catechism-utils/language.ts';

import { getSemanticPathPathIdMap } from './artifacts.ts';
import { AuxiliaryRouteKey, AuxiliaryRouteKeysByLanguageAndRoute, AuxiliaryRoutesByKeyAndLanguage } from './constants.ts';
import { translate } from './translation.ts';

export async function getNavigationValues(originalPath: string): Promise<{
    path: string;
    pathID: PathID;
    language: Language;
}> {
    const language = getLanguageTag(originalPath) ?? DEFAULT_LANGUAGE;
    const path = removeLanguageTag(originalPath, language);
    const pathID = (await getSemanticPathPathIdMap(language))[path] ?? null;

    return {
        path,
        pathID,
        language,
    };
}

/**
 * @returns the URL for viewing the content at the given path
 */
export function getUrl(language: Language, semanticPath: SemanticPath, includeFragment = true): string {
    const fragmentInfo = getUrlFragment(semanticPath, true, language);
    // deno-fmt-ignore
    const fragmentReplacement = includeFragment
        ? `#${fragmentInfo.fragment}`
        : '';

    if (fragmentInfo.portionToReplace) {
        return '/' + semanticPath.replace(`/${fragmentInfo.portionToReplace}`, fragmentReplacement);
    } else {
        return '/' + semanticPath;
    }
}

/**
 * @returns the URL fragment (i.e. that which comes after '#') for the content at the given path, or `undefined` if no fragment is necessary
 */
export function getUrlFragment(
    semanticPath: SemanticPath,
    acknowledgeFinalContent: boolean,
    language: Language,
): {
    portionToReplace: string | undefined;
    fragment: string | undefined;
} {
    const { isParagraph, paragraphNumber } = isParagraphSemanticPath(semanticPath, language);

    const highLevelFragment = getHighLevelUrlFragment(semanticPath, language);
    if (highLevelFragment) {
        const fragment = isParagraph ? `${paragraphNumber}` : highLevelFragment;
        return {
            portionToReplace: highLevelFragment,
            fragment,
        };
    } else {
        const portionToReplace = getLowLevelUrlFragment(semanticPath, acknowledgeFinalContent, language);
        const fragment = isParagraph ? `${paragraphNumber}` : portionToReplace;

        return {
            portionToReplace,
            fragment,
        };
    }
}

/**
 * @returns the language tag from the start of the given path, or `null` if no language tag is present at the start
 */
export function getLanguageTag(path: string | undefined): Language | null {
    if (path) {
        for (const [_key, language] of getLanguages()) {
            const regex = new RegExp(`(^|\/)?${language}(?=\/|$)`);
            const matches = path.match(regex);

            if (matches?.[0]) {
                return matches?.[0].replaceAll('/', '') as Language;
            }
        }
    }

    return null;
}

/**
 * @returns the given `path` without the language segment `zz/`, if such a language segment exists.
 * It assumes that the language segment will either be the first segment or absent.
 * `path` may or may not start with a slash (`/`).
 */
export function removeLanguageTag(path: string | undefined, language: Language): string {
    if (path) {
        const regex = new RegExp('^/?' + language + '(\/|$)');

        const containsLanguageTag = regex.test(path);
        if (containsLanguageTag) {
            path = path.replace(language, '');
            if (path.length > 1) {
                path = path.slice(1);
            }
        }

        return path;
    } else {
        return '';
    }
}

export function getLanguageFromPathname(pathname: string): Language | null {
    // Look for `/es/`, where the slashes are optional
    const firstSegment = /(^|\/)([a-z]+)(\/?)/.exec(pathname)?.[2] ?? '';
    return getLanguage(firstSegment);
}

/**
 * @returns the paragraph number from the given URL pathname, or `null` if the given URL pathname contains no paragraph number
 */
export function getParagraphNumber(urlPathname: string): number | null {
    // Look for a series of digits at the end of the string (with an optional slash at the very end) that either begin at the start of the string or follow a slash
    const regex = /(^|\/)(\d+)(\/?)$/;
    const potentialNumber = regex.exec(urlPathname)?.[2];
    const numberValue = Number(potentialNumber);
    return !isNaN(numberValue) && numberValue > 0 ? numberValue : null;
}

export function isAuxiliaryRoute(route: string, language: Language): boolean {
    return !!AuxiliaryRouteKeysByLanguageAndRoute[language][route];
}

export function isGlossary(path: string, language: Language): boolean {
    return path === AuxiliaryRoutesByKeyAndLanguage[AuxiliaryRouteKey.GLOSSARY][language];
}

export function isIndexTopics(path: string, language: Language): boolean {
    return path === AuxiliaryRoutesByKeyAndLanguage[AuxiliaryRouteKey.INDEX_TOPICS][language];
}

export function isIndexCitations(path: string, language: Language): boolean {
    return path === AuxiliaryRoutesByKeyAndLanguage[AuxiliaryRouteKey.INDEX_CITATIONS][language];
}

export function isApostolicLetter(path: string, language: Language): boolean {
    return path === AuxiliaryRoutesByKeyAndLanguage[AuxiliaryRouteKey.APOSTOLIC_LETTER][language];
}

export function isApostolicConstitution(path: string, language: Language): boolean {
    return path === AuxiliaryRoutesByKeyAndLanguage[AuxiliaryRouteKey.APOSTOLIC_CONSTITUTION][language];
}

export function translateAuxiliaryPath(path: string, languageFrom: Language, languageTo: Language): string | null {
    const key = AuxiliaryRouteKeysByLanguageAndRoute[languageFrom][path];
    if (!key) return null;

    return AuxiliaryRoutesByKeyAndLanguage[key][languageTo] ?? null;
}

function getHighLevelUrlFragment(semanticPath: SemanticPath, language: Language): string | undefined {
    /*
        These regular expressions are intended to find the first instance of `highLevelContent-1` within the given path that is not followed
        by a `highLevelContent-n` instance, where `n` > 1 and `highLevelContent` is one of 'section', 'chapter', 'article', or 'article-paragraph'.
        The only differences between them are the language-specific words.
    */
    let regex = /\/(section|chapter|article|article-paragraph)-1(?=\/|$)(?!.*(\/chapter|\/article|\/article-paragraph)-(\d{2,}|[2-9]))/;
    /*              ^                                          ^         ^
                    |                                          |         |
                    |                                          |         there cannot be any following high-level content items that are not the first child of their parent (i.e. their number is greater than 1)
                    |                                          |
                    |                                          the content type must be followed by `-1` and the end of the string, or `-1/`
                    |
                    the first high-level content type that is the first child of its parent
    */

    if (Language.LATIN === language) {
        regex =
            /\/(sectio|caput|articulus|articulus-paragraphus)-1(?=\/|$)(?!.*(\/caput|\/articulus|\/articulus-paragraphus)-(\d{2,}|[2-9]))/;
    } else if (Language.SPANISH === language) {
        regex = /\/(seccion|capitulo|articulo|articulo-parrafo)-1(?=\/|$)(?!.*(\/capitulo|\/articulo|\/articulo-parrafo)-(\d{2,}|[2-9]))/;
    }

    const match = semanticPath.match(regex);
    return match && match.index ? semanticPath.slice(match.index + 1) : undefined;
}

function getLowLevelUrlFragment(
    semanticPath: SemanticPath,
    acknowledgeFinalContent: boolean,
    language: Language,
): string | undefined {
    const fragmentStarts = [
        'prologue-section',
        'in-brief',
        'subarticle-',
        // This is for both `ParagraphGroup`s and `Paragraph`s
        'paragraph-',
    ].map((start) => translate(start, language))
        .map((start) => '/' + start);

    if (acknowledgeFinalContent) {
        fragmentStarts.push('/' + translate('final-content', language));
    }

    const fragmentIndices = fragmentStarts
        .map((fs) => semanticPath.indexOf(fs))
        .filter((i) => i > 0);

    const firstFragmentIndex = fragmentIndices.length > 0 ? Math.min(...fragmentIndices) : null;

    return firstFragmentIndex ? semanticPath.slice(firstFragmentIndex + 1) : undefined;
}

function isParagraphSemanticPath(
    semanticPath: SemanticPath,
    language: Language,
): { isParagraph: boolean; paragraphNumber: number | null } {
    /*
        These regular expressions are intended to determine if the given SemanticPath specifies a Paragraph
    */
    let regex = /\/paragraph-[0-9]+$/;

    if (Language.LATIN === language) {
        regex = /\/paragraphus-[0-9]+$/;
    } else if (Language.SPANISH === language) {
        regex = /\/parrafo-[0-9]+$/;
    }

    const match = semanticPath.match(regex);
    if (match) {
        const index = semanticPath.lastIndexOf('-');
        const paragraphNumber = Number(semanticPath.slice(index + 1));

        return {
            isParagraph: true,
            paragraphNumber,
        };
    } else {
        return {
            isParagraph: false,
            paragraphNumber: null,
        };
    }
}
