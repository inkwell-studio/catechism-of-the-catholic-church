import { Partial } from '$fresh/runtime.ts';
import { JSX } from 'preact';

import { HeroIcon, Icon } from './icon.tsx';
import { NavigationButton } from './navigation-button.tsx';
import { PartialEnum } from './partial-enum.ts';

import DarkModeToggle from '../(_islands)/dark-mode-toggle.tsx';

import { Selectors } from '../../logic/shared/state.ts';
import { Language } from '../../../catechism/source/types/types.ts';
import MyPopover from '../(_islands)/my-popover.tsx';

const classes = {
    icons: 'w-6 h-6 stroke-current stroke-2',
    links: 'p-4 rounded hover:bg-gray-200 transition-colors',
} as const;

export function ActionBar(): JSX.Element {
    const language = Selectors.language.value;

    return (
        <div class='flex flex-col gap-1 p-1 bg-gray-100 border-t border-t-gray-300'>
            <div class='grid grid-cols-2 gap-x-1 justify-items-stretch'>
                <Partial name={PartialEnum.NAVIGATION_BUTTON_PREVIOUS}>
                    <NavigationButton direction='previous' />
                </Partial>
                <Partial name={PartialEnum.NAVIGATION_BUTTON_NEXT}>
                    <NavigationButton direction='next' />
                </Partial>
            </div>
            <div class='relative flex justify-center gap-1'>
                <Navigation language={language} />
                <Search />
                <Settings />
            </div>
        </div>
    );
}

function Navigation(props: { language: Language }): JSX.Element {
    return (
        <a f-client-nav href={`/${props.language}`} class={classes.links}>
            <Icon icon={HeroIcon.BOOK} insideLink={true} class={classes.icons} />
        </a>
    );
}

function Search(): JSX.Element {
    return (
        // TODO: Replace this with a button for the Search island
        <a f-client-nav href='/' class={classes.links}>
            <Icon icon={HeroIcon.MAGNIFYING_GLASS} insideLink={true} class={classes.icons} />
        </a>
    );
}

function Settings(): JSX.Element {
    // TODO: Add these to the settings island (along with other things)
    // <DarkModeToggle />
    // <IconLanguage insideLink={true} class={classes.icons} />

    return (
        <>
            <MyPopover />
            {/* TODO: Replace this with a button for the Settings island */}
            <a f-client-nav href='/' class={classes.links}>
                <Icon icon={HeroIcon.COG} insideLink={true} class={classes.icons} />
            </a>
        </>
    );
}
