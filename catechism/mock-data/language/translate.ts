import { setLanguage } from './language-state.ts';

import { setNaturalLanguagePaths, setSemanticPaths } from '../builders/catechism/catechism.ts';
import { getTitleText } from '../builders/catechism/general.ts';
import { getText } from '../builders/catechism/text-samples.ts';

import {
    Article,
    ArticleParagraph,
    CatechismStructure,
    Chapter,
    ChapterSection,
    Content,
    ContentBase,
    ContentContainer,
    InBriefContainer,
    Language,
    Mutable,
    Paragraph,
    ParagraphGroup,
    Part,
    Prologue,
    PrologueSection,
    Section,
    Subarticle,
    Text,
} from '@catechism-types';
import {
    getAllContent,
    isArticle as isArticleOriginal,
    isArticleParagraph as isArticleParagraphOriginal,
    isBlockQuote,
    isChapter as isChapterOriginal,
    isChapterSection as isChapterSectionOriginal,
    isContentContainer as isContentContainerOriginal,
    isInBriefContainer as isInBriefContainerOriginal,
    isParagraph,
    isParagraphGroup as isParagraphGroupOriginal,
    isPart as isPartOriginal,
    isPrologue as isPrologueOriginal,
    isPrologueSection as isPrologueSectionOriginal,
    isSection as isSectionOriginal,
    isSubarticle as isSubarticleOriginal,
    isText as isTextOriginal,
    isTextBlock,
    isTextWrapper,
} from '@utils/content.ts';

export function translateCatechism(catechism: Mutable<CatechismStructure>, language: Language): CatechismStructure {
    catechism = structuredClone(catechism);

    setLanguage(language);

    catechism.language = language;
    catechism = setSemanticPaths(catechism);
    catechism = setNaturalLanguagePaths(catechism);

    getAllContent(catechism).forEach((c: Mutable<ContentContainer>) => {
        c = translateContentBase(c) as Mutable<ContentContainer>;

        c.openingContent = translateHelper(c.openingContent);
        c.mainContent = translateHelper(c.mainContent);
        c.finalContent = translateHelper(c.finalContent);
    });

    return catechism;
}

function translateHelper(content: Array<ContentBase>): Array<ContentBase> {
    content.forEach((c) => {
        c = translateContentBase(c);

        if (isContentContainer(c)) {
            c.openingContent = translateHelper(c.openingContent);
            c.mainContent = translateHelper(c.mainContent);
            c.finalContent = translateHelper(c.finalContent);

            if (isInBriefContainer(c) && c.inBrief) {
                c.inBrief.mainContent = translateHelper(c.inBrief.mainContent) as Array<Paragraph>;
            }
        }
    });

    return content;
}

function translateContentBase(c: Mutable<ContentBase>): ContentBase {
    // deno-fmt-ignore
    if (isPrologue(c)) {
        c.title = getTitleText(Content.PROLOGUE, 1);

    } else if (isPrologueSection(c)) {
        c.title = getTitleText(Content.PROLOGUE_SECTION, c.prologueSectionNumber)

    } else if (isPart(c)) {
        c.title = getTitleText(Content.PART, c.partNumber)

    } else if (isSection(c)) {
        c.title = getTitleText(Content.SECTION, c.sectionNumber)

    } else if (isChapter(c)) {
        c.title = getTitleText(Content.CHAPTER, c.chapterNumber)

    } else if (isChapterSection(c)) {
        c.title = getTitleText(Content.CHAPTER_SECTION, 0)

    } else if (isArticle(c)) {
        c.title = getTitleText(Content.ARTICLE, c.articleNumber)

    } else if (isArticleParagraph(c)) {
        c.title = getTitleText(Content.ARTICLE_PARAGRAPH, c.articleParagraphNumber)

    } else if (isSubarticle(c)) {
        c.title = getTitleText(Content.SUB_ARTICLE, c.subarticleNumber)

    } else if (isParagraphGroup(c)) {
        c.title = getTitleText(Content.PARAGRAPH_GROUP, c.paragraphGroupNumber)

    } else if (isText(c)) {
        c.content = getText();

    } else if (!isBlockQuote(c) && !isParagraph(c) && !isTextBlock(c) && !isTextWrapper(c)) {
        console.warn(`Unexpected content type encountered and not translated: ${c.contentType}`)
    }

    return c;
}

//#region Type guards
function isInBriefContainer(c: ContentBase): c is Mutable<InBriefContainer> {
    return isInBriefContainerOriginal(c);
}

function isPrologue(c: ContentBase): c is Mutable<Prologue> {
    return isPrologueOriginal(c);
}

function isPrologueSection(c: ContentBase): c is Mutable<PrologueSection> {
    return isPrologueSectionOriginal(c);
}

function isPart(c: ContentBase): c is Mutable<Part> {
    return isPartOriginal(c);
}

function isSection(c: ContentBase): c is Mutable<Section> {
    return isSectionOriginal(c);
}

function isChapter(c: ContentBase): c is Mutable<Chapter> {
    return isChapterOriginal(c);
}

function isChapterSection(c: ContentBase): c is Mutable<ChapterSection> {
    return isChapterSectionOriginal(c);
}

function isContentContainer(c: ContentBase): c is Mutable<ContentContainer> {
    return isContentContainerOriginal(c);
}

function isArticle(c: ContentBase): c is Mutable<Article> {
    return isArticleOriginal(c);
}

function isArticleParagraph(c: ContentBase): c is Mutable<ArticleParagraph> {
    return isArticleParagraphOriginal(c);
}

function isSubarticle(c: ContentBase): c is Mutable<Subarticle> {
    return isSubarticleOriginal(c);
}

function isParagraphGroup(c: ContentBase): c is Mutable<ParagraphGroup> {
    return isParagraphGroupOriginal(c);
}

function isText(c: ContentBase): c is Mutable<Text> {
    return isTextOriginal(c);
}

//#endregion
