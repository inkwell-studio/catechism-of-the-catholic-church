import { Content } from './content.ts';
import { ContentContainer } from './content-container.ts';
import { Paragraph } from './paragraph.ts';
import { TextKey } from './text-key.ts';

export interface ChapterSection extends ContentContainer {
    readonly contentType: Content.CHAPTER_SECTION;
    readonly title: TextKey;
    readonly openingContent: Array<never>;
    readonly mainContent: Array<Paragraph>;
    readonly finalContent: Array<never>;
}
