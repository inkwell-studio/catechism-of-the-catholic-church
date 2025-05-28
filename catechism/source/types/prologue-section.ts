import { Content } from './content.ts';
import { ContentContainer } from './content-container.ts';
import { Paragraph } from './paragraph.ts';

export interface PrologueSection extends ContentContainer {
    readonly contentType: Content.PROLOGUE_SECTION;
    readonly title: string;
    readonly prologueSectionNumber: number;
    readonly openingContent: Array<never>;
    readonly mainContent: Array<Paragraph>;
    readonly finalContent: Array<never>;
}
