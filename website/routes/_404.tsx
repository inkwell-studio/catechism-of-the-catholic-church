import { PageProps } from '$fresh/server.ts';
import { JSX } from 'preact';

import { Error } from './(_components)/error.tsx';
import { Selectors } from '../logic/shared/state.ts';
import { translate } from '../logic/shared/translation.ts';

export default function ErrorPage404(props: PageProps): JSX.Element {
    const title = translate('Page not found.', Selectors.language.value);

    return (
        <Error title={title}>
            <div>
                {translate('Unknown page:', Selectors.language.value)} {props.url.pathname}
            </div>
        </Error>
    );
}
