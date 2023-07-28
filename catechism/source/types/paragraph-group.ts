import { Content } from './content.ts';
import { ContentContainer } from './content-container.ts';
import { NumberOrNumberRange } from './number-or-number-range.ts';
import { Paragraph } from './paragraph.ts';
import { TextKey } from './text-key.ts';

export interface ParagraphGroup extends ContentContainer {
    readonly contentType: Content.PARAGRAPH_GROUP;
    readonly paragraphGroupNumber: number;
    readonly title: TextKey;
    readonly openingContent: Array<never>;
    readonly mainContent: Array<Paragraph>;
    readonly finalContent: Array<never>;
    // Cross-references to Catechism paragraphs
    readonly paragraphReferences: Array<NumberOrNumberRange>;
}
