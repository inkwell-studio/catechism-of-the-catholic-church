import { getPathID } from '../catechism/source/types/path-id.ts';
import { ContentID } from './content-id.ts';

export enum Element {
    CONTENT = 'CONTENT',
    TABLE_OF_CONTENTS = 'TABLE_OF_CONTENTS',
    INDEX = 'INDEX',
    GLOSSARY = 'GLOSSARY',
}

export function getElementAndContentID(contentPath: string): { element: Element; contentID: ContentID } | null {
    if ('table-of-contents' === contentPath) {
        return {
            element: Element.TABLE_OF_CONTENTS,
            contentID: null,
        };
    } else {
        const pathID = getPathID(contentPath);
        if (pathID) {
            return {
                element: Element.CONTENT,
                contentID: pathID,
            };
        }
    }

    return null;
}
