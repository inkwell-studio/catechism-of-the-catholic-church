import { atom, computed } from 'nanostores';

import { NumberOrNumberRange } from '@catechism-types';

export const $crossReferenceHistory = atom<Array<NumberOrNumberRange>>([]);

export const $selectedCrossReference = computed(
    $crossReferenceHistory,
    (history) => history.at(-1) ?? null,
);

export function select(selection: NumberOrNumberRange): void {
    if ($crossReferenceHistory.get().at(-1) !== selection) {
        $crossReferenceHistory.set([...$crossReferenceHistory.get(), selection]);
    }
}

export function clear(): void {
    $crossReferenceHistory.set([]);
}
