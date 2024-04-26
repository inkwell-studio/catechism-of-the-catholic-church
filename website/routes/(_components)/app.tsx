import { Head, Partial } from '$fresh/runtime.ts';
import { ComponentChildren, JSX } from 'preact';

import { ContentStart } from './content-start.tsx';
import { PartialEnum } from './partial-enum.ts';

import ActionBar from '../(_islands)/action-bar.tsx';
import CrossReferenceWindow from '../(_islands)/cross-reference-window.tsx';

import { Selectors } from '../../logic/shared/state.ts';
import { translate } from '../../logic/shared/translation.ts';

export function App(props: { children: ComponentChildren }): JSX.Element {
    return (
        <>
            <Head>
                <title>{translate('Catechism of the Catholic Church', Selectors.language.value)}</title>
            </Head>
            {/* TODO: Finalize this height (it should be equal to the action bar and any additional desired spacing) (add the value to the Tailwind configuration) */}
            <div class='mb-36'>
                <Partial name={PartialEnum.CONTENT_MAIN}>
                    {props.children}
                </Partial>
            </div>
            <CrossReferenceWindow />
            <div class='fixed bottom-0 inset-x-0'>
                <ActionBar />
            </div>
        </>
    );
}
