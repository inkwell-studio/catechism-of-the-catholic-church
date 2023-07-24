import { Content } from './content.ts';
import { ContentBase } from './content-base.ts';
import { ContentContainer } from './content-container.ts';
import { ParagraphSubitem } from './paragraph-subitem.ts';

export interface ParagraphSubitemContainer extends ContentBase, ContentContainer {
    readonly contentType: Content.PARAGRAPH_SUB_ITEM_CONTAINER;
    readonly ordered: boolean;
    readonly openingContent: Array<never>;
    readonly mainContent: Array<ParagraphSubitem>;
}
