import { getCatechismSourceCode } from './converters/catechism-converter.ts';
import { TextKeyAndValue } from './converters/text-key-and-value.ts';
import { determineTextKeysAndValuesAndUpdateCatechismObject } from './converters/text-keys-and-values-converter.ts';
import { join } from '../../dependencies.ts';
import { CatechismStructure } from '../source/types/catechism-structure.ts';

export function writeSourceCode(catechism: CatechismStructure): void {
    const results = determineTextKeysAndValuesAndUpdateCatechismObject(catechism);

    const textKeys = getTextKeysSourceCode(results.texts);
    const texts = getTextValuesSourceCode(results.texts);
    const catechismCode = getCatechismSourceCode(results.catechism);

    Deno.writeTextFileSync(join('catechism/source/types', 'text-key.ts'), textKeys);
    Deno.writeTextFileSync(join('catechism/source/text', 'text-en.ts'), texts);
    Deno.writeTextFileSync(join('catechism/source', 'catechism.ts'), catechismCode);
}

function getTextKeysSourceCode(texts: Array<TextKeyAndValue>): string {
    const indent = '    ';

    const entries = indent + texts
        .map((entry) => `${entry.key} = '${entry.key}',`)
        .join('\n' + indent);

    return `\
/**
 * Double-underscores are used to separate parts (e.g. "Prologue" from "Sub-article")
 */
export enum TextKey {
${entries}
}`;
}

function getTextValuesSourceCode(texts: Array<TextKeyAndValue>): string {
    const indent = '    ';

    const entries = indent + texts
        .map((entry) => `[TextKey.${entry.key}]: \`${entry.value}\`,`)
        .join('\n' + indent);

    return `\
import { CatechismText, TextKey } from '../types/types.ts';

/**
 * Editor's notes:
 * 1) Strings use backticks (i.e. \`), as I consider character less likely to be in the Catechism than primes or quote marks.
 */
export const Text: CatechismText = {
${entries}
};`;
}
