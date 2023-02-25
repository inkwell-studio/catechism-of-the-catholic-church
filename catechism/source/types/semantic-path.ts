import { Content } from './content.ts';

export type SemanticPath =
    | `${string}`
    | `${string}/${string}`
    | `${string}/${string}/${string}`
    | `${string}/${string}/${string}/${string}`
    | `${string}/${string}/${string}/${string}/${string}`
    | `${string}/${string}/${string}/${string}/${string}/${string}`
    | `${string}/${string}/${string}/${string}/${string}/${string}/${string}`;

export type SemanticPathSource = { content: Content; number: number | null };

export function buildSemanticPath(child: SemanticPathSource, ancestors: Array<SemanticPathSource>): SemanticPath {
    return [child, ...ancestors]
        .reverse()
        .map((segment) => getSegmentString(segment))
        .join('/');
}

function getSegmentString(segment: SemanticPathSource): string {
    return segment.number !== null ? contentMap[segment.content] + `-${segment.number}` : contentMap[segment.content];
}

const contentMap = {
    [Content.PROLOGUE]: 'prologue',
    [Content.PART]: 'part',
    [Content.SECTION]: 'section',
    [Content.CHAPTER]: 'chapter',
    [Content.ARTICLE]: 'article',
    [Content.ARTICLE_PARAGRAPH]: 'article-paragraph',
    [Content.SUB_ARTICLE]: 'subarticle',
    [Content.IN_BRIEF]: 'in-brief',
    [Content.PARAGRAPH_GROUP]: 'paragraph-group',
    [Content.BLOCK_QUOTE]: 'block-quote',
    [Content.PARAGRAPH]: 'paragraph',
    [Content.TEXT_CONTAINER]: 'text-container',
    [Content.TEXT]: 'text',
    [Content.SPECIAL_1]: 'special-1',
    [Content.SPECIAL_2]: 'special-2',
    [Content.SPECIAL_3]: 'special-3',
} as const;
