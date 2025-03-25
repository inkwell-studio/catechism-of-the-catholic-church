import type { SlDrawer } from '@shoelace-types';
import { atom } from 'nanostores';

import { ElementID } from '@logic/ui.ts';

const $crossReferenceDrawerOpen = atom(false);

const drawer: SlDrawer | null = document.querySelector(ElementID.CROSS_REFERENCE_DRAWER_SELECTOR);
drawer?.addEventListener('sl-show', () => $crossReferenceDrawerOpen.set(true));
drawer?.addEventListener('sl-hide', () => $crossReferenceDrawerOpen.set(false));

export function openCrossReferenceDrawer(): void {
    drawer?.show();
}

export function closeCrossReferenceDrawer(): void {
    drawer?.hide();
}
