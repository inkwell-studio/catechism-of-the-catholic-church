export const Limits = {
    article: {
        // The number of Article > ArticleParagraphs
        articleParagraph: { min: 3, max: 3 },
        paragraphGroup: { min: 2, max: 3 },
        subarticle: { min: 2, max: 3 },
        textContent: { min: 1, max: 3 },
    },
    articleParagraph: {
        // The number of ArticleParagraph > Subarticles
        subarticle: { min: 2, max: 3 },
    },
    bibleReference: {
        chapter: { min: 1, max: 3 },
        verses: { min: 1, max: 3 },
        verseRangeSize: { min: 1, max: 3 },
    },
    blockQuote: {
        text: { min: 1, max: 3 },
    },
    chapter: {
        article: { min: 1, max: 3 },
        openingContent: {
            subarticle: { min: 1, max: 3 },
            textContent: { min: 1, max: 3 },
        },
    },
    inBrief: {
        paragraph: { min: 3, max: 3 },
    },
    paragraph: {
        crossReference: {
            // The number of cross references to build when building multiple
            count: { min: 2, max: 3 },
            // The size of the verse range to build to when building a range-type cross reference (e.g. §1147-1149)
            range: { min: 2, max: 3 },
        },
        textContainers: { min: 1, max: 3 },
    },
    paragraphGroup: {
        text: { min: 1, max: 3 },
    },
    part: {
        openingContent: { min: 1, max: 3 },
        multipleSections: { min: 2, max: 3 },
    },
    prologue: {
        text: { min: 3, max: 3 },
        subarticles: { min: 3, max: 3 },
    },
    section: {
        multipleChapters: { min: 2, max: 3 },
        openingContent: { min: 1, max: 3 },
    },
    subarticle: {
        contentItems: { min: 2, max: 3 },
        textContent: { min: 1, max: 3 },
    },
    textContainer: {
        parts: { min: 1, max: 3 },
    },
} as const;

export const Probability = {
    article: {
        // The probability that an Article contains solely ArticleParagraphs
        useArticleParagraphs: 0.20,
        // The probability that an Article contains any Subarticles, given that it is already designated to do so
        createSubarticles: 0.75,
    },
    crossReference: {
        // The probability of creating a Paragraph cross reference from a Text object
        create: 0.15,
        // The probability that multiple cross references will be created instead of a single one
        multiple: 0.20,
        // The probability that a cross reference will reference a range paragraphs instead of a single one
        range: 0.15,
    },
    paragraph: {
        // The probability that a Paragraph will be designated as "supplementary"
        supplementary: 0.20,
    },
    part: {
        hasOpeningContent: 0.3,
        multipleSections: 0.75,
    },
    references: {
        // The probability that a list of References will contain the following number of references
        count: {
            one: 0.36,
            two: 0.20,
            three: 0.10,
            four: 0.03,
        },
    },
    section: {
        multipleChapters: 0.75,
        hasOpeningText: 0.5,
    },
    subarticle: {
        // The probability that a content item will be a ParagraphGroup
        paragraphGroup: 0.75,
    },
    textContent: {
        // The probabilities that desired TextContent is either a Text object or BlockQuote object instead of a Paragraph object
        text: 0.10,
        blockQuote: 0.25,
    },
} as const;
