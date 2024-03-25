import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
    content: [
        '{routes,islands,components}/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            white: '#fff'
        },
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
            screens: {
                xs: '320px',
            },
        },
    },
} satisfies Config;
