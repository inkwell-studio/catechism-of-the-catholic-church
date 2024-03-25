import { JSX } from 'preact';

import { Selectors } from '../../logic/shared/state.ts';
import { translate } from '../../logic/shared/translation.ts';

export function Error(props: { title: string; titleClass: string; children: JSX.Element }): JSX.Element {
    return (
        <div class='h-[70vh] flex flex-col justify-center'>
            <div class='flex flex-col justify-center items-center gap-4 py-40 shadow-lg sm:gap-6 sm:px-40 sm:mx-auto sm:rounded-lg'>
                <h1 class={`${props.titleClass} text-4xl italic`}>{props.title}</h1>
                {props.children}
                <strong class='font-bold text-xl md:text-2xl'>
                    <a href='/' class='hover:underline'>{translate('Go Home', Selectors.language.value)}</a>
                </strong>
            </div>
        </div>
    );
}
