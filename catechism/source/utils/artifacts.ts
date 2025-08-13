import { join, resolve } from '@std/path';

import { Artifact, Glossary, Language } from '@catechism-types';

export function getGlossary(language: Language): Promise<Glossary> {
    return getArtifact(Artifact.GLOSSARY, language);
}

// deno-lint-ignore no-explicit-any
async function getArtifact(artifact: Artifact, language?: Language): Promise<any> {
    // deno-fmt-ignore
    const filename = language
        ? `${artifact}-${language}.json`
        : `${artifact}.json`

    const filepath = resolve(join('artifacts', filename));

    return await readFile(filepath);
}

async function readFile(filepath: string): Promise<JSON> {
    const json = await import(filepath, { with: { type: 'json' } });
    return json.default;
}
