import { join, resolve } from '@std/path';

import { baseUrl } from '../config.ts';

createRobotsTxt();

async function createRobotsTxt(): Promise<void> {
    const text = `\
User-agent: *
Disallow: /

Sitemap: ${baseUrl}/sitemap-index.xml
`;

    const filepath = resolve(join('dist', 'client', 'robots.txt'));
    await Deno.writeTextFile(filepath, text);
}
