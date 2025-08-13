import { join, resolve } from '@std/path';

import { Language, NumberOrNumberRange } from '@catechism-types';

import {
    Artifact,
    ParagraphCrossReferenceContentMap,
    ParagraphNumberContentMap,
    ParagraphNumberPathIdMap,
    ParagraphNumberUrlMap,
    PathIdContentMap,
    PathIdLanguageUrlMap,
    RenderableNodeMap,
    SemanticPathPathIdMap,
    TableOfContentsType,
} from '../artifacts/types/types.ts';

export function getContentMap(language: Language): Promise<PathIdContentMap> {
    return getArtifact(Artifact.RENDERABLE_PATH_ID_TO_CONTENT, language);
}

export function getRenderableNodeMap(language: Language): Promise<RenderableNodeMap> {
    return getArtifact(Artifact.PATH_ID_TO_RENDERABLE_NODES, language);
}

export function getParagraphContentMap(language: Language): Promise<ParagraphNumberContentMap> {
    return getArtifact(Artifact.PARAGRAPH_NUMBER_TO_CONTENT, language);
}

export function getParagraphCrossReferenceContentMap(language: Language): Promise<ParagraphCrossReferenceContentMap> {
    return getArtifact(Artifact.PARAGRAPH_CROSS_REFERENCE_TO_CONTENT, language);
}

export function getParagraphNumberContentMap(language: Language): Promise<ParagraphNumberContentMap> {
    return getArtifact(Artifact.PARAGRAPH_NUMBER_TO_CONTENT, language);
}

export function getParagraphNumberPathMap(language: Language): Promise<ParagraphNumberPathIdMap> {
    return getArtifact(Artifact.PARAGRAPH_NUMBER_TO_RENDERABLE_PATH_ID, language);
}

export function getParagraphNumberUrlMap(language: Language): Promise<ParagraphNumberUrlMap> {
    return getArtifact(Artifact.PARAGRAPH_NUMBER_TO_URL, language);
}

export function getParagraphPathIdMap(language: Language): Promise<ParagraphNumberPathIdMap> {
    return getArtifact(Artifact.PARAGRAPH_NUMBER_TO_RENDERABLE_PATH_ID, language);
}

export function getPathIdLanguageUrlMap(): Promise<PathIdLanguageUrlMap> {
    return getArtifact(Artifact.PATH_ID_TO_LANGUAGE_TO_URL);
}

export function getRenderablePathMap(language: Language): Promise<SemanticPathPathIdMap> {
    return getArtifact(Artifact.SEMANTIC_PATH_TO_RENDERABLE_PATH_ID, language);
}

export function getSemanticPathPathIdMap(language: Language): Promise<SemanticPathPathIdMap> {
    return getArtifact(Artifact.SEMANTIC_PATH_TO_RENDERABLE_PATH_ID, language);
}

export async function getAllCrossReferences(language: Language): Promise<Array<NumberOrNumberRange>> {
    const map = await getArtifact(Artifact.PARAGRAPH_CROSS_REFERENCE_TO_CONTENT, language);
    return Object.keys(map) as Array<NumberOrNumberRange>;
}

export async function getAllParagraphNumbers(language: Language): Promise<Array<number>> {
    const map = await getArtifact(Artifact.PARAGRAPH_NUMBER_TO_URL, language);
    return Object.keys(map).map((n) => Number(n));
}

export function getTableOfContents(language: Language): Promise<TableOfContentsType> {
    return getArtifact(Artifact.TABLE_OF_CONTENTS, language);
}

// deno-lint-ignore no-explicit-any
async function getArtifact(artifact: Artifact, language?: Language): Promise<any> {
    // deno-fmt-ignore
    const filename = language
        ? `${artifact}-${language}.json`
        : `${artifact}.json`

    const filepath = resolve(join('source', 'artifacts', filename));

    return await readFile(filepath);
}

async function readFile(filepath: string): Promise<JSON> {
    /*
        While it would be more idiomatic to use the `import` function for loading JSON files, i.e.
            ```
            const json = await import(filepath, { with: { type: 'json' } })
            ```
        such code results in an intractable error during the Astro build process.
        Hence, the JSON files are read as text, and then parsed.
    */
    const text = await Deno.readTextFile(filepath);
    return JSON.parse(text);
}
