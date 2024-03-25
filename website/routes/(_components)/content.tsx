import { JSX } from 'preact';

import ContentBase from './content-base.tsx';

import { ContentContainer, Language } from '../../../catechism/source/types/types.ts';

export function Content(props: { content: ContentContainer; language: Language }): JSX.Element {
    return (
        <main class='h-fit'>
            <div class='
                    relative text-justify
                    w-full md:max-w-2xl lg:max-w-3xl
                    '>
                <ContentBase content={props.content} language={props.language}></ContentBase>
            </div>
        </main>
    );
}
