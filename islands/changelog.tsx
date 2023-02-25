import { Fragment } from 'preact';

import { changelog, CodeChanges, Commit } from '../data/changelog.ts';
import { state } from '../state/state.ts';

export default function Changelog() {
    return (
        <div
            class={`${
                state.value.showChangelog ? 'flex' : 'hidden'
            } fixed inset-0 z-50 justify-center items-stretch sm:items-center`}
        >
            <div class='relative bg-tan-50 flex flex-col gap-8 items-start rounded-md shadow-2xl w-full sm:w-auto p-4 xs:p-6 sm:p-10'>
                <button onClick={close} class='absolute top-2 right-2 rounded-md p-1 hover:bg-red-900/15'>Close</button>
                <strong class='text-xl font-bold'>Notable updates</strong>
                <ol class='space-y-6'>
                    {changelog.map((changes) => <Fragment key={changes}>{Changes(changes)}</Fragment>)}
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

function Changes(changes: CodeChanges) {
    return (
        <div>
            <strong className='font-bold'>{changes.date.toLocaleDateString()}</strong>
            <ol class='list-disc list-inside font-sans'>
                {changes.commits.map((c) => <li key={c}>{Commit(c)}</li>)}
            </ol>
        </div>
    );
}

function Commit(commit: Commit) {
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

function close(): void {
    state.value = {
        ...state.value,
        showChangelog: false,
    };
}
