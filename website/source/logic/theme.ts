// The logic and constant values of this script must be kept in sync with those of the inline script in the `<head>` element of `base.astro`.

import { addClass, removeClass } from './dom-utils.ts';

// This value must match the class used in the selector for `@custom-variant dark` in `css/global.css`
export const DARK_MODE_CLASS = 'dark';
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';
export const LOCAL_STORAGE_KEY_THEME = 'theme';

export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
    SYSTEM = 'SYSTEM',
}

export function onThemeSelection(themeValue: Theme): void {
    globalThis.localStorage.setItem(LOCAL_STORAGE_KEY_THEME, themeValue);

    const darkModeEnabled = isDarkModeEnabled(themeValue);
    updateDarkModeClass(darkModeEnabled);
}

export function updateDarkModeClass(darkModeEnabled: boolean): void {
    const e = document.documentElement;

    if (darkModeEnabled) {
        addClass(e, DARK_MODE_CLASS);
    } else {
        removeClass(e, DARK_MODE_CLASS);
    }
}

function isDarkModeEnabled(themeValue: Theme): boolean {
    if (Theme.SYSTEM === themeValue) {
        return globalThis.matchMedia(DARK_MODE_MEDIA_QUERY).matches;
    } else {
        return Theme.DARK === themeValue;
    }
}
