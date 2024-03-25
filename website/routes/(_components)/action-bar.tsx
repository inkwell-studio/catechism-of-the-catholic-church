import { Partial } from '$fresh/runtime.ts';
import { JSX } from 'preact';

import { NavigationButton } from './navigation-button.tsx';
import { PartialEnum } from './partial-enum.ts';

import DarkModeToggle from '../(_islands)/dark-mode-toggle.tsx';

import { Selectors } from '../../logic/shared/state.ts';
import { translate } from '../../logic/shared/translation.ts';

import { Language } from '../../../catechism/source/types/types.ts';

const linkClasses = 'flex items-center text-center ';

export function ActionBar(): JSX.Element {
    const language = Selectors.language.value;

    return (
        <div class='relative flex justify-center gap-8 border'>
            <div class='absolute -top-14 right-2'>
                <Partial name={PartialEnum.NAVIGATION_BUTTON_NEXT}>
                    <NavigationButton direction='next' />
                </Partial>
            </div>
            <div class='absolute -top-14 left-2'>
                <Partial name={PartialEnum.NAVIGATION_BUTTON_PREVIOUS}>
                    <NavigationButton direction='previous' />
                </Partial>
            </div>
            <div class='flex'>
                <LinkHome language={language} />
                <Divider />
                <LinkTableOfContents language={language} />
                <Divider />
                <LinkSelectLanguage language={language} />
                <Divider />
                <DarkModeToggle />
            </div>
        </div>
    );
}

function LinkHome(props: { language: Language }): JSX.Element {
    return <a href='/' class={linkClasses}>{translate('Introduction (Home)', props.language)}</a>;
}

function LinkTableOfContents(props: { language: Language }): JSX.Element {
    return (
        <a f-client-nav href={`/${props.language}`} class={linkClasses}>
            {translate('Table of Contents', props.language)}
        </a>
    );
}

function LinkSelectLanguage(props: { language: Language }): JSX.Element {
    return (
        <a href='/select-language' class={linkClasses + ' gap-4'}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
            >
                <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
                />
            </svg>
            <span>{translate('Select Language', props.language)}</span>
        </a>
    );
}

function Divider(): JSX.Element {
    return <div class='my-2 border-l'></div>;
}
