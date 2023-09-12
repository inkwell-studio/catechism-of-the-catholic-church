import {
    Language,
    ParagraphNumberUrlMap,
    PathIdContentMap,
    SemanticPathPathIdMap,
    TableOfContentsType,
} from '../../source/types/types.ts';

// deno-lint-ignore no-explicit-any
const cache: Record<string, any> = {};

export function getContentMap(language: Language): Promise<PathIdContentMap> {
    return getArtifact('renderable-path-id_to_content', language);
}

export function getRenderablePathMap(language: Language): Promise<SemanticPathPathIdMap> {
    return getArtifact('semantic-path_to_renderable-path-id', language);
}

export function getTableOfContents(language: Language): Promise<TableOfContentsType> {
    return getArtifact('table-of-contents', language);
}

export function getParagraphNumberUrlMap(language: Language): Promise<ParagraphNumberUrlMap> {
    return getArtifact('paragraph-number_to_url', language);
}

// deno-lint-ignore no-explicit-any
async function getArtifact(filenamePrefix: string, language: Language): Promise<any> {
    const filepath = `./catechism/artifacts/${filenamePrefix}-${language}.json`;
    let artifact = cache[filepath];

    if (artifact) {
        return artifact;
    } else {
        try {
            artifact = await Deno.readTextFile(filepath);
            artifact = JSON.parse(artifact);
            cache[filepath] = artifact;
            return artifact;
        } catch (error) {
            throw new Error(`Failed to load artifact: ${filepath}`, error);
        }
    }
}
