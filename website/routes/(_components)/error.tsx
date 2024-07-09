import { JSX } from 'preact';

import { Selectors } from '../../logic/shared/state.ts';
import { translate } from '../../logic/shared/translation.ts';

export function Error(props: { title: string; children: JSX.Element }): JSX.Element {
    return (
        <div class='h-[70vh] flex flex-col justify-center'>
            <div class='flex flex-col justify-center items-center'>
                <h1>{props.title}</h1>
                {props.children}
                <strong>
                    <a href='/'>{translate('Go Home', Selectors.language.value)}</a>
                </strong>
            </div>
        </div>
    );
}
