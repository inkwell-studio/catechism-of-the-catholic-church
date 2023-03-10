import { Content } from './content.ts';
import { ContentBase } from './content-base.ts';
import { TextKey } from './text-key.ts';

export type Text = ContentBase & {
    readonly contentType: Content.TEXT;
    readonly content: TextKey;
    readonly strong: boolean;
    readonly emphasis: boolean;
    readonly smallCaps: boolean;
};
