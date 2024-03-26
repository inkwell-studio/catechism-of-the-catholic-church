import { Partial } from '$fresh/runtime.ts';
import { JSX } from 'preact';

import { HeroIcon, Icon } from './icon.tsx';
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
            <Icon icon={HeroIcon.BOOK} insideLink={true} class={classes.icons} />
        </div>
    );
}

function Search(props: { language: Language }): JSX.Element {
    return (
        <div>
            <Icon icon={HeroIcon.LANGUAGE} insideLink={true} class={classes.icons} />
        </div>
    );
}

function Settings(props: { language: Language }): JSX.Element {
    /*
    return (
        <a href='/select-language' class={classes.topLevelLinks + ' gap-4'}>
            <IconLanguage insideLink={true} class={classes.icons} />
            <span class='hidden'>{translate('Select Language', props.language)}</span>
        </a>
    );
    */

    return (
        <div>
            <Icon icon={HeroIcon.COG} insideLink={true} class={classes.icons} />
        </div>
    );
}

function Divider(): JSX.Element {
    return <div class='my-2 border-l'></div>;
}
