import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
    content: [
        '{routes,islands,components}/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
        },
        fontFamily: {
            // See `styles.css` for the `@font-face` definitions
            sans: ['PTSans', ...defaultTheme.fontFamily.sans],
            'sans-caption': ['PTSansCaption', ...defaultTheme.fontFamily.sans],
            serif: ['PTSerif', ...defaultTheme.fontFamily.serif],
            mono: ['Courier New', 'monospace'],
        },
        extend: {
            aria: {
                // For active link styling
                'current-true': 'current="true"', // ancestor pages
                'current-page': 'current="page"', // current page
            },
            gridTemplateRows: {
                'content-with-permanent-footer': '1fr max-content',
            },
            screens: {
                xs: '320px',
            },
        },
    },
} satisfies Config;
