// @ts-types="npm:@types/react@~19.0.0"
import { ReactElement } from 'react';

import { Language } from '@catechism-types';

export interface ApostolicLetter {
    title: string;
    subtitle: string;
    authorText: Array<string>;
    intro: string;
}

export function Title(props: { text: string }): ReactElement {
    return <h1>{props.text}</h1>;
}

export function Subtitle(props: { text: string }): ReactElement {
    return <h2>{props.text}</h2>;
}

export function AuthorText(props: { lines: Array<string> }): ReactElement {
    return (
        <div className='flex flex-col items-center'>
            {props.lines.map((text, i) => <span key={i}>{text}</span>)}
        </div>
    );
}

export function Intro(props: { text: string }): ReactElement {
    return <em>{props.text}</em>;
}

export function getLetter(language: Language): ApostolicLetter {
    switch (language) {
        case Language.ENGLISH:
            return {
                title: 'Apostolic Letter [ English ]',
                subtitle: 'Subtitle Text',
                authorText: ['line 1', 'line 2', 'line 3'],
                intro: 'Intro text goes here.',
            };
        case Language.LATIN:
            return {
                title: 'Apostolic Letter [ Latin ]',
                subtitle: 'Subtitle Text',
                authorText: ['line 1', 'line 2', 'line 3'],
                intro: 'Intro text goes here.',
            };
        case Language.SPANISH:
            return {
                title: 'Apostolic Letter [ Spanish ]',
                subtitle: 'Subtitle Text',
                authorText: ['line 1', 'line 2', 'line 3'],
                intro: 'Intro text goes here.',
            };
    }
}

//#region main content
export function Body(props: { language: Language }): ReactElement {
    switch (props.language) {
        case Language.ENGLISH:
            return bodyEnglish();
        case Language.LATIN:
            return bodyLatin();
        case Language.SPANISH:
            return bodySpanish();
    }
}

function bodyEnglish(): ReactElement {
    return <div>( body text : English )</div>;
}

function bodyLatin(): ReactElement {
    return <div>( body text : Latin )</div>;
}

function bodySpanish(): ReactElement {
    return <div>( body text : Spanish )</div>;
}
//#endregion
