import { Head, Partial } from '$fresh/runtime.ts';
import { ComponentChildren, JSX } from 'preact';

import { ActionBar } from './action-bar.tsx';
import { PartialEnum } from './partial-enum.ts';
import CrossReferenceWindow from '../(_islands)/cross-reference-window.tsx';

import { translate } from '../../logic/shared/translation.ts';
import { Selectors } from '../../logic/shared/state.ts';

export function App(props: { children: ComponentChildren }): JSX.Element {
    return (
        <>
            <Head>
                <title>{translate('Catechism of the Catholic Church', Selectors.language.value)}</title>
            </Head>
            <div class='grid grid-rows-content-with-permanent-footer h-screen'>
                <div class='relative overflow-y-auto'>
                    <div class='grid grid-rows-content-with-permanent-footer h-full'>
                        <div class='flex justify-center overflow-y-auto'>
                            <Partial name={PartialEnum.CONTENT_MAIN}>
                                {props.children}
                            </Partial>
                        </div>
                    </div>
                    <CrossReferenceWindow></CrossReferenceWindow>
                </div>
                <div>
                    <ActionBar></ActionBar>
                </div>
            </div>
        </>
    );
}
