import PathMapEnglish from '../../../catechism/artifacts/semantic-path_to_renderable-path-id-en.json' with {
    type: 'json',
};
import PathMapLatin from '../../../catechism/artifacts/semantic-path_to_renderable-path-id-la.json' with {
    type: 'json',
};
import PathMapSpanish from '../../../catechism/artifacts/semantic-path_to_renderable-path-id-es.json' with {
    type: 'json',
};

import { getUrlFragment } from '../shared/routing.ts';
import { Language, PathID, SemanticPath, SemanticPathPathIdMap } from '../../../catechism/source/types/types.ts';

const pathMaps = {
    [Language.ENGLISH]: PathMapEnglish,
    [Language.LATIN]: PathMapLatin,
    [Language.SPANISH]: PathMapSpanish,
} as const;

export enum Element {
    TABLE_OF_CONTENTS = 'TABLE_OF_CONTENTS',
    CONTENT = 'CONTENT',
    GLOSSARY = 'GLOSSARY',
    INDEX = 'INDEX',
}

export function getElementAndPathID(
    language: Language,
    contentPath: string,
): { element: Element; pathID: PathID | null } | null {
    if (!contentPath || 'table-of-contents' === contentPath) {
        return {
            element: Element.TABLE_OF_CONTENTS,
            pathID: null,
        };
    } else {
        const pathID = getRenderablePathID(language, contentPath);
        if (pathID) {
            return {
                element: Element.CONTENT,
                pathID,
            };
        } else {
            return null;
        }
    }
}

/**
 * @returns the URL for viewing the content at the given path
 */
export function getUrl(language: Language, semanticPath: SemanticPath): string {
    const fragmentInfo = getUrlFragment(semanticPath, true, language);
    if (fragmentInfo.portionToReplace) {
        return `/${language}/` + semanticPath.replace(`/${fragmentInfo.portionToReplace}`, `#${fragmentInfo.fragment}`);
    } else {
        return `/${language}/${semanticPath}`;
    }
}

/**
 * @returns the renderable `PathID` corresponding to the given value, or `null` if no such `PathID` exists
 */
function getRenderablePathID(language: Language, semanticPath: SemanticPath): PathID | null {
    return getPathMap(language)[semanticPath] ?? null;
}

function getPathMap(language: Language): SemanticPathPathIdMap {
    return pathMaps[language];
}
