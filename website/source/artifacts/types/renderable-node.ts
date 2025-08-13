import { PathID } from '@catechism-types';

export interface RenderableNode {
    readonly pathID: PathID;
    readonly url: string;
}
