import { useSignal } from '@preact/signals';
import { JSX } from 'preact';

import { getBibleReferenceUrl, getOtherReferenceUrl } from '../../logic/client/reference.ts';
import { translate } from '../../logic/shared/translation.ts';

import {
    BibleReference,
    Language,
    OtherReference,
    ReferenceBase,
    ReferenceCollection,
    ReferenceEnum,
} from '../../../catechism/source/types/types.ts';

export default function ReferenceLinks(
    props: { referenceCollection: ReferenceCollection | null; language: Language },
): JSX.Element {
    if (!props.referenceCollection || props.referenceCollection.references.length === 0) {
        return <></>;
    }

    const isOpen = useSignal(false);

    const superscriptText = (
        <button onClick={() => isOpen.value = !isOpen.value} class='px-0.5'>
            <sup>{props.referenceCollection.referenceNumber}</sup>
        </button>
    );

    const fullDisplay = isOpen.value
        ? (
            <div class='absolute z-10 bottom-6 -left-8 w-max'>
                {props.referenceCollection.references.map((ref, i, refs) => {
                    const divider = i > 0 && i < refs.length ? '; ' : '';

                    return <>{divider}{ReferenceContent(ref, props.language)}</>;
                })}
                <button onClick={() => isOpen.value = false}>
                    <sup>X</sup>
                </button>
            </div>
        )
        : <></>;

    return (
        <span class='relative'>
            {superscriptText}
            {fullDisplay}
        </span>
    );
}

function ReferenceContent(reference: ReferenceBase, language: Language): JSX.Element {
    if (ReferenceEnum.BIBLE === reference.referenceType) {
        return BibleReferenceContent(reference as BibleReference, language);
    } else if (ReferenceEnum.OTHER === reference.referenceType) {
        return OtherReferenceContent(reference as OtherReference, language);
    } else {
        console.warn(`Unknown reference type encountered: ${reference.referenceType}`);
        return <></>;
    }
}

function BibleReferenceContent(reference: BibleReference, language: Language): JSX.Element {
    const prefix = reference.direct ? '' : translate('Cf. ', language);
    const postfix = reference.auxillaryText ? ` (${translate(reference.auxillaryText, language)})` : '';
    const book = translate(reference.book, language);

    return (
        <a href={getBibleReferenceUrl(reference, language)} target='_blank'>
            {`${prefix}${book} ${reference.chapter}:${reference.verses}${postfix}`}
        </a>
    );
}

function OtherReferenceContent(reference: OtherReference, language: Language): JSX.Element {
    const prefix = reference.direct ? '' : translate('Cf. ', language);
    const source = reference.source;
    const pointer = reference.pointer ? `: ${reference.pointer}` : '';

    return <a href={getOtherReferenceUrl(reference, language)} target='_blank'>{`${prefix}${source}${pointer}`}</a>;
}
