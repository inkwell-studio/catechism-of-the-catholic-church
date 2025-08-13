export enum UiClass {
    HIDE_CROSS_REFERENCES = 'hide-cross-references',
    HIDE_EXTERNAL_REFERENCES = 'hide-external-references',
}

export enum ElementID {
    CONTENT_WRAPPER = 'content-wrapper',
    CONTENT_WRAPPER_SELECTOR = '#content-wrapper',

    CROSS_REFERENCE_PANEL = 'cross-reference-panel',
    CROSS_REFERENCE_PANEL_SELECTOR = '#cross-reference-panel',

    CROSS_REFERENCE_PANEL_WRAPPER = 'cross-reference-panel-wrapper',
    CROSS_REFERENCE_PANEL_CLOSE_BUTTON = 'cross-reference-panel-close-button',
    CROSS_REFERENCE_PANEL_CONTENT_WRAPPER = 'cross-reference-panel-content-wrapper',
    CROSS_REFERENCE_PANEL_NAVIGATE_TO_WRAPPER = 'cross-reference-panel-navigate-to-wrapper',

    HOME_ABOUT = 'about',
    HOME_ABOUT_SELECTOR = '#about',
    HOME_START_READING = 'start-reading',
    HOME_START_READING_SELECTOR = '#start-reading',

    INFINITE_SCROLL_BACKWARD_ACTIVATOR_CONTAINER = 'infinite-scroll-backward-activator-container',

    INFINITE_SCROLL_BACKWARD_INITIAL_TARGET = 'infinite-scroll-backward-initial-target',
    INFINITE_SCROLL_BACKWARD_INITIAL_TARGET_SELECTOR = '#infinite-scroll-backward-initial-target',

    LANGUAGE_SWITCHER_WRAPPER = 'language-switcher-wrapper',
    LANGUAGE_SWITCHER_WRAPPER_SELECTOR = '#language-switcher-wrapper',

    SEARCH_CLOSE = 'search-close',
    SEARCH_DIALOG = 'search-dialog',
    SEARCH_DIALOG_SELECTOR = '#search-dialog',
    SEARCH_DIALOG_TRIGGER = 'search-dialog-trigger',
    SEARCH_FORM = 'search-form',
    SEARCH_INPUT = 'search-input',
    SEARCH_NO_RESULTS = 'search-no-results',
    SEARCH_RESET = 'search-reset',

    SEARCH_RESULTS_WRAPPER = 'search-results-wrapper',

    SEARCH_RESULT_TEMPLATE = 'search-result-template',
    SEARCH_SUBRESULT_TEMPLATE = 'search-subresult-template',

    SEARCH_RESULT_EXCERPT_TEMPLATE = 'search-result-excerpt-template',
    SEARCH_SUBRESULT_EXCERPT_TEMPLATE = 'search-subresult-excerpt-template',

    SEARCH_SHOW_ALL_RESULTS = 'search-show-all-results',

    TABLE_OF_CONTENTS_CLOSE_BUTTON = 'table-of-contents-close-button',
    TABLE_OF_CONTENTS_TAB_GROUP = 'table-of-contents-tab-group',
    TABLE_OF_CONTENTS_TAB_GROUP_SELECTOR = '#table-of-contents-tab-group',

    THEME_SELECTOR = 'theme-selector',
    THEME_SELECTOR_SELECTOR = '#theme-selector',

    TOGGLE_SHOW_CROSS_REFERENCES = 'toggle-hide-cross-references',
    TOGGLE_SHOW_CROSS_REFERENCES_SELECTOR = '#toggle-hide-cross-references',

    TOGGLE_SHOW_EXTERNAL_REFERENCES = 'toggle-hide-external-references',
    TOGGLE_SHOW_EXTERNAL_REFERENCES_SELECTOR = '#toggle-hide-external-references',

    TOOLBAR = 'toolbar',

    TOOLBAR_MENU = 'toolbar-menu',
    TOOLBAR_MENU_SELECTOR = '#toolbar-menu',

    TOOLBAR_MENU_LANGUAGE_CANCEL = 'toolbar-menu-language-cancel',
    TOOLBAR_MENU_LANGUAGE_CANCEL_SELECTOR = '#toolbar-menu-language-cancel',

    TOOLBAR_NAVIGATION_RETURN_TEXT = 'toolbar-navigation-return-text',
    TOOLBAR_NAVIGATION_TEXT = 'toolbar-navigation-text',

    TOOLBAR_TABLE_OF_CONTENTS = 'toolbar-table-of-contents',
    TOOLBAR_TABLE_OF_CONTENTS_SELECTOR = '#toolbar-table-of-contents',
}

export enum ElementClass {
    CATECHISM_CONTENT_BLOCK = 'catechism-content-block',
    CATECHISM_CONTENT_BLOCK_SELECTOR = '.catechism-content-block',

    DISABLE_ANIMATIONS_FLAG = 'disable-animations',

    HIDDEN = 'hidden',

    INFINITE_SCROLL_BACKWARD_INITIAL_CONTENT = 'infinite-scroll-backward-initial-content',
    INFINITE_SCROLL_BACKWARD_INITIAL_CONTENT_SELECTOR = '.infinite-scroll-backward-initial-content',

    INVISIBLE = 'invisible',

    READING_AREA_INTERSECTABLE = 'reading-area-intersectable',
    READING_AREA_INTERSECTABLE_SELECTOR = '.reading-area-intersectable',

    REFERENCE_COLLECTION_CLOSE_BUTTON = 'reference-collection-close-button',
    REFERENCE_COLLECTION_CLOSE_BUTTON_SELECTOR = '.reference-collection-close-button',

    REFERENCE_COLLECTION_EXPANDED_VIEW = 'reference-collection-expanded-view',
    REFERENCE_COLLECTION_EXPANDED_VIEW_SELECTOR = '.reference-collection-expanded-view',

    REFERENCE_COLLECTION_TOGGLE_BUTTON = 'reference-collection-toggle-button',
    REFERENCE_COLLECTION_TOGGLE_BUTTON_SELECTOR = '.reference-collection-toggle-button',

    SEARCH_RESULT = 'search-result',

    TOOLBAR_TRANSLATE_OFFSCREEN = 'translate-y-full',
}

export enum TableOfContentsSection {
    PROLOGUE = 'prologue',
    PART_1 = 'part-1',
    PART_2 = 'part-2',
    PART_3 = 'part-3',
    PART_4 = 'part-4',
    AUXILIARY = 'auxiliary',
}
