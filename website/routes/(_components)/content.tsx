import { JSX } from 'preact';

import ContentBase from './content-base.tsx';

import { ContentContainer, Language } from '../../../catechism/source/types/types.ts';

export function Content(props: { content: ContentContainer; language: Language }): JSX.Element {
    return (
        <main class='relative text-justify px-4'>
            <div class='max-w-prose mx-auto'>
                <ContentBase content={props.content} language={props.language}></ContentBase>
            </div>
        </main>
    );
}
