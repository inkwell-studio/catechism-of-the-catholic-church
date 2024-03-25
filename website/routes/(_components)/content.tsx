import { JSX } from 'preact';

import ContentBase from './content-base.tsx';

import { ContentContainer, Language } from '../../../catechism/source/types/types.ts';

export function Content(props: { content: ContentContainer; language: Language }): JSX.Element {
    return (
        <main class='h-fit md:py-8'>
            <div class='
                    relative text-justify
                    rounded-md shadow md:shadow-2xl
                    w-full md:max-w-2xl lg:max-w-3xl
                    px-6 xs:px-10 sm:px-20 lg:px-32
                    pb-4 pt-4 sm:pt-8 md:pt-14 lg:pt-16'>
                <ContentBase content={props.content} language={props.language}></ContentBase>
            </div>
        </main>
    );
}
