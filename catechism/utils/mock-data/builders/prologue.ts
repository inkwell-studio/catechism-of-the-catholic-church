import { PathID } from '../../../source/types/path-id.ts';
import { buildSubarticle } from './subarticle.ts';
import { buildTextContainer } from './text-container.ts';

import { getTitleText } from './general.ts';
import { intArrayOfRandomLength } from './utils.ts';

import { Limits } from '../config.ts';
import { Content, Prologue, Subarticle, TextContent } from '../../../source/types/types.ts';
import { TextKey } from '../../../source/types/text-key.ts';

export function buildPrologue(pathID: PathID): Prologue {
    return {
        contentType: Content.PROLOGUE,
        pathID,
        title: getTitleText(Content.PROLOGUE, 1) as TextKey,
        mainContent: buildPrologueContent(),
    };
}

function buildPrologueContent(): Array<Subarticle | TextContent> {
    const texts = intArrayOfRandomLength(Limits.prologue.text).map(() => buildTextContainer());
    const subarticles = intArrayOfRandomLength(Limits.prologue.subarticles).map((i) => buildSubarticle(i));

    return [
        ...texts,
        ...subarticles,
    ];
}
