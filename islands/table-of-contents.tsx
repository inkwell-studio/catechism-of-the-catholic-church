import tableOfContents from '../catechism/artifacts/table-of-contents.json' assert { type: 'json' };

import { Entry, TableOfContentsType } from '../catechism/source/types/types.ts';

export default function TableOfContents() {
    const toc = tableOfContents as TableOfContentsType;

    return (
        <div class='flex flex-col justify-center items-center'>
            <h2>Index</h2>
            <h2>Glossary</h2>
            <h2>Main Content</h2>
            <h3>Prologue</h3>
            {toc.parts.map((part) => EntryElement(part))}
        </div>
    );
}

function EntryElement(entry: Entry) {
    return (
        <div>
            <a href={'/read/' + entry.semanticPath}>{entry.title}</a> ({entry.firstParagraphNumber})
            {Children(entry.children)}
        </div>
    );
}

function Children(children: Array<Entry>) {
    if (children.length === 0) {
        return <></>;
    } else {
        return (
            <ol>
                {children.map((child) => <li>{EntryElement(child)}</li>)}
            </ol>
        );
    }
}
