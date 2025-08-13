import { PathID } from '@catechism-types';

import { RenderableNode } from './renderable-node.ts';

export type RenderableNodesForNavigation = {
    here: RenderableNode;
    next: RenderableNode | null;
    previous: RenderableNode | null;
};

export type RenderableNodeMap = Record<PathID, RenderableNodesForNavigation>;
