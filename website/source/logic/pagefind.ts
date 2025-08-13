// No official Pagefind typings are available, so these were determined experientially to aid development.
// The official documention: https://pagefind.app/docs/api/

export interface Pagefind {
    init: () => void;
    destroy: () => void;
    search: (query: string, options?: PagefindSearchOptions) => Promise<PagefindSearchOutcome>;
    debouncedSearch: (query: string, options?: PagefindSearchOptions, timeout?: number) => Promise<PagefindSearchOutcome>;
    filters: () => unknown;
    mergeIndex: () => unknown;
    options: () => unknown;
    preload: () => unknown;
}

export interface PagefindSearchOptions {
    filters: object;
    sort: object;
}

export interface PagefindSearchOutcome {
    filters: object;
    results: Array<PagefindSearchResult>;
    timings: Array<{
        preload: number;
        search: number;
        total: number;
    }>;
    totalFilters: object;
    unfilteredResultCount: number;
}

export interface PagefindSearchResult {
    id: string;
    score: number;
    words: Array<number>;
    data: () => Promise<PagefindSearchResultData>;
}

export interface PagefindSearchResultData {
    url: string;

    // This is encoded HTML, as may safely be used as `innerHTML`
    excerpt: string;

    // This is raw data, and isn't safe to use as `innerHTML`
    content: string;

    // This is raw data, and isn't safe to use as `innerHTML`
    meta: {
        title: string;
        image?: string;
    };

    sub_results: Array<PagefindSearchResultDataSubresult>;

    filters: object;
    raw_content: string;
    raw_url: string;
    word_count: number;

    anchors: Array<PagefindSearchResultDataAnchor>;

    locations: Array<number>;
    weighted_locations: Array<{
        weight: number;
        balanced_score: number;
        location: number;
    }>;
}

export type PagefindSearchResultDataSubresult =
    & Pick<
        PagefindSearchResultData,
        'excerpt' | 'url' | 'locations' | 'weighted_locations'
    >
    & {
        title: string;
        anchor: PagefindSearchResultDataAnchor;
    };

export interface PagefindSearchResultDataAnchor {
    element: string;
    id: string;
    text: string;
    location: number;
}
