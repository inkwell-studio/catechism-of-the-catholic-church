import { Fragment, JSX } from 'preact';

import { changelog, CodeChanges, Commit } from '../../../project-data/changelog.ts';
import { Actions, Selectors } from '../../logic/shared/state.ts';

export default function Changelog(): JSX.Element {
    return (
        <div
            class={`${
                Selectors.changelog.show.value ? 'flex' : 'hidden'
            } fixed inset-0 z-50 justify-center items-stretch sm:items-center`}
        >
            <div class='relative max-h-[80vh] overflow-y-scroll flex flex-col gap-8 items-start rounded-md shadow-2xl w-full sm:w-auto p-4 xs:p-6 sm:p-10'>
                <button
                    onClick={Actions.changelog.close}
                    class='absolute top-2 right-2 rounded-md p-1'
                >
                    Close
                </button>
                <strong>Notable updates</strong>
                <ol class='space-y-6'>
                    {changelog.map((changes) => <Fragment key={changes.commits[0].hash}>{Changes(changes)}</Fragment>)}
                </ol>
                <a
                    class='hover:underline'
                    target='_blank'
                    href='https://github.com/inkwell-studio/catechism-of-the-catholic-church/commits/master'
                >
                    <strong class='font-bold italic'>See all updates</strong>
                </a>
            </div>
        </div>
    );
}

function Changes(changes: CodeChanges): JSX.Element {
    return (
        <div>
            <strong class='font-bold'>{changes.date.toLocaleDateString()}</strong>
            <ol class='list-disc list-inside font-sans mt-1'>
                {changes.commits.map((c) => <li key={c.hash}>{Commit(c)}</li>)}
            </ol>
        </div>
    );
}

function Commit(commit: Commit): JSX.Element {
    return (
        <a
            class='hover:underline'
            target='_blank'
            href={`https://github.com/inkwell-studio/catechism-of-the-catholic-church/commit/${commit.hash}`}
        >
            {commit.message}
        </a>
    );
}
