import { Options } from '$fresh/plugins/twind.ts';
import { apply } from 'twind';

export default {
    theme: {
        fontFamily: {
            'sassy-frass': ['SassyFrass', 'serif'],
            rokkitt: ['Rokkitt', 'serif'],
            plex: ['Plex', 'serif'],
            //   'serif': ['"Sassy Frass"'],
            // 'goof': ['rokkitt'],
            // 'serif': ['"Sassy Frass"'],
            // 'serif': ['"Noto Serif"']
        },
    },
} as Options;
// } as Pick<Options, "theme">;
