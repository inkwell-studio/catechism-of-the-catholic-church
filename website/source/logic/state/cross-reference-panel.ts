import { atom } from 'nanostores';

import { addClass, removeClass } from '@logic/dom-utils.ts';
import { ElementID } from '@logic/ui.ts';

export const $showCrossReferencePanel = atom(false);

$showCrossReferencePanel.listen((show) =>
    // deno-fmt-ignore
    show
        ? showCrossReferencePanel()
        : hideCrossReferencePanel()
);

function showCrossReferencePanel(): void {
    const panel = document.getElementById(ElementID.CROSS_REFERENCE_PANEL_WRAPPER);
    removeClass(panel, 'translate-y-full');
}

function hideCrossReferencePanel(): void {
    const panel = document.getElementById(ElementID.CROSS_REFERENCE_PANEL_WRAPPER);
    addClass(panel, 'translate-y-full');
}
