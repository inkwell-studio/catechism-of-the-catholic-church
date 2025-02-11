/*
    Path aliases cannot be used in this file as long as it imported by `website/astro.config.ts`,
    as the Astro config file does not support path aliases (either in itself or its dependencies).
    For more info: https://github.com/withastro/astro/issues/9782
*/

import { Language } from '../types/types.ts';

export function getLanguage(language: string): Language | null {
    return language
        ? getLanguages()
            .find(([_key, value]) => language === value)
            ?.at(1) as Language ?? null
        : null;
}

export function getLanguages(): Array<[string, Language]> {
    return Object.entries(Language).map(([key, language]) => [
        // This changes "ENGLISH" to "English"
        key[0] + key.slice(1).toLowerCase(),
        language,
    ]);
}

export function getNativeLanguageText(language: Language): string {
    switch (language) {
        case Language.ENGLISH:
            return 'English';
        case Language.LATIN:
            return 'Latinus';
        case Language.SPANISH:
            return 'Español';

            /*
        TODO: Implement when necessary (and check if the Catechism has been translated into any other languages)

        case 'ar':
            return 'عربي';
        case 'zh':
            return '中文';
        case 'fr':
            return 'Français';
        case 'de':
            return 'Deutsch';
        case 'it':
            return 'Italiano';
        case 'mg':
            return 'Malagasy';
        case 'pt':
            return 'Português';
        */
    }
}
