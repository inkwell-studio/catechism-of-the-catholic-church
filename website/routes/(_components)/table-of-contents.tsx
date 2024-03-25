import { Fragment, JSX } from 'preact';

import { translate } from '../../logic/shared/translation.ts';
import { Content, Language, TableOfContentsEntry, TableOfContentsType } from '../../../catechism/source/types/types.ts';

export function TableOfContents(props: { tableOfContents: TableOfContentsType; language: Language }) {
    const toc = props.tableOfContents;

    return (
        <main f-client-nav>
            {Title(props.language)}
            <div class='flex flex-col gap-12 my-12'>
                <h2 class='text-3xl text-center'>
                    {translate('Table of Contents', props.language)}
                </h2>
                <div class='w-48 mx-auto border rounded'></div>
                <nav class='mx-auto'>
                    <ol class='space-y-6'>
                        <li>
                            {EntryContainer(props.language, toc.prologue)}
                        </li>

                        {toc.parts.map((part) => (
                            <li key={part.pathID}>
                                {EntryContainer(props.language, part)}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </main>
    );
}

function Title(language: Language): JSX.Element {
    let line1 = <>Catechism of&nbsp;the</>;
    let line2 = <>Catholic Church</>;

    switch (language) {
        case Language.ENGLISH:
            line1 = <>Catechism of&nbsp;the</>;
            line2 = <>Catholic Church</>;
            break;
        case Language.LATIN:
            line1 = <>Catechismus</>;
            line2 = <>Catholicae Ecclesiae</>;
            break;
        case Language.SPANISH:
            line1 = <>Catecismo de&nbsp;la</>;
            line2 = <>Iglesia Católica</>;
            break;
    }

    return (
        <h1 class='font-serif font-bold text-5xl text-center mt-16'>
            <span class='inline-block'>{line1}</span>
            <br />
            <span class='inline-block mt-1 md:mt-2 lg:mt-3'>{line2}</span>
        </h1>
    );
}

function EntryContainer(language: Language, entry: TableOfContentsEntry): JSX.Element {
    return (
        <div>
            <a href={entry.url} class='inline-block'>
                <h3 class='text-3xl'>{entry.title}</h3>
            </a>
            {ParagraphNumbers(language, entry, null, 'opacity-40 font-sans text-xl ml-2')}
            <ol class='border rounded py-4 px-10 mt-2'>
                {entry.children.map((child) => ChildEntry(language, child, entry, 0))}
            </ol>
        </div>
    );
}

function ChildEntry(
    language: Language,
    entry: TableOfContentsEntry,
    parent: TableOfContentsEntry,
    indentationLevel: number,
): JSX.Element {
    const classes = entry.children.length === 0 ? 'list-disc list-inside' : '';

    return (
        <li class={classes + ' ml-4'}>
            <a href={entry.url} class={titleClasses(entry.contentType)}>
                {entry.title}
            </a>
            {ParagraphNumbers(language, entry, parent, 'opacity-40 font-sans text-xs ml-1')}
            {Children(language, entry.children, entry, indentationLevel + 1)}
        </li>
    );
}

function ParagraphNumbers(
    language: Language,
    entry: TableOfContentsEntry,
    parentEntry: TableOfContentsEntry | null,
    classes: string,
): JSX.Element {
    return shouldRenderParagraphNumbers(language, entry, parentEntry)
        ? <span class={classes}>{entry.firstParagraphNumber + '–' + entry.lastParagraphNumber}</span>
        : <></>;
}

function titleClasses(contentType: Content): string {
    const common = ' font-sans ';

    switch (contentType) {
        case Content.SECTION:
            return common + 'text-2xl font-bold';
        case Content.CHAPTER:
            return common + 'text-lg font-semibold';
        case Content.ARTICLE:
            return common + 'font-bold uppercase';
        case Content.ARTICLE_PARAGRAPH:
            return common + 'text-sm font-bold';
        case Content.SUB_ARTICLE:
            return common + '';
        case Content.PARAGRAPH_GROUP:
            return common + '';
        case Content.TEXT:
            return common + '';
        case Content.TEXT_HEADING:
            return common + '';
        default:
            return common + '';
    }
}

function Children(
    language: Language,
    children: Array<TableOfContentsEntry>,
    parent: TableOfContentsEntry,
    indentationLevel: number,
): JSX.Element {
    if (children.length === 0) {
        return <></>;
    } else {
        return (
            <ol>
                {children.map((child) => (
                    <Fragment key={child.pathID}>{ChildEntry(language, child, parent, indentationLevel)}</Fragment>
                ))}
            </ol>
        );
    }
}

/**
 * @returns `true` if the children of `parentEntry` should have their paragraph numbers rendered
 */
function shouldRenderParagraphNumbers(
    language: Language,
    entry: TableOfContentsEntry,
    parentEntry: TableOfContentsEntry | null = null,
): boolean {
    return null === parentEntry ||
        entry.semanticPath.includes(translate('final-content', language)) ||
        Content.PROLOGUE === parentEntry.contentType ||
        Content.PART === parentEntry.contentType ||
        Content.SECTION === parentEntry.contentType ||
        Content.CHAPTER === parentEntry.contentType ||
        Content.ARTICLE_PARAGRAPH === entry.contentType ||
        Content.SUB_ARTICLE === entry.contentType ||
        Content.IN_BRIEF === entry.contentType;
}
