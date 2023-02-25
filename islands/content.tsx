import { Fragment, JSX } from 'preact';

import { state } from '../state/state.ts';
import { getContent } from '../utils/content.ts';
import { getText } from '../utils/text.ts';
import {
    Article,
    ArticleParagraph,
    BlockQuote,
    Chapter,
    Content as ContentEnum,
    ContentBase,
    InBrief,
    Paragraph,
    ParagraphGroup,
    Part,
    Section,
    Subarticle,
    Text,
    TextContainer,
} from '../catechism/source/types/types.ts';

export default function Content(): JSX.Element {
    // TODO: Fix
    if (state.value.path === '1') {
        return Intro();
    } else {
        const content = getContent(state.value.path);
        return <>{ContentBaseArray(content)}</>;
    }
}

function Intro() {
    return <h1>Catechism of the Catholic Church</h1>;
}

function ContentBase(content: ContentBase): JSX.Element {
    switch (content.contentType) {
        case ContentEnum.PART: {
            return PartContent(content as Part);
        }
        case ContentEnum.ARTICLE: {
            return ArticleContent(content as Article);
        }
        case ContentEnum.ARTICLE_PARAGRAPH: {
            return ArticleParagraphContent(content as ArticleParagraph);
        }
        case ContentEnum.BLOCK_QUOTE: {
            return BlockQuoteContent(content as BlockQuote);
        }
        case ContentEnum.CHAPTER: {
            return ChapterContent(content as Chapter);
        }
        case ContentEnum.IN_BRIEF: {
            return InBriefContent(content as InBrief);
        }
        case ContentEnum.PARAGRAPH: {
            return ParagraphContent(content as Paragraph);
        }
        case ContentEnum.PARAGRAPH_GROUP: {
            return ParagraphGroupContent(content as ParagraphGroup);
        }
        case ContentEnum.SECTION: {
            return SectionContent(content as Section);
        }
        case ContentEnum.SUB_ARTICLE: {
            return SubarticleContent(content as Subarticle);
        }
        case ContentEnum.TEXT_CONTAINER: {
            return TextContainerContent(content as TextContainer);
        }
        default: {
            // TODO: Log a warning
            return <div>Unhandled content: {content.contentType}</div>;
        }
    }
}

function ArticleContent(article: Article) {
    // TODO: Handle opening content
    return (
        <>
            <h4 class='text-3xl'>{getText(article.title)}</h4>
            {ContentBaseArray(article.mainContent)}
        </>
    );
}

function ArticleParagraphContent(articleParagraph: ArticleParagraph) {
    // TODO: Handle opening content
    return (
        <>
            <h5 class='text-2xl'>
                {getText(articleParagraph.title)}
            </h5>
            {ContentBaseArray(articleParagraph.mainContent)}
        </>
    );
}

function BlockQuoteContent(blockQuote: BlockQuote) {
    // TODO: Handle opening content
    return (
        <blockquote class='px-8 mb-4'>
            {TextContainerArray(blockQuote.mainContent)}
        </blockquote>
    );
}

function ChapterContent(chapter: Chapter) {
    // TODO: Handle opening content
    return (
        <>
            <h3 class='text-4xl'>{getText(chapter.title)}</h3>
            {ContentBaseArray(chapter.mainContent)}
        </>
    );
}

function InBriefContent(inBrief: InBrief) {
    return (
        <div class='bg-white bg-opacity-20 border border-red-900/15 border-2 rounded p-3 my-4'>
            <strong class='font-sans text-lg text-purple-900 block mb-1'>In Brief</strong>
            <ol>
                {inBrief.mainContent.map((c) => <li key={c} class='mb-2'>{ContentBase(c)}</li>)}
            </ol>
        </div>
    );
}

function ParagraphContent(paragraph: Paragraph) {
    // TODO: Handle opening content
    return (
        <div class=''>
            <div class='text-sm align-text-bottom font-bold inline mr-1 sm:mr-2 sm:text-lg sm:align-baseline'>
                {paragraph.paragraphNumber}
            </div>
            <div class='inline'>
                {TextContainerArray(paragraph.mainContent)}
            </div>
        </div>
    );
}

function ParagraphGroupContent(paragraphGroup: ParagraphGroup) {
    // TODO: Handle opening content
    return (
        <>
            <h6 class='text-lg'>{getText(paragraphGroup.title)}</h6>
            {ContentBaseArray(paragraphGroup.mainContent)}
        </>
    );
}

function PartContent(part: Part) {
    // TODO: Handle opening content
    return (
        <>
            <h1 class='text-6xl'>{getText(part.title)}</h1>
            {ContentBaseArray(part.mainContent)}
        </>
    );
}

function SectionContent(section: Section) {
    // TODO: Handle opening content
    return (
        <>
            <h2 class='text-5xl'>{getText(section.title)}</h2>
            {ContentBaseArray(section.mainContent)}
        </>
    );
}

function SubarticleContent(subarticle: Subarticle) {
    // TODO: Handle opening content
    return (
        <>
            <h6 class='text-xl'>{getText(subarticle.title)}</h6>
            {ContentBaseArray(subarticle.mainContent)}
        </>
    );
}

function TextContainerArray(array: Array<ContentBase | TextContainer>) {
    return array.map((c, index) => {
        const isTextContainer = ContentEnum.TEXT_CONTAINER === c.contentType;
        if (isTextContainer) {
            const precedingContentWasTextContainer = index > 0 &&
                ContentEnum.TEXT_CONTAINER === array[index - 1].contentType;
            const spacer = precedingContentWasTextContainer ? ' ' : '';

            return <Fragment key={c}>{spacer}{TextContainerContent(c as TextContainer)}</Fragment>;
        } else {
            return <Fragment key={c}>{ContentBase(c)}</Fragment>;
        }
    });
}

function TextContainerContent(textContainer: TextContainer) {
    return (
        <span>
            <span class='absolute right-0 font-sans-caption text-xs text-left pt-1 w-6 sm:w-14 md:w-12 lg:w-20 xl:w-24'>
                {textContainer.paragraphReferences.map((ref) => ref.toString()).join(', ')}
            </span>
            <span>
                {textContainer.mainContent
                    .map((text, index) => {
                        const lastFragment = index === textContainer.mainContent.length - 1;
                        return <Fragment key={text}>{PlainText(text as Text, lastFragment)}</Fragment>;
                    })}
            </span>
        </span>
    );
}

function PlainText(text: Text, lastFragment: boolean) {
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
            <strong class={classText}>
                {getText(text.content)}
                {spacer}
            </strong>
        );
    } else if (text.emphasis) {
        return (
            <em class={classText}>
                {getText(text.content)}
                {spacer}
            </em>
        );
    } else {
        return (
            <span class={classText}>
                {getText(text.content)}
                {spacer}
            </span>
        );
    }
}

function ContentBaseArray<T extends ContentBase>(content: Array<T>) {
    return content.map((c) => <Fragment key={c}>{ContentBase(c)}</Fragment>);
}
