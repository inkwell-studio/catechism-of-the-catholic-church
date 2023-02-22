import { Content } from "./content.ts";

export type TableOfContents = {
    readonly prologue: Entry;
    readonly parts: Array<Entry>;
}

export type Entry = {
    readonly contentType: Content;
    readonly title: string;
    readonly url: string;
    readonly firstParagraphNumber: number;
    readonly children: Array<Entry>;
}
