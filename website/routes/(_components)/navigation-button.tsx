import { JSX } from 'preact';

import { HeroIcon, Icon } from './icon.tsx';

import { Selectors } from '../../logic/shared/state.ts';

const iconClasses = 'w-6 h-6 stroke-current stroke-2';

export function NavigationButton(props: { direction: 'next' | 'previous' }): JSX.Element {
    const next = props.direction === 'next';

    const node = next ? Selectors.navigation.nextNode.value : Selectors.navigation.previousNode.value;

    if (node) {
        return (
            <a
                f-client-nav
                href={node.url}
                class={`flex ${
                    next ? 'justify-start' : 'justify-end'
                } py-2 rounded hover:bg-gray-200 transition-colors`}
            >
                <div class={`flex ${next ? 'justify-end' : 'justify-start'} w-full max-w-22 px-4`}>
                    {next
                        ? <Icon icon={HeroIcon.ARROW_RIGHT_LONG} insideLink={true} class={iconClasses} />
                        : <Icon icon={HeroIcon.ARROW_LEFT_LONG} insideLink={true} class={iconClasses} />}
                </div>
            </a>
        );
    } else {
        return <></>;
    }
}
