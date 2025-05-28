import { Content } from './content.ts';
import { ContentContainer } from './content-container.ts';
import { PrologueSection } from './prologue-section.ts';
import { TextContent } from './text-content.ts';

export interface Prologue extends ContentContainer {
    readonly contentType: Content.PROLOGUE;
    readonly title: string;
    readonly openingContent: Array<TextContent>;
    readonly mainContent: Array<PrologueSection>;
    readonly finalContent: Array<never>;
}
