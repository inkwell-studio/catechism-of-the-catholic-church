import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import { JSX } from 'preact';

import { getLanguageTag } from '../logic/server/language-tag.ts';
import { Selectors } from '../logic/shared/state.ts';
import SettingsMenu from './(_islands)/settings-menu.tsx';

export default function App({ Component }: PageProps): JSX.Element {
    return (
        <html lang={getLanguageTag(Selectors.language.value)}>
            <Head>
                <meta charset='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='stylesheet' href='/styles.css' />
            </Head>
            <body>
                <SettingsMenu />

                <Component />
            </body>
        </html>
    );
}
