import { Content, ContentBase, Language } from '@catechism-types';
import {
    isArticle,
    isArticleParagraph,
    isChapter,
    isParagraph,
    isParagraphGroup,
    isPart,
    isPrologue,
    isSection,
    isSubarticle,
} from '@utils/content.ts';
import { getLeafPathIdNumber } from '@utils/path-id.ts';

export function getContentTypeTitle(language: Language, content: ContentBase): string | null {
    const contentTitle = contentTypeTitles[language][content.contentType];
    if (contentTitle) {
        const number = getContentNumber(content);
        const numberSuffix = number ? ` ${number}` : '';
        return contentTitle + numberSuffix;
    } else {
        return null;
    }
}

export function getContentNumber(content: ContentBase): number | null {
    // deno-fmt-ignore
    if (isPrologue(content)) {
        return null;

    } else if (isPart(content)) {
        return content.partNumber;

    } else if (isSection(content)) {
        return content.sectionNumber;

    } else if (isChapter(content)) {
        return content.chapterNumber;

    } else if (isArticle(content)) {
        return content.articleNumber;

    } else if (isArticleParagraph(content)) {
        return content.articleParagraphNumber;

    } else if (isSubarticle(content)) {
        return content.subarticleNumber;

    } else if (isParagraphGroup(content)) {
        return content.paragraphGroupNumber;

    } else if (isParagraph(content)) {
        return content.paragraphNumber;

    } else {
        const leafPathIdNumber = getLeafPathIdNumber(content.pathID);
        if ('i' === leafPathIdNumber) {
            return null;
        } else if (isNaN(leafPathIdNumber)) {
            throw new Error(
                `A content number value could not be determined for ${content.contentType} ${content.pathID}`,
            );
        } else {
            return leafPathIdNumber + 1;
        }
    }
}

const contentTypeTitles: Record<Language, Record<Content, string>> = {
    [Language.ENGLISH]: {
        [Content.PROLOGUE]: 'Prologue',
        [Content.PROLOGUE_SECTION]: 'Prologue Section',
        [Content.PART]: 'Part',
        [Content.SECTION]: 'Section',
        [Content.CHAPTER]: 'Chapter',
        [Content.CHAPTER_SECTION]: 'Chapter Section',
        [Content.ARTICLE]: 'Article',
        [Content.ARTICLE_PARAGRAPH]: 'Article Paragraph',
        [Content.SUB_ARTICLE]: 'Subarticle',
        [Content.IN_BRIEF]: 'In Brief',
        [Content.PARAGRAPH_GROUP]: 'Paragraph Group',
        [Content.PARAGRAPH]: 'Paragraph',
        [Content.CREED]: 'Creed',
        [Content.TEN_COMMANDMENTS]: 'Ten Commandments',
        // The following values are intentionally empty
        [Content.GENERIC_CONTENT_CONTAINER]: '',
        [Content.BLOCK_QUOTE]: '',
        [Content.PARAGRAPH_SUB_ITEM_CONTAINER]: '',
        [Content.PARAGRAPH_SUB_ITEM]: '',
        [Content.TEXT_BLOCK]: '',
        [Content.TEXT_HEADING]: '',
        [Content.TEXT_WRAPPER]: '',
        [Content.TEXT]: '',
    },
    [Language.LATIN]: {
        [Content.PROLOGUE]: 'Prooemium',
        [Content.PROLOGUE_SECTION]: 'Prooemium Sectio',
        [Content.PART]: 'Pars',
        [Content.SECTION]: 'Sectio',
        [Content.CHAPTER]: 'Caput',
        [Content.CHAPTER_SECTION]: 'Caput Sectio',
        [Content.ARTICLE]: 'Articulus',
        [Content.ARTICLE_PARAGRAPH]: 'Articulus Paragraphus',
        [Content.SUB_ARTICLE]: 'Subarticulus',
        [Content.IN_BRIEF]: 'Compendium',
        [Content.PARAGRAPH_GROUP]: 'Paragraphus Classis',
        [Content.PARAGRAPH]: 'Paragraphus',
        [Content.CREED]: 'Symbolum',
        [Content.TEN_COMMANDMENTS]: 'Decalogus',
        // The following values are intentionally empty
        [Content.GENERIC_CONTENT_CONTAINER]: '',
        [Content.BLOCK_QUOTE]: '',
        [Content.PARAGRAPH_SUB_ITEM_CONTAINER]: '',
        [Content.PARAGRAPH_SUB_ITEM]: '',
        [Content.TEXT_BLOCK]: '',
        [Content.TEXT_HEADING]: '',
        [Content.TEXT_WRAPPER]: '',
        [Content.TEXT]: '',
    },
    [Language.SPANISH]: {
        [Content.PROLOGUE]: 'Prologo',
        [Content.PROLOGUE_SECTION]: 'Prologo Seccion',
        [Content.PART]: 'Parte',
        [Content.SECTION]: 'Seccion',
        [Content.CHAPTER]: 'Capitulo',
        [Content.CHAPTER_SECTION]: 'Capitulo Seccion',
        [Content.ARTICLE]: 'Articulo',
        [Content.ARTICLE_PARAGRAPH]: 'Articulo Parrafo',
        [Content.SUB_ARTICLE]: 'Subartículo',
        [Content.IN_BRIEF]: 'Resumen',
        [Content.PARAGRAPH_GROUP]: 'Parrafo Grupo',
        [Content.PARAGRAPH]: 'Parrafo',
        [Content.CREED]: 'Credo',
        [Content.TEN_COMMANDMENTS]: 'Diez Mandamientos',
        // The following values are intentionally empty
        [Content.GENERIC_CONTENT_CONTAINER]: '',
        [Content.BLOCK_QUOTE]: '',
        [Content.PARAGRAPH_SUB_ITEM_CONTAINER]: '',
        [Content.PARAGRAPH_SUB_ITEM]: '',
        [Content.TEXT_BLOCK]: '',
        [Content.TEXT_HEADING]: '',
        [Content.TEXT_WRAPPER]: '',
        [Content.TEXT]: '',
    },
} as const;
