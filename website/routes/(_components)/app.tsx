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

            {
                /* <Test1>
                {props.children}
            </Test1> */
            }

            <UiHeadlessMod1>
                {props.children}
            </UiHeadlessMod1>

            {
                /* <MasterVersion>
                {props.children}
            </MasterVersion> */
            }

            {
                /* <UiHeadless>
                {props.children}
            </UiHeadless> */
            }
        </>
    );
}

function Test1(props: { children: ComponentChildren }) {
    return (
        <>
            <div class='grid grid-rows-content-with-permanent-footer h-screen bg-tan-100'>
                <div class='relative overflow-y-auto'>
                    <div>
                        <Partial name={PartialEnum.CONTENT_MAIN}>
                            {props.children}
                        </Partial>
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

function MasterVersion(props: { children: ComponentChildren }) {
    return (
        <>
            <div class='grid grid-rows-content-with-permanent-footer h-screen bg-tan-100'>
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

function UiHeadless(props: { children: ComponentChildren }) {
    return (
        <>
            {/* TODO: Finalize this height (it should be equal to the action bar and any additional desired spacing) */}
            <div class='mb-36'>
                <Partial name={PartialEnum.CONTENT_MAIN}>
                    <ContentStart />
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

function UiHeadlessMod1(props: { children: ComponentChildren }) {
    return (
        <div class='grid grid-rows-2 h-screen'>
            {/* TODO: Finalize this height (it should be equal to the action bar and any additional desired spacing) */}
            <div class='mb-36 overflow-y-auto'>
                <div>
                    <Partial name={PartialEnum.CONTENT_MAIN}>
                        <ContentStart />
                        {props.children}
                    </Partial>
                </div>
                <CrossReferenceWindow />
            </div>
            <div>
                {/* <div class='fixed bottom-0 inset-x-0'> */}
                <ActionBar />
            </div>
        </div>
    );
}
