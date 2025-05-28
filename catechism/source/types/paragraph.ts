import { Content } from './content.ts';
import { ContentContainer } from './content-container.ts';
import { ParagraphSubitemContainer } from './paragraph-subitem-container.ts';
import { TextContent } from './text-content.ts';
import { TextHeading } from './text-heading.ts';

export interface Paragraph extends ContentContainer {
    readonly contentType: Content.PARAGRAPH;
    readonly paragraphNumber: number;
    readonly openingContent: Array<never>;
    readonly mainContent: Array<ParagraphSubitemContainer | TextHeading | TextContent>;
    readonly finalContent: Array<never>;
}
