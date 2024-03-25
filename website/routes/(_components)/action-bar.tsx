import { Partial } from '$fresh/runtime.ts';
import { JSX } from 'preact';

import { IconBook } from './icons/icon-book.tsx';
import { IconCog } from './icons/icon-cog.tsx';
import { IconLanguage } from './icons/icon-language.tsx';
import { IconMagnifyingGlass } from './icons/icon-magnifying-glass.tsx';
import { NavigationButton } from './navigation-button.tsx';
import { PartialEnum } from './partial-enum.ts';

import DarkModeToggle from '../(_islands)/dark-mode-toggle.tsx';

import { Selectors } from '../../logic/shared/state.ts';
import { translate } from '../../logic/shared/translation.ts';

import { Language } from '../../../catechism/source/types/types.ts';

const classes = {
    icons: 'w-6 h-6 stroke-current stroke-2',
    topLevelLinks: 'flex items-center text-center',
} as const;

export function ActionBar(): JSX.Element {
    const language = Selectors.language.value;

    return (
        <div class='relative flex justify-center bg-white gap-8 border'>
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
                <Navigation language={language} />
                <Divider />
                <Search language={language} />
                <Divider />
                <Settings language={language} />
                <Divider />
                <DarkModeToggle />
            </div>
        </div>
    );
}

function Navigation(props: { language: Language }): JSX.Element {
    /*
    <a f-client-nav href={`/${props.language}`} class={topLevelLinkClasses}>
            {translate('Table of Contents', props.language)}
        </a>
    */

    // return <a href='/' class={classes.topLevelLinks}>{translate('Home', props.language)}</a>;

    return (
        <div>
            <IconBook class={classes.icons} />
        </div>
    );
}

function Search(props: { language: Language }): JSX.Element {
    return (
        <div>
            <IconMagnifyingGlass class={classes.icons} />
        </div>
    );
}

function Settings(props: { language: Language }): JSX.Element {
    /*
    return (
        <a href='/select-language' class={classes.topLevelLinks + ' gap-4'}>
            <IconLanguage class={classes.icons} />
            <span class='hidden'>{translate('Select Language', props.language)}</span>
        </a>
    );
    */

    return (
        <div>
            <IconCog class={classes.icons} />
        </div>
    );
}

function Divider(): JSX.Element {
    return <div class='my-2 border-l'></div>;
}
