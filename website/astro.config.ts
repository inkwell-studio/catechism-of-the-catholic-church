import { defineConfig, passthroughImageService } from 'astro/config';
import deno from '@deno/astro-adapter';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { DEFAULT_LANGUAGE } from '../catechism/source/types/types.ts';
import { getLanguages } from '../catechism/source/utils/language.ts';

import { baseUrl } from './config.ts';

export default defineConfig({
    site: baseUrl,
    srcDir: './source',
    trailingSlash: 'never',

    adapter: deno(),
    integrations: [
        sitemap(buildSitemapConfig()),
    ],

    prefetch: {
        prefetchAll: true,
    },

    image: {
        // This is used because `@deno/astro-adapter` does not support the `npm:sharp` image processor
        service: passthroughImageService(),
    },

    vite: {
        // The `tailwindcss` plugin appears to be incorrectly typed, so we assert that it's of the type `any` to avoid typechecking errors.
        // deno-lint-ignore no-explicit-any
        plugins: [tailwindcss() as any],
    },
});

function buildSitemapConfig() {
    const locales: Record<string, string> = {};
    getLanguages().forEach(([_languageKey, language]) => locales[language] = language);

    return {
        i18n: {
            defaultLocale: DEFAULT_LANGUAGE,
            locales,
        },
        filter: (page: string) => !page.includes('/partials/'),
    };
}
