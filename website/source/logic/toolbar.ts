import type { SlTabGroup } from '@shoelace-types';

import { DEFAULT_LANGUAGE, PathID } from '@catechism-types';
import { getPart, isPrologueContent } from '@catechism-utils/path-id.ts';

import { getAuxiliaryRouteLabel } from '@logic/constants.ts';
import { addClass, removeClass } from '@logic/dom-utils.ts';
import { getLanguageFromPathname, getLanguageTag, isAuxiliaryRoute, isHomePage, removeLanguageTag } from '@logic/routing.ts';
import { ElementClass, ElementID, TableOfContentsSection } from '@logic/ui.ts';

export function setToolbarVisibility(): void {
    const pathname = globalThis.location.pathname;
    const language = getLanguageTag(pathname) ?? DEFAULT_LANGUAGE;
    const toolbarShouldBeVisible = !isHomePage(pathname, language);

    if (toolbarShouldBeVisible) {
        showToolbar();
    } else {
        hideToolbar();
    }
}

export function showSearchTrigger(): void {
    const searchTrigger = document.getElementById(ElementID.SEARCH_DIALOG_TRIGGER);
    removeClass(searchTrigger, ElementClass.INVISIBLE);
}

export function hideSearchTrigger(): void {
    const searchTrigger = document.getElementById(ElementID.SEARCH_DIALOG_TRIGGER);
    addClass(searchTrigger, ElementClass.INVISIBLE);
}

export function showMenuTrigger(): void {
    const menuElement = document.getElementById(ElementID.TOOLBAR_MENU);
    removeClass(menuElement, ElementClass.INVISIBLE);
}

export function hideMenuTrigger(): void {
    const menuElement = document.getElementById(ElementID.TOOLBAR_MENU);
    addClass(menuElement, ElementClass.INVISIBLE);
}

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

export function updateToolbarNavigationText(text?: string): void {
    if (text) {
        const element = document.getElementById(ElementID.TOOLBAR_NAVIGATION_TEXT);
        if (element) {
            element.innerText = text;
        }
    }
}

export function updateToolbarForNonContentRoute(pathname: string): void {
    const language = getLanguageFromPathname(pathname) ?? DEFAULT_LANGUAGE;
    const path = removeLanguageTag(pathname, language).replace('/', '');

    if (isAuxiliaryRoute(path, language)) {
        const label = getAuxiliaryRouteLabel(path, language);
        updateToolbarNavigationText(label);
        showTableOfContentsSection(TableOfContentsSection.AUXILIARY);
    }
}

function showTableOfContentsSection(section: TableOfContentsSection): void {
    const tabGroup: SlTabGroup | null = document.querySelector(ElementID.TABLE_OF_CONTENTS_TAB_GROUP_SELECTOR);
    if (tabGroup) {
        tabGroup.show(section);
    }
}

function showToolbar(): void {
    const toolbar = document.getElementById(ElementID.TOOLBAR);
    removeClass(toolbar, ElementClass.TOOLBAR_TRANSLATE_OFFSCREEN);
}

function hideToolbar(): void {
    const toolbar = document.getElementById(ElementID.TOOLBAR);
    addClass(toolbar, ElementClass.TOOLBAR_TRANSLATE_OFFSCREEN);
}
