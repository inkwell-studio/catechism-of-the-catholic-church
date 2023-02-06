import { getText } from './text-samples.ts';
import { Content, Text } from '../../source/types/types.ts';

export function buildText(): Text {
    return {
        contentType: Content.TEXT,
        // This will be set later, after all content is created
        pathID: '0',
        // The proper value will be set later, after all content is created
        // deno-lint-ignore no-explicit-any
        content: getText() as any,
        strong: false,
        emphasis: false,
        smallCaps: false,
    };
}
