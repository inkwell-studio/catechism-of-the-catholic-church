import { computed, signal } from '@preact/signals';
import { ContentContainer, Language, NumberOrNumberRange, Paragraph } from '../catechism/source/types/types.ts';

/*
    The state is contained in the `state` constant below.
    This constant is not exposed to any part of the app. Instead,
    values are subscribed to through the `Selectors` constant, and
    the state management logic is notified of the need for updating through the `Actions` constant.
*/

//#region state setup
type State = {
    language: Language;
    showChangelog: boolean;
    content: {
        active: ContentContainer | null;
    };
    crossReference: {
        // A stack of the cross-references selected by the user. The most recent selection is at the end of the array.
        selections: Array<NumberOrNumberRange>;
        // A list of `Paragraph` objects for the cross-references of the latest selected cross-reference
        paragraphCache: Array<Paragraph>;
    };
};

const state = signal<State>({
    language: Language.ENGLISH,
    showChangelog: false,
    content: {
        active: null,
    },
    crossReference: {
        selections: [],
        paragraphCache: [],
    },
});
//#endregion

//#region Actions
// Actions are named as: [noun].[verb]
export const Actions = {
    changelog: {
        open: openChangelog,
        close: closeChangelog,
    },
    language: {
        update: updateLanguage,
    },
    content: {
        updateActive: updateActiveContent,
    },
    crossReference: {
        select: selectCrossReference,
        clearSelection: clearCrossReferenceSelection,
        updateParagraphCache: updateCrossReferenceParagraphCache,
    },
} as const;

//#region state-modifying functions
//#region changelog
function openChangelog(): void {
    state.value = {
        ...state.value,
        showChangelog: true,
    };
}

function closeChangelog(): void {
    state.value = {
        ...state.value,
        showChangelog: false,
    };
}
//#endregion

//#region language
function updateLanguage(language: Language): void {
    state.value = { ...state.value, language };
}
//#endregion

//#region content
function updateActiveContent(content: ContentContainer): void {
    state.value = {
        ...state.value,
        content: {
            ...state.value.content,
            active: content,
        },
    };
}
//#endregion

//#region cross-references
function selectCrossReference(reference: NumberOrNumberRange): void {
    if (state.value.crossReference.selections.at(-1) !== reference) {
        const selections = state.value.crossReference.selections.concat(reference);
        updateCrossReferenceSelections(selections);
    }
}

function clearCrossReferenceSelection(): void {
    updateCrossReferenceSelections([]);
}

function updateCrossReferenceSelections(selections: Array<NumberOrNumberRange>): void {
    state.value = {
        ...state.value,
        crossReference: {
            ...state.value.crossReference,
            selections,
        },
    };
}

function updateCrossReferenceParagraphCache(paragraphs: Array<Paragraph>): void {
    state.value = {
        ...state.value,
        crossReference: {
            ...state.value.crossReference,
            paragraphCache: paragraphs,
        },
    };
}
//#endregion
//#endregion
//#endregion

//#region Selectors
// Selectors are named as: [noun].[verb]
export const Selectors = {
    language: computed(() => state.value.language),
    changelog: {
        show: computed(() => state.value.showChangelog),
    },
    content: {
        active: computed(() => state.value.content.active),
    },
    crossReference: {
        selections: computed(() => state.value.crossReference.selections),
    },
} as const;
//#endregion
