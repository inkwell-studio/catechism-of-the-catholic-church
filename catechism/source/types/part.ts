import { Content } from './content.ts';
import { ContentBase } from './content-base.ts';
import { ContentContainer } from './content-container.ts';
import { ParagraphGroup } from './paragraph-group.ts';
import { Section } from './section.ts';
import { SpecialContent } from './special-content.ts';
import { TextContent } from './text-content.ts';
import { TextKey } from './text-key.ts';

export type Part = ContentBase & ContentContainer & {
    readonly contentType: Content.PART;
    readonly partNumber: number;
    readonly title: TextKey;
    readonly mainContent: Array<Section | SpecialContent>;
    readonly openingContent: Array<ParagraphGroup | TextContent>;
};
