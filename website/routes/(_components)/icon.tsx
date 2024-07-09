import { JSX } from 'preact';

// All of these icons come from: https://heroicons.com/
// TODO: Remove unused icons
export enum HeroIcon {
    ARROW_LEFT = 'arrow-left',
    ARROW_LEFT_LONG = 'arrow-left-long',
    ARROW_RIGHT = 'arrow-right',
    ARROW_RIGHT_LONG = 'arrow-right-long',
    BOOK = 'book',
    COG = 'cog',
    LANGUAGE = 'language',
    MAGNIFYING_GLASS = 'magnifying-glass',
}

export function Icon(props: { icon: HeroIcon; insideLink?: boolean; class?: string }): JSX.Element {
    return getHeroIcon(props.icon, props.insideLink, props.class);
}

function getHeroIcon(icon: HeroIcon, insideLink?: boolean, classes?: string): JSX.Element {
    const svgPath = SvgPaths[icon];

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class={classes}
            {
                // This is necessary for the entire <a> element to be clickable and function properly with the Fresh Partials
                ...insideLink ? { 'pointer-events': 'none' } : null
            }
        >
            {svgPath}
        </svg>
    );
}

const SvgPaths: Record<HeroIcon, JSX.Element> = {
    [HeroIcon.ARROW_LEFT]: (
        <path
            fill-rule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z'
            clip-rule='evenodd'
        />
    ),
    [HeroIcon.ARROW_LEFT_LONG]: (
        <path stroke-linecap='round' stroke-linejoin='round' d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18' />
    ),
    [HeroIcon.ARROW_RIGHT]: (
        <path
            fill-rule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z'
            clip-rule='evenodd'
        />
    ),
    [HeroIcon.ARROW_RIGHT_LONG]: (
        <path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
    ),
    [HeroIcon.BOOK]: (
        <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
        />
    ),
    [HeroIcon.COG]: (
        <>
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
            />
            <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
        </>
    ),
    [HeroIcon.LANGUAGE]: (
        <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
        />
    ),
    [HeroIcon.MAGNIFYING_GLASS]: (
        <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
    ),
};
