import { CatechismStructure } from '@catechism-types';

import { getContentForRendering } from '@logic/rendering.ts';

import { PathIdContentMap, SemanticPathPathIdMap } from '../types/types.ts';

export function build(renderablePathMap: SemanticPathPathIdMap, catechism: CatechismStructure): PathIdContentMap {
    const contentMap: PathIdContentMap = {};

    const pathIDs = Object.values(renderablePathMap);
    for (const originalPathID of pathIDs) {
        const content = getContentForRendering(originalPathID, catechism);

        if (!contentMap[originalPathID]) {
            contentMap[originalPathID] = content;
        }
    }

    return contentMap;
}
