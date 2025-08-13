import * as pagefind from 'pagefind';
import { PagefindIndex } from 'pagefind';
import { join } from '@std/path';

import { DEFAULT_LANGUAGE } from '@catechism-types';
import { getLanguages } from '@catechism-utils/language.ts';

import { AuxiliaryRouteKey, AuxiliaryRoutesByKeyAndLanguage, MainRouteKey, MainRoutesByKeyAndLanguage } from '@logic/constants.ts';

type IndexEntry = {
    content: string;
    url: string;
};

buildSearchIndex();

const baseDirectory = join('dist', 'client');
const outputDirectoryProduction = join(baseDirectory, 'pagefind');
const outputDirectoryDevelopment = join('public', 'pagefind');

async function buildSearchIndex(): Promise<void> {
    const { index } = await pagefind.createIndex({});

    if (index) {
        await removeOutputDirectories();

        const entries = await getIndexEntries();
        await addIndexEntries(index, entries);

        writeFiles(index);
    } else {
        console.error(`An index could not be created`);
    }
}

//#region helper functions
async function removeOutputDirectories(): Promise<void> {
    await removeDirectory(outputDirectoryProduction);
    await removeDirectory(outputDirectoryDevelopment);
}

async function removeDirectory(directory: string): Promise<void> {
    try {
        await Deno.lstat(directory);
        return Deno.remove(directory, { recursive: true });
    } catch {
        // The directory does not exist, so there is no need to do anything
    }
}

async function addIndexEntries(index: PagefindIndex, indexEntries: Array<IndexEntry>): Promise<void> {
    for await (const entry of indexEntries) {
        await index.addHTMLFile(entry);
    }
}

async function getIndexEntries(): Promise<Array<IndexEntry>> {
    const indexEntries: Array<IndexEntry> = [];

    const directories = getDirectories();
    for await (const directory of directories) {
        indexEntries.concat(
            await getIndexEntriesHelper(directory, indexEntries),
        );
    }

    return indexEntries;
}

async function getIndexEntriesHelper(path: string, indexEntries: Array<IndexEntry>): Promise<Array<IndexEntry>> {
    const fullPath = join(baseDirectory, path);
    const dirEntries = Deno.readDir(fullPath);

    for await (const dirEntry of dirEntries) {
        if (dirEntry.isFile && dirEntry.name.endsWith('.html')) {
            const filepath = join(fullPath, dirEntry.name);
            const content = await Deno.readTextFile(filepath);
            const url = path;

            indexEntries.push({ content, url });
        } else if (dirEntry.isDirectory) {
            indexEntries.concat(
                await getIndexEntriesHelper(join(path, dirEntry.name), indexEntries),
            );
        } else {
            return [];
        }
    }

    return indexEntries;
}

function getDirectories(): Array<string> {
    const mainRouteDirectories = Object.values(MainRouteKey).flatMap((routeKey) =>
        // deno-fmt-ignore
        getLanguages().map(([_key, language]) => {
            const directory = MainRoutesByKeyAndLanguage[routeKey as MainRouteKey][language]
            return DEFAULT_LANGUAGE === language
                ? directory
                : join(language, directory);
        })
    );

    const auxiliaryRouteDirectories = Object.values(AuxiliaryRouteKey).flatMap((routeKey) =>
        // deno-fmt-ignore
        getLanguages().map(([_key, language]) => {
            const directory = AuxiliaryRoutesByKeyAndLanguage[routeKey as AuxiliaryRouteKey][language]
            return DEFAULT_LANGUAGE === language
                ? directory
                : join(language, directory);
        })
    );

    return [...mainRouteDirectories, ...auxiliaryRouteDirectories];
}

async function writeFiles(index: PagefindIndex): Promise<void> {
    await index.writeFiles({
        outputPath: outputDirectoryProduction,
    });

    await index.writeFiles({
        outputPath: outputDirectoryDevelopment,
    });
}
//#endregion
