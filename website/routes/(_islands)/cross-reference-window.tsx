import { JSX } from 'preact';

import ContentBase from '../(_components)/content-base.tsx';

import { Actions, Selectors } from '../../logic/shared/state.ts';
import { translate } from '../../logic/shared/translation.ts';

import { Language, NumberOrNumberRange, Paragraph } from '../../../catechism/source/types/types.ts';

export default function CrossReferenceWindow(): JSX.Element {
    const content = Selectors.crossReference.selectedContent.value;
    const selectionHistory = Selectors.crossReference.selectionHistory.value;
    const language = Selectors.language.value;
    const showTrail = selectionHistory.length > 0;

    if (content.length > 0) {
        return (
            <div class='absolute z-20 bottom-0 inset-x-0 max-h-[50vh] overflow-y-auto bg-white pb-8 px-4 sm:px-12 border-t border-black'>
                <div class='absolute top-4 right-4'>
                    <Controls paragraphUrl={content[0].url} language={language} />
                </div>
                <div class='w-full md:max-w-2xl lg:max-w-3xl mx-auto mt-2'>
                    {showTrail && (
                        <div class='flex gap-2 py-2 border-b'>
                            {Trail(selectionHistory)}
                        </div>
                    )}
                    <div class={showTrail ? 'mt-2' : 'mt-4'}>
                        {Content(content, language)}
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

function Content(
    paragraphs: Array<Paragraph>,
    language: Language,
): Array<JSX.Element> {
    return paragraphs.map((paragraph) => (
        <ContentBase key={paragraph.pathID} content={paragraph} language={language}></ContentBase>
    ));
}

function Trail(refs: Array<NumberOrNumberRange>): Array<JSX.Element> {
    return refs.map((ref, index, array) => {
        const key = `${ref}_${index}`;
        return index === array.length - 1
            ? <span key={key}>{ref}</span>
            : <button key={key} onClick={() => Actions.crossReference.selectFromHistory(index)}>{ref}{', '}</button>;
    });
}

function Controls(props: { paragraphUrl: string; language: Language }): JSX.Element {
    return (
        <div class='flex gap-2 text-lg font-mono'>
            <a f-client-nav onClick={() => Actions.crossReference.navigateTo()} href={props.paragraphUrl}>
                {translate('Open', props.language)}
            </a>
            <div>|</div>
            <button onClick={() => Actions.crossReference.clearSelection()}>X</button>
        </div>
    );
}
