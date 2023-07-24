import { Content } from './content.ts';
import { ContentBase } from './content-base.ts';
import { ContentContainer } from './content-container.ts';
import { Paragraph } from './paragraph.ts';
import { ParagraphGroup } from './paragraph-group.ts';
import { TextContent } from './text-content.ts';
import { TextKey } from './text-key.ts';

export interface Subarticle extends ContentBase, ContentContainer {
    readonly contentType: Content.SUB_ARTICLE;
    readonly subarticleNumber: number;
    readonly title: TextKey;
    readonly openingContent: Array<TextContent>;
    readonly mainContent: Array<ParagraphGroup | Paragraph>;
}
