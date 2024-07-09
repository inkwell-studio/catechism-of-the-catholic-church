import { Fragment, JSX } from 'preact';

import CrossReferenceLink from '../(_islands)/cross-reference-link.tsx';
import ReferenceLinks from '../(_islands)/reference-links.tsx';

import { getUrlFragment } from '../../logic/shared/routing.ts';
import { translate } from '../../logic/shared/translation.ts';

import {
    Article,
    ArticleParagraph,
    BlockQuote,
    Chapter,
    Content as ContentEnum,
    ContentBase as ContentBaseType,
    InBrief,
    Language,
    Paragraph,
    ParagraphGroup,
    ParagraphSubitem,
    ParagraphSubitemContainer,
    Part,
    Prologue,
    Section,
    Subarticle,
    Text,
    TextBlock,
    TextHeading,
    TextWrapper,
} from '../../../catechism/source/types/types.ts';
import {
    getAllChildContent,
    getFinalContent,
    getInBrief,
    getMainContent,
    getOpeningContent,
} from '../../../catechism/source/utils/content.ts';

// TODO: Consider all rendering function implementations to be incomplete

//#region top-level component
export default function ContentBase(props: { content: ContentBaseType; language: Language }): JSX.Element {
    const content = props.content;
    const language = props.language;

    switch (content.contentType) {
        case ContentEnum.PART:
            return PartContent(content as Part, language);
        case ContentEnum.ARTICLE:
            return ArticleContent(content as Article, language);
        case ContentEnum.ARTICLE_PARAGRAPH:
            return ArticleParagraphContent(content as ArticleParagraph, language);
        case ContentEnum.BLOCK_QUOTE:
            return BlockQuoteContent(content as BlockQuote, language);
        case ContentEnum.CHAPTER:
            return ChapterContent(content as Chapter, language);
        case ContentEnum.IN_BRIEF:
            return InBriefContent(content as InBrief, language);
        case ContentEnum.PARAGRAPH:
            return ParagraphContent(content as Paragraph, language);
        case ContentEnum.PARAGRAPH_GROUP:
            return ParagraphGroupContent(content as ParagraphGroup, language);
        case ContentEnum.PARAGRAPH_SUB_ITEM:
            return ParagraphSubitemContent(content as ParagraphSubitem, language);
        case ContentEnum.PARAGRAPH_SUB_ITEM_CONTAINER:
            return ParagraphSubitemContainerContent(content as ParagraphSubitemContainer, language);
        case ContentEnum.PROLOGUE:
            return PrologueContent(content as Prologue, language);
        case ContentEnum.SECTION:
            return SectionContent(content as Section, language);
        case ContentEnum.SUB_ARTICLE:
            return SubarticleContent(content as Subarticle, language);
        case ContentEnum.TEXT_BLOCK:
            return TextBlockContent(content as TextBlock, language);
        case ContentEnum.TEXT_HEADING:
            return TextHeadingContent(content as TextHeading);
        case ContentEnum.TEXT_WRAPPER:
            return TextWrapperContent(content as TextWrapper, language);
        default:
            return UnknownContent(content);
    }
}
//#endregion

//#region helper components
function ContentBaseArray(content: Array<ContentBaseType>, language: Language): Array<JSX.Element> {
    return content.map((c) => <ContentBase key={getUniqueKey(c)} content={c} language={language}></ContentBase>);
}

function ArticleContent(article: Article, language: Language): JSX.Element {
    const nonFinalChildContent = [
        ...getOpeningContent(article),
        ...getMainContent(article),
    ];

    const inBrief = getInBrief(article);
    if (inBrief) {
        nonFinalChildContent.push(inBrief);
    }

    const finalContent = getFinalContent(article);
    const finalContentContainer = finalContent.length > 0
        ? <div id={translate('final-content', language)}>{ContentBaseArray(finalContent, language)}</div>
        : <></>;

    return (
        <>
            <h4 id={getUrlFragment(article.semanticPath, false, language).fragment}>
                {article.title}
            </h4>
            {ContentBaseArray(nonFinalChildContent, language)}
            {finalContentContainer}
        </>
    );
}

function ArticleParagraphContent(articleParagraph: ArticleParagraph, language: Language): JSX.Element {
    return (
        <>
            <h5 id={getUrlFragment(articleParagraph.semanticPath, false, language).fragment}>
                {articleParagraph.title}
            </h5>
            {ContentBaseArray(getAllChildContent(articleParagraph), language)}
        </>
    );
}

function BlockQuoteContent(blockQuote: BlockQuote, language: Language): JSX.Element {
    return (
        <blockquote class='px-8 mb-4'>
            {TextWrapperArray(getAllChildContent(blockQuote), language)}
        </blockquote>
    );
}

function ChapterContent(chapter: Chapter, language: Language): JSX.Element {
    return (
        <>
            <h3 id={getUrlFragment(chapter.semanticPath, false, language).fragment}>
                {chapter.title}
            </h3>
            {ContentBaseArray(getAllChildContent(chapter), language)}
        </>
    );
}

function InBriefContent(inBrief: InBrief, language: Language): JSX.Element {
    return (
        <div
            id={getUrlFragment(inBrief.semanticPath, false, language).fragment}
        >
            <strong class='block'>{translate('In Brief', language)}</strong>
            <ol>
                {getAllChildContent(inBrief).map((c) => (
                    <li key={getUniqueKey(c)}>
                        <ContentBase content={c} language={language}></ContentBase>
                    </li>
                ))}
            </ol>
        </div>
    );
}

