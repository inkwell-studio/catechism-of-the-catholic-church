/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from '$fresh/server.ts';
import manifest from './fresh.gen.ts';

import twindPlugin from '$fresh/plugins/twind.ts';
import twindConfig from './twind.config.ts';
import { apply } from 'twind';

await start(manifest, {
    plugins: [
        twindPlugin({
            // selfURL: import.meta.url,
            selfURL: new URL('./twind.config.ts', import.meta.url).href,
            preflight: {
                '@font-face': [
                    {
                        fontFamily: 'Rokkitt',
                        src: 'url(/fonts/Rokkitt-Regular.ttf) format("truetype")',
                    },
                    {
                        fontFamily: 'SassyFrass',
                        src: 'url(/fonts/SassyFrass-Regular.ttf) format("truetype")'
                    },
                    {
                        fontFamily: 'Plex',
                        // src: 'url(/fonts/Rokkitt-Regular.ttf) format("truetype")',
                        src: 'url(/fonts/Plex-Regular.woff2) format("woff2")',
                    },
                    {
                        fontFamily: 'Plex',
                        fontWeight: 'bold',
                        src: 'url(/fonts/Plex-Bold.woff2) format("woff2")',
                    },
                ],
                // html: apply`text-html bg-gray`,
                body: {
                    body: apply('text-sm text-white leading-none tracking-wide'),
                    h1: apply('text-xl leading-none font-bold sm:text-lg'),
                    h2: apply('text-lg font-goof font-bold text-[#09A] sm:text-md'),
                    h3: apply(
                        'text-right uppercase text-md font-bold text-gray-light lg:mt-6 lg:mb-2 md:mt-4 lg:text-left',
                    ),
                    h4: apply('text-blue-400     font-goof     font-bold text-md  mb-1.5 lg:mb-1 md:mb-0.8'),
                    h5: apply('text-gray-light leading-snug'),
                    ul: apply('list-disc list-inside'),
                    li: apply('text-gray-light leading-normal'),
                    a: apply('text-gray-light leading-normal'),
                    p: apply('text-gray-light leading-snug'),
                    label: apply('text-gray-light leading-snug'),
                },
            },
            ...twindConfig,
        }),
    ],
});
