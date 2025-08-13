import { NaturalLanguagePath } from '@catechism-types';

export function getNaturalLanguagePathText(naturalLanguagePath: NaturalLanguagePath): string {
    return naturalLanguagePath.slice(0, 3).join(' • ');
}
