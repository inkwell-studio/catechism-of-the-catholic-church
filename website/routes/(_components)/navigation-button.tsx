import { JSX } from 'preact';

import { HeroIcon, Icon } from './icon.tsx';

import { Selectors } from '../../logic/shared/state.ts';

export function NavigationButton(props: { direction: 'next' | 'previous' }): JSX.Element {
    const next = props.direction === 'next';

    const node = next ? Selectors.navigation.nextNode.value : Selectors.navigation.previousNode.value;

    if (node) {
        return (
            <a
                f-client-nav
                href={node.url}
                class='block h-12 w-12 rounded-full opacity-30 hover:opacity-100'
            >
                {next
                    ? <Icon icon={HeroIcon.ARROW_RIGHT} insideLink={true} class='fill-current' />
                    : <Icon icon={HeroIcon.ARROW_LEFT} insideLink={true} class='fill-current' />}
            </a>
        );
    } else {
        return <></>;
    }
}
