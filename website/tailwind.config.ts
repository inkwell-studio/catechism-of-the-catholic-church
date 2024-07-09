import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
    content: [
        '{routes,islands,components}/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            // See `styles.css` for the `@font-face` definitions
            sans: [...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            aria: {
                // For active link styling
                'current-true': 'current="true"', // ancestor pages
                'current-page': 'current="page"', // current page
            },
            fill: {
                // TODO: Remove these notes if `theme.colors` is not overwritten
                // This value is available by default, but becomes lost if the colors are overwritten above (that is, if `theme.colors` is specified)
                current: 'currentColor',
            },
            maxWidth: {
                '22': '5.5rem',
            },
            screens: {
                // TODO: Re-implement this (overwriting all the default values) on an as-needed basis, and only after all major UI functionality has been implemented
                xs: '320px',
            },
            stroke: {
                // TODO: Remove these notes if `theme.colors` is not overwritten
                // This value is available by default, but becomes lost if the colors are overwritten above (that is, if `theme.colors` is specified)
                current: 'currentColor',
            },
        },
    },
} satisfies Config;
