import { Options } from '$fresh/plugins/twind.ts';
import presetTailwind from '@twind/preset-tailwind';

export default {
    selfURL: import.meta.url,
    presets: [presetTailwind()],
    theme: {
        rules: [
            ['giraffe', { 'background-color': '#124512' }],
        ],
    },
} as Options;
