import type { SlTabGroup } from '@shoelace-types';

import { DEFAULT_LANGUAGE, PathID } from '@catechism-types';
import { getPart, isPrologueContent } from '@catechism-utils/path-id.ts';

import { getLanguageFromPathname, isAuxiliaryRoute, removeLanguageTag } from '@logic/routing.ts';
import { ElementID, TableOfContentsSection } from '@logic/ui.ts';

export function updateTableOfContentsViewByPathID(pathID: PathID): void {
    if (isPrologueContent(pathID)) {
        showTableOfContentsSection(TableOfContentsSection.PROLOGUE);
    } else {
        const part = getPart(pathID);
        if (1 === part) {
            showTableOfContentsSection(TableOfContentsSection.PART_1);
        } else if (2 === part) {
            showTableOfContentsSection(TableOfContentsSection.PART_2);
        } else if (3 === part) {
            showTableOfContentsSection(TableOfContentsSection.PART_3);
        } else if (4 === part) {
            showTableOfContentsSection(TableOfContentsSection.PART_4);
        }
    }
}

export function updateTableOfContentsViewForAuxiliaryRoute(pathname: string): void {
    const language = getLanguageFromPathname(pathname) ?? DEFAULT_LANGUAGE;
    const path = removeLanguageTag(pathname, language).replace('/', '');
    if (isAuxiliaryRoute(path, language)) {
        showTableOfContentsSection(TableOfContentsSection.AUXILIARY);
    }
}

export function updateToolbarNaturalLanguagePath(text?: string): void {
    if (text) {
        const element = document.getElementById(ElementID.TOOLBAR_NATURAL_LANGUAGE_PATH);
        if (element) {
            element.innerText = text;
        }
    }
}

function showTableOfContentsSection(section: TableOfContentsSection): void {
    const tabGroup: SlTabGroup | null = document.querySelector(ElementID.TABLE_OF_CONTENTS_TAB_GROUP_SELECTOR);
    if (tabGroup) {
        tabGroup.show(section);
    }
}
