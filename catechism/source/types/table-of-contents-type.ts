import { Content } from './content.ts';
import { SemanticPath } from './semantic-path.ts';

export type TableOfContentsType = {
    readonly prologue: Entry;
    readonly parts: Array<Entry>;
};

export type Entry = {
    readonly contentType: Content;
    readonly title: string;
    readonly semanticPath: SemanticPath;
    readonly firstParagraphNumber: number;
    readonly children: Array<Entry>;
};
