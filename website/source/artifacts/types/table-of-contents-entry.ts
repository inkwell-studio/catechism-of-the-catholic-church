import { Content, ContentTitleData, PathID, SemanticPath } from '@catechism-types';

export interface TableOfContentsEntry {
    readonly contentType: Content;
    readonly titleData: ContentTitleData;
    readonly pathID: PathID;
    readonly semanticPath: SemanticPath;
    readonly url: string;
    readonly firstParagraphNumber: number;
    readonly lastParagraphNumber: number;
    readonly children: Array<TableOfContentsEntry>;
}
