import { JSX } from 'preact';

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
                {/* Extract this into the new `icons` folder */}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    // This is necessary for the entire <a> element to be clickable and function properly with the Fresh Partials
                    pointer-events='none'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                >
                    {next ? arrowRight() : arrowLeft()}
                </svg>
            </a>
        );
    } else {
        return <></>;
    }
}

function arrowRight(): JSX.Element {
    return (
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
    );
}

function arrowLeft(): JSX.Element {
    return (
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
    );
}
