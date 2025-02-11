import { DEFAULT_LANGUAGE, Language } from '@catechism-types';

let languageState = DEFAULT_LANGUAGE;

export function getLanguage(): Language {
    return languageState;
}

export function setLanguage(language: Language): void {
    languageState = language;
}
