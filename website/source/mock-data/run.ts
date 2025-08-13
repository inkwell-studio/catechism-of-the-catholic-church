import { join, resolve } from '@std/path';

import { CatechismStructure, DEFAULT_LANGUAGE, Glossary } from '@catechism-types';
import { getLanguages } from '@catechism-utils/language.ts';

import { buildCatechism } from './builders/catechism/catechism.ts';
import { build as buildMockGlossary } from './builders/glossary.ts';
import { LimitsSize, setLimits } from './config/limits.ts';
import { setLanguage } from './language/language-state.ts';
import { translateCatechism } from './language/translate.ts';

run();

function run(): void {
    console.log('\nBuilding mock data...');
    setLimits(LimitsSize.SMALL);

    const catechism = buildCatechism();
    const translatedCatechisms = getTranslatedCatechisms(catechism);

    const allCatechisms = [catechism, ...translatedCatechisms];
    writeCatechismsToDisk(allCatechisms);

    const artifacts = buildArtifacts(allCatechisms);
    writeArtifactsToDisk(artifacts);
}

function getTranslatedCatechisms(catechism: CatechismStructure): Array<CatechismStructure> {
    return getLanguages()
        .filter(([_languageKey, language]) => DEFAULT_LANGUAGE !== language)
        .map(([languageKey, language]) => {
            console.log(`Translating [${languageKey}] ...`);
            return translateCatechism(catechism, language);
        });
}

function buildArtifacts(catechisms: Array<CatechismStructure>): Array<{ artifact: Glossary; filepath: string }> {
    console.log('\nBuilding artifacts...\n');

    return catechisms.flatMap((c) => {
        setLanguage(c.language);
        const glossary = buildMockGlossary(c);

        return [
            { artifact: glossary, filepath: getArtifactFilepath(`glossary-${c.language}.json`) },
        ];
    });
}

function writeCatechismsToDisk(catechisms: Array<CatechismStructure>): void {
    catechisms.forEach((catechism) => writeToDisk(catechism, getArtifactFilepath(`catechism-${catechism.language}.json`)));
}

function writeArtifactsToDisk(artifactsData: ReturnType<typeof buildArtifacts>): void {
    artifactsData.forEach((data) => writeToDisk(data.artifact, data.filepath));
}

function writeToDisk(o: object, filepath: string): void {
    const json = JSON.stringify(o, undefined, '  ');
    Deno.writeTextFileSync(filepath, json + '\n');
}

function getArtifactFilepath(filename: string): string {
    return resolve(join('..', 'catechism', 'artifacts', filename));
}