function ParagraphContent(paragraph: Paragraph, language: Language): JSX.Element {
    return (
        <div id={getUrlFragment(paragraph.semanticPath, false, language).fragment}>
            <div class='inline'>
                {paragraph.paragraphNumber}
            </div>
            <div class='inline'>
                {TextWrapperArray(getAllChildContent(paragraph), language)}
            </div>
        </div>
    );
}

function ParagraphGroupContent(paragraphGroup: ParagraphGroup, language: Language): JSX.Element {
    return (
        <>
            <h6 id={getUrlFragment(paragraphGroup.semanticPath, false, language).fragment}>
                {paragraphGroup.title}
            </h6>
            {ContentBaseArray(getAllChildContent(paragraphGroup), language)}
        </>
    );
}

function ParagraphSubitemContainerContent(
    paragraphSubitemContainer: ParagraphSubitemContainer,
    language: Language,
): JSX.Element {
    return (
        <ol>
            {paragraphSubitemContainer.mainContent
                .map((subitem) => {
                    return (
                        <Fragment key={getUniqueKey(subitem)}>{ParagraphSubitemContent(subitem, language)}</Fragment>
                    );
                })}
        </ol>
    );
}

function ParagraphSubitemContent(paragraphSubitem: ParagraphSubitem, language: Language): JSX.Element {
    return <li>{TextWrapperArray(getAllChildContent(paragraphSubitem), language)}</li>;
}

function PartContent(part: Part, language: Language): JSX.Element {
    return (
        <>
            <h1>{part.title}</h1>
            {ContentBaseArray(getAllChildContent(part), language)}
        </>
    );
}

function PrologueContent(prologue: Prologue, language: Language): JSX.Element {
    return (
        <>
            <h1>{prologue.title}</h1>
            {ContentBaseArray(getAllChildContent(prologue), language)}
        </>
    );
}

function SectionContent(section: Section, language: Language): JSX.Element {
    return (
        <>
            <h2 id={getUrlFragment(section.semanticPath, false, language).fragment}>
                {section.title}
            </h2>
            {ContentBaseArray(getAllChildContent(section), language)}
        </>
    );
}

function SubarticleContent(subarticle: Subarticle, language: Language): JSX.Element {
    return (
        <>
            <h6 id={getUrlFragment(subarticle.semanticPath, false, language).fragment}>
                {subarticle.title}
            </h6>
            {ContentBaseArray(getAllChildContent(subarticle), language)}
        </>
    );
}

function TextBlockContent(textBlock: TextBlock, language: Language): JSX.Element {
    return (
        <div>
            {TextWrapperArray(getAllChildContent(textBlock), language)}
        </div>
    );
}

function TextHeadingContent(textHeading: TextHeading): JSX.Element {
    return <>textHeading.content</>;
}

function TextWrapperArray(array: Array<ContentBaseType | TextWrapper>, language: Language): Array<JSX.Element> {
    return array.map((c, index) => {
        const isTextWrapper = ContentEnum.TEXT_WRAPPER === c.contentType;
        if (isTextWrapper) {
            const precedingContentWasTextWrapper = index > 0 &&
                ContentEnum.TEXT_WRAPPER === array[index - 1].contentType;
            const spacer = precedingContentWasTextWrapper ? ' ' : '';

            return <Fragment key={getUniqueKey(c)}>{spacer}{TextWrapperContent(c as TextWrapper, language)}</Fragment>;
        } else {
            return <ContentBase key={getUniqueKey(c)} content={c} language={language}></ContentBase>;
        }
    });
}

function TextWrapperContent(textWrapper: TextWrapper, language: Language): JSX.Element {
    const textContent = textWrapper.mainContent
        .map((text, index) => {
            const lastFragment = index === textWrapper.mainContent.length - 1;
            return (
                <Fragment key={getUniqueKey(text)}>
                    {PlainText(text as Text, lastFragment)}
                </Fragment>
            );
        });

    return (
        <span>
            <span class='absolute right-0 text-left'>
                {textWrapper.paragraphReferences
                    .map((reference, index, allReferences) => {
                        const separator = index < allReferences.length - 1 ? ', ' : '';

                        return (
                            <Fragment key={reference}>
                                <CrossReferenceLink reference={reference} />
                                {separator}
                            </Fragment>
                        );
                    })}
            </span>
            <span>
                {textContent}
                <ReferenceLinks language={language} referenceCollection={textWrapper.referenceCollection} />
            </span>
        </span>
    );
}

function PlainText(text: Text, lastFragment: boolean): JSX.Element {
    const classes = [];
    if (text.strong) {
        classes.push('font-bold');
    }
    if (text.emphasis) {
        classes.push('italic');
    }
    if (text.smallCaps) {
        // TODO: Handle
    }

    const classText = classes.join(' ');
    const spacer = lastFragment ? '' : ' ';

    if (text.strong) {
        return (
            <>
                <strong class={classText}>
                    {text.content}
                </strong>
                {spacer}
            </>
        );
    } else if (text.emphasis) {
        return (
            <>
                <em class={classText}>
                    {text.content}
                </em>
                {spacer}
            </>
        );
    } else if (classText) {
        return (
            <>
                <span class={classText}>
                    {text.content}
                </span>
                {spacer}
            </>
        );
    } else {
        return (
            <>
                <span>
                    {text.content}
                </span>
                {spacer}
            </>
        );
    }
}

function UnknownContent(content: ContentBaseType): JSX.Element {
    console.warn(`Unknown content type encountered: ${content.contentType}`);
    return <div>Unhandled content: {content.contentType}</div>;
}
//#endregion

//#region helper functions
function getUniqueKey(content: ContentBaseType): string {
    return content.pathID;
}
//#endregion
