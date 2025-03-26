import { atom } from 'nanostores';

import { addClass, removeClass } from '@logic/dom-utils.ts';
import { ElementID } from '@logic/ui.ts';

export const $crossReferenceDrawerIsOpen = atom(false);

$crossReferenceDrawerIsOpen.listen((open) =>
    // deno-fmt-ignore
    open
        ? openCrossReferenceDrawer()
        : closeCrossReferenceDrawer()
);

function openCrossReferenceDrawer(): void {
    const drawer = document.getElementById(ElementID.CROSS_REFERENCE_DRAWER_WRAPPER);
    removeClass(drawer, 'translate-y-full');
}

function closeCrossReferenceDrawer(): void {
    const drawer = document.getElementById(ElementID.CROSS_REFERENCE_DRAWER_WRAPPER);
    addClass(drawer, 'translate-y-full');
}
