// deno-fmt-ignore-file
import {
    BibleBook,
    CatechismStructure,
    Content,
    OtherSourceEnum,
    PartEnum,
    ReferenceEnum,
    TextKey,
} from './types/types.ts';

export const Catechism: CatechismStructure = {
    prologue:     
            {
                contentType: Content.PROLOGUE,
                pathID: '0',
                title: TextKey.PROLOGUE_01__TITLE,
                mainContent: [
                            
                    {
                        contentType: Content.TEXT_CONTAINER,
                        pathID: '0-0',
                        mainContent: [
                                        
                                {
                                    contentType: Content.TEXT,
                                    pathID: '0-0-0',
                                    content: TextKey.PROLOGUE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                    strong: false,
                                    emphasis: false,
                                    smallCaps: false,
                                },
                        
                                {
                                    contentType: Content.TEXT,
                                    pathID: '0-0-1',
                                    content: TextKey.PROLOGUE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                    strong: false,
                                    emphasis: false,
                                    smallCaps: false,
                                }
                        ],
                        references: [
                            
                        ],
                        paragraphReferences: [
                            
                        ],
                    },
            
                    {
                        contentType: Content.SUB_ARTICLE,
                        pathID: '0-1',
                        subarticleNumber: 1,
                        title: TextKey.PROLOGUE_01__SUB_ARTICLE_01__TITLE,
                        mainContent: [
                                        
                                {
                                    contentType: Content.PARAGRAPH_GROUP,
                                    pathID: '0-1-0',
                                    paragraphGroupNumber: 1,
                                    title: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__TITLE,
                                    mainContent: [
                                                        
                                                {
                                                    contentType: Content.PARAGRAPH,
                                                    pathID: '0-1-0-0',
                                                    paragraphNumber: 1,
                                                    supplementary: true,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-0-0-0',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-0-0-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                            
                                                                        ],
                                                                        paragraphReferences: [
                                                                            5
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.PARAGRAPH,
                                                    pathID: '0-1-0-1',
                                                    paragraphNumber: 2,
                                                    supplementary: true,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-0-1-0',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-1-0-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-1-0-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-1-0-2',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                                                    
                                                                                            {
                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                direct: false,
                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                pointer: `Article VII, 8, 3, 1-2`,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                direct: false,
                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                pointer: `Article VII, 8, 3, 1-2`,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                direct: false,
                                                                                                book: BibleBook.JOHN,
                                                                                                chapter: 3,
                                                                                                verses: 1,
                                                                                            },
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-0-1-1',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-1-1-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-1-1-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                            
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.BLOCK_QUOTE,
                                                    pathID: '0-1-0-2',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-0-2-0',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-0-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-0-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-0-2',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                            
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-0-2-1',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-1-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-1-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-1-2',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                                                    
                                                                                            {
                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                direct: true,
                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                pointer: `Ch. IX, p.4`,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                direct: true,
                                                                                                source: OtherSourceEnum.SOURCE_3,
                                                                                                pointer: `398-401`,
                                                                                            },
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-0-2-2',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-0-2-2-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                                                    
                                                                                            {
                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                direct: true,
                                                                                                book: BibleBook.ACTS_OF_THE_APOSTLES,
                                                                                                chapter: 2,
                                                                                                verses: 1,
                                                                                            },
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                    ],
                                },
                        
                                {
                                    contentType: Content.PARAGRAPH_GROUP,
                                    pathID: '0-1-1',
                                    paragraphGroupNumber: 1,
                                    title: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__TITLE,
                                    mainContent: [
                                                        
                                                {
                                                    contentType: Content.PARAGRAPH,
                                                    pathID: '0-1-1-0',
                                                    paragraphNumber: 3,
                                                    supplementary: false,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-1-0-0',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-0-0-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-0-0-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                            
                                                                        ],
                                                                        paragraphReferences: [
                                                                            12
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-1-0-1',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-0-1-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-0-1-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-0-1-2',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                            
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.PARAGRAPH,
                                                    pathID: '0-1-1-1',
                                                    paragraphNumber: 4,
                                                    supplementary: false,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT_CONTAINER,
                                                                        pathID: '0-1-1-1-0',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-1-0-0',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT,
                                                                                                pathID: '0-1-1-1-0-1',
                                                                                                content: TextKey.PROLOGUE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                strong: false,
                                                                                                emphasis: false,
                                                                                                smallCaps: false,
                                                                                            }
                                                                        ],
                                                                        references: [
                                                                            
                                                                        ],
                                                                        paragraphReferences: [
                                                                            
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                    ],
                                },
                        ],
                    },
                ],
            },
    parts: [
            
            {
                contentType: Content.PART,
                pathID: '1',
                part: PartEnum.PART_ONE,
                title: TextKey.PART_01__TITLE,
                mainContent: [
                            
                    {
                        contentType: Content.SECTION,
                        pathID: '1-0',
                        sectionNumber: 1,
                        title: TextKey.PART_01__SECTION_01__TITLE,
                        mainContent: [
                                        
                                {
                                    contentType: Content.CHAPTER,
                                    pathID: '1-0-0',
                                    chapterNumber: 1,
                                    title: TextKey.PART_01__SECTION_01__CHAPTER_01__TITLE,
                                    mainContent: [
                                                        
                                                {
                                                    contentType: Content.ARTICLE,
                                                    pathID: '1-0-0-0',
                                                    articleNumber: 1,
                                                    title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__TITLE,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.SUB_ARTICLE,
                                                                        pathID: '1-0-0-0-0',
                                                                        subarticleNumber: 1,
                                                                        title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__TITLE,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-0-0-0',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-0-0-0-0',
                                                                                                                            paragraphNumber: 8,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-0-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `Ch. IX, p.4`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-0-0-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-0-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-0-1-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-0-1-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.GENESIS,
                                                                                                                                                                                                chapter: 3,
                                                                                                                                                                                                verses: `3-4`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-0-0-0-1',
                                                                                                                            paragraphNumber: 9,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-0-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.GENESIS,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: 2,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                                                                pointer: `Ch. IX, p.4`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-0-1-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-0-1-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.JOHN,
                                                                                                                                                                                                chapter: 1,
                                                                                                                                                                                                verses: 3,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.ACTS_OF_THE_APOSTLES,
                                                                                                                                                                                                chapter: 1,
                                                                                                                                                                                                verses: 3,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-0-0-1',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-0-0-1-0',
                                                                                                                            paragraphNumber: 10,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-1-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-1-0-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-0-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.JOHN,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: 2,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                22
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-1-0-2',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-0-2-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.EPHESIANS,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: 2,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-0-0-1-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-1-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-1-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-1-1-0-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-0-0-2',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-0-0-2-0',
                                                                                                                            paragraphNumber: 11,
                                                                                                                            supplementary: true,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-2-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-2-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.ACTS_OF_THE_APOSTLES,
                                                                                                                                                                                                chapter: 1,
                                                                                                                                                                                                verses: `2-4`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.ACTS_OF_THE_APOSTLES,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: `2-5`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-0-0-2-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-2-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-2-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-2-1-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.MICAH,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: 2,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-0-0-2-1-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-0-0-2-1-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.IN_BRIEF,
                                                                        pathID: '1-0-0-0-1',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH,
                                                                                                pathID: '1-0-0-0-1-0',
                                                                                                paragraphNumber: 12,
                                                                                                supplementary: false,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-0-1-0-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-0-1-0-0-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-0-1-0-0-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-0-1-0-0-2',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: false,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                            pointer: `742`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: true,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                            pointer: ``,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-0-1-0-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-0-1-0-1-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-0-1-0-1-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-0-1-0-1-2',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                    ],
                                                    openingContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.PARAGRAPH,
                                                                        pathID: '1-0-0-0-0',
                                                                        paragraphNumber: 7,
                                                                        supplementary: false,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-0-0-0',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-0-0-0-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-0-0-0-1',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-0-0-0-2',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                            direct: true,
                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                            pointer: `742`,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                            direct: true,
                                                                                                                            source: OtherSourceEnum.SOURCE_3,
                                                                                                                            pointer: `742`,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                            direct: false,
                                                                                                                            book: BibleBook.MICAH,
                                                                                                                            chapter: 1,
                                                                                                                            verses: `1-4`,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                            direct: true,
                                                                                                                            book: BibleBook.PSALMS,
                                                                                                                            chapter: 3,
                                                                                                                            verses: 3,
                                                                                                                        },
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-0-0-1',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-0-0-1-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                    
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-0-0-2',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-0-0-2-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                            direct: true,
                                                                                                                            book: BibleBook.GENESIS,
                                                                                                                            chapter: 3,
                                                                                                                            verses: `1-2`,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                            direct: true,
                                                                                                                            source: OtherSourceEnum.SOURCE_2,
                                                                                                                            pointer: `Ch. IX, p.4`,
                                                                                                                        },
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    19
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.ARTICLE,
                                                    pathID: '1-0-0-1',
                                                    articleNumber: 2,
                                                    title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__TITLE,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.SUB_ARTICLE,
                                                                        pathID: '1-0-0-1-0',
                                                                        subarticleNumber: 1,
                                                                        title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__TITLE,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-1-0-0',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-1-0-0-0',
                                                                                                                            paragraphNumber: 16,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-1-0-0-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-1-0-0-0-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-0-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-0-1-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-0-1-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `742`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                                                                pointer: ``,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-1-0-0-0-2',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-0-2-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.JOHN,
                                                                                                                                                                                                chapter: 3,
                                                                                                                                                                                                verses: `2-5`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-0-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-0-1-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: false,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                            pointer: ``,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                            direct: true,
                                                                                                                                                            book: BibleBook.EPHESIANS,
                                                                                                                                                            chapter: 1,
                                                                                                                                                            verses: `1-3`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                            direct: true,
                                                                                                                                                            book: BibleBook.GENESIS,
                                                                                                                                                            chapter: 1,
                                                                                                                                                            verses: `3-5`,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-1-0-0-2',
                                                                                                                            paragraphNumber: 17,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-1-0-0-2-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-2-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-2-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                                                                pointer: `Article VII, 8, 3, 1-2`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-1-0-0-2-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-0-2-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-1-0-1',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-1-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-1-0-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-1-0-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: true,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                            pointer: `Article VII, 8, 3, 1-2`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: true,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                            pointer: ``,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-1-0-1-1',
                                                                                                                            paragraphNumber: 18,
                                                                                                                            supplementary: true,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-1-0-1-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-1-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-1-1-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-1-0-1-1-0-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.EPHESIANS,
                                                                                                                                                                                                chapter: 1,
                                                                                                                                                                                                verses: `1-4`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH,
                                                                                                pathID: '1-0-0-1-0-2',
                                                                                                paragraphNumber: 19,
                                                                                                supplementary: false,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-2-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-0-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-0-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-0-2',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-2-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-1-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-1-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: false,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                            pointer: `Ch. IX, p.4`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                            direct: true,
                                                                                                                                                            book: BibleBook.HEBREWS,
                                                                                                                                                            chapter: 1,
                                                                                                                                                            verses: 1,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                            direct: true,
                                                                                                                                                            book: BibleBook.ACTS_OF_THE_APOSTLES,
                                                                                                                                                            chapter: 2,
                                                                                                                                                            verses: `3-6`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: true,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                            pointer: `398-401`,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-2-2',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-2-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-2-2-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: false,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                            pointer: `398-401`,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH,
                                                                                                pathID: '1-0-0-1-0-3',
                                                                                                paragraphNumber: 20,
                                                                                                supplementary: false,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-3-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-3-0-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-3-0-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-3-0-2',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                            direct: false,
                                                                                                                                                            book: BibleBook.JOHN,
                                                                                                                                                            chapter: 1,
                                                                                                                                                            verses: 1,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: true,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                            pointer: `Article VII, 8, 3, 1-2`,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-0-3-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-3-1-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-3-1-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-0-3-1-2',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__SUB_ARTICLE_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.IN_BRIEF,
                                                                        pathID: '1-0-0-1-1',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH,
                                                                                                pathID: '1-0-0-1-1-0',
                                                                                                paragraphNumber: 21,
                                                                                                supplementary: false,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-1-1-0-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-1-1-0-0-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                    ],
                                                    openingContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.PARAGRAPH,
                                                                        pathID: '1-0-0-1-0',
                                                                        paragraphNumber: 13,
                                                                        supplementary: false,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-1-0-0',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-0-0-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                            direct: false,
                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                            pointer: `398-401`,
                                                                                                                        },
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-1-0-1',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-0-1-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                            direct: false,
                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                            pointer: `Ch. IX, p.4`,
                                                                                                                        },
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.PARAGRAPH,
                                                                        pathID: '1-0-0-1-1',
                                                                        paragraphNumber: 14,
                                                                        supplementary: false,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-1-1-0',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-1-0-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-1-0-1',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-1-0-2',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                            direct: false,
                                                                                                                            book: BibleBook.PSALMS,
                                                                                                                            chapter: 2,
                                                                                                                            verses: 1,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                            direct: true,
                                                                                                                            source: OtherSourceEnum.SOURCE_2,
                                                                                                                            pointer: ``,
                                                                                                                        },
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.PARAGRAPH,
                                                                        pathID: '1-0-0-1-2',
                                                                        paragraphNumber: 15,
                                                                        supplementary: true,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-1-2-0',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-2-0-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_03__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-1-2-0-1',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_02__PARAGRAPH_03__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                    
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.ARTICLE,
                                                    pathID: '1-0-0-2',
                                                    articleNumber: 3,
                                                    title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__TITLE,
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.SUB_ARTICLE,
                                                                        pathID: '1-0-0-2-0',
                                                                        subarticleNumber: 1,
                                                                        title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__TITLE,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-2-0-0',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-2-0-0-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-0-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-0-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-0-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-0-0-0-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                                                                pointer: `742`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-2-0-1',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-2-0-1-0',
                                                                                                                            paragraphNumber: 23,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-1-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-1-0-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-1-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-1-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-1-0-2',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-2-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-1-0-2-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_03__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                                                                pointer: `742`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-2-0-2',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-2-0-2-0',
                                                                                                                            paragraphNumber: 24,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-2-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.PSALMS,
                                                                                                                                                                                                chapter: 1,
                                                                                                                                                                                                verses: 1,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `Ch. IX, p.4`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-2-0-2-1',
                                                                                                                            paragraphNumber: 25,
                                                                                                                            supplementary: true,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-2-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                                                                pointer: `Ch. IX, p.4`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                `1-4`
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-2-1-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-1-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-1-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                `4-6`
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-0-2-1-2',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-2-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-2-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_03__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-0-2-1-2-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_01__PARAGRAPH_GROUP_03__PARAGRAPH_02__TEXT_CONTAINER_03__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.SUB_ARTICLE,
                                                                        pathID: '1-0-0-2-1',
                                                                        subarticleNumber: 2,
                                                                        title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__TITLE,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-2-1-0',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-2-1-0-0',
                                                                                                                            paragraphNumber: 26,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-0-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `Ch. IX, p.4`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.PSALMS,
                                                                                                                                                                                                chapter: 1,
                                                                                                                                                                                                verses: 3,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: ``,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-2-1-0-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-0-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-1-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-1-0-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_3,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-0-1-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-1-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-0-1-2',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-1-2-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__BLOCK_QUOTE_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.ACTS_OF_THE_APOSTLES,
                                                                                                                                                                                                chapter: 3,
                                                                                                                                                                                                verses: `3-5`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                                                                pointer: `Article VII, 8, 3, 1-2`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `Article VII, 8, 3, 1-2`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-2-1-0-2',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-0-2-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-0-2-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_01__BLOCK_QUOTE_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.HEBREWS,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: `1-4`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                book: BibleBook.MICAH,
                                                                                                                                                                                                chapter: 3,
                                                                                                                                                                                                verses: `1-2`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-2-1-1',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_02__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-2-1-1-0',
                                                                                                                            paragraphNumber: 27,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-1-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-1-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_02__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-2-1-1-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-1-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-1-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                4
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-1-1-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-1-1-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-1-1-1-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-1-1-1-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_02__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH_GROUP,
                                                                                                pathID: '1-0-0-2-1-2',
                                                                                                paragraphGroupNumber: 1,
                                                                                                title: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__TITLE,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.PARAGRAPH,
                                                                                                                            pathID: '1-0-0-2-1-2-0',
                                                                                                                            paragraphNumber: 28,
                                                                                                                            supplementary: false,
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-2-0-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-0-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-0-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: true,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `Article VII, 8, 3, 1-2`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.OTHER,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                                                                pointer: `398-401`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.MICAH,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: `2-4`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.BLOCK_QUOTE,
                                                                                                                            pathID: '1-0-0-2-1-2-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-2-1-0',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-1-0-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-1-0-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-1-0-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.GENESIS,
                                                                                                                                                                                                chapter: 3,
                                                                                                                                                                                                verses: 1,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.MICAH,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: `1-4`,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                                                                direct: false,
                                                                                                                                                                                                book: BibleBook.EPHESIANS,
                                                                                                                                                                                                chapter: 2,
                                                                                                                                                                                                verses: `1-2`,
                                                                                                                                                                                            },
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                                                            pathID: '1-0-0-2-1-2-1-1',
                                                                                                                                                            mainContent: [
                                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-1-1-0',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-1-1-1',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            },
                                                                                                                                                                                    
                                                                                                                                                                                            {
                                                                                                                                                                                                contentType: Content.TEXT,
                                                                                                                                                                                                pathID: '1-0-0-2-1-2-1-1-2',
                                                                                                                                                                                                content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__SUB_ARTICLE_02__PARAGRAPH_GROUP_03__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                                                                strong: false,
                                                                                                                                                                                                emphasis: false,
                                                                                                                                                                                                smallCaps: false,
                                                                                                                                                                                            }
                                                                                                                                                            ],
                                                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                            paragraphReferences: [
                                                                                                                                                                
                                                                                                                                                            ],
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.IN_BRIEF,
                                                                        pathID: '1-0-0-2-2',
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.PARAGRAPH,
                                                                                                pathID: '1-0-0-2-2-0',
                                                                                                paragraphNumber: 29,
                                                                                                supplementary: false,
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-2-2-0-0',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-2-2-0-0-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-2-2-0-0-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: true,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                            pointer: `Ch. IX, p.4`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: false,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_2,
                                                                                                                                                            pointer: `Ch. IX, p.4`,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.OTHER,
                                                                                                                                                            direct: false,
                                                                                                                                                            source: OtherSourceEnum.SOURCE_1,
                                                                                                                                                            pointer: ``,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            referenceType: ReferenceEnum.BIBLE,
                                                                                                                                                            direct: false,
                                                                                                                                                            book: BibleBook.MICAH,
                                                                                                                                                            chapter: 1,
                                                                                                                                                            verses: 3,
                                                                                                                                                        },
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT_CONTAINER,
                                                                                                                            pathID: '1-0-0-2-2-0-1',
                                                                                                                            mainContent: [
                                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-2-2-0-1-0',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-2-2-0-1-1',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        },
                                                                                                                                                
                                                                                                                                                        {
                                                                                                                                                            contentType: Content.TEXT,
                                                                                                                                                            pathID: '1-0-0-2-2-0-1-2',
                                                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__IN_BRIEF_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                                                                                                            strong: false,
                                                                                                                                                            emphasis: false,
                                                                                                                                                            smallCaps: false,
                                                                                                                                                        }
                                                                                                                            ],
                                                                                                                            references: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                            paragraphReferences: [
                                                                                                                                
                                                                                                                            ],
                                                                                                                        },
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                    ],
                                                    openingContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.PARAGRAPH,
                                                                        pathID: '1-0-0-2-0',
                                                                        paragraphNumber: 22,
                                                                        supplementary: true,
                                                                        mainContent: [
                                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-2-0-0',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-2-0-0-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                    
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                                    
                                                                                            {
                                                                                                contentType: Content.TEXT_CONTAINER,
                                                                                                pathID: '1-0-0-2-0-1',
                                                                                                mainContent: [
                                                                                                                                
                                                                                                                        {
                                                                                                                            contentType: Content.TEXT,
                                                                                                                            pathID: '1-0-0-2-0-1-0',
                                                                                                                            content: TextKey.PART_01__SECTION_01__CHAPTER_01__ARTICLE_03__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                                                                            strong: false,
                                                                                                                            emphasis: false,
                                                                                                                            smallCaps: false,
                                                                                                                        }
                                                                                                ],
                                                                                                references: [
                                                                                                    
                                                                                                ],
                                                                                                paragraphReferences: [
                                                                                                    
                                                                                                ],
                                                                                            },
                                                                        ],
                                                                    },
                                                    ],
                                                },
                                    ],
                                    openingContent: [
                                        
                                    ],
                                },
                        ],
                        openingContent: [
                                        
                                {
                                    contentType: Content.BLOCK_QUOTE,
                                    pathID: '1-0-0',
                                    mainContent: [
                                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-0-0',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-0-0',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-0-1',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-0-2',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                        
                                                    ],
                                                    paragraphReferences: [
                                                        28
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-0-1',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-1-0',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-1-1',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-1-2',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_02__TEXT_03__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                                            
                                                                    {
                                                                        referenceType: ReferenceEnum.OTHER,
                                                                        direct: false,
                                                                        source: OtherSourceEnum.SOURCE_1,
                                                                        pointer: ``,
                                                                    },
                                                    ],
                                                    paragraphReferences: [
                                                        
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-0-2',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-0-2-0',
                                                                        content: TextKey.PART_01__SECTION_01__BLOCK_QUOTE_01__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                                            
                                                                    {
                                                                        referenceType: ReferenceEnum.BIBLE,
                                                                        direct: true,
                                                                        book: BibleBook.HEBREWS,
                                                                        chapter: 2,
                                                                        verses: `3-5`,
                                                                    },
                                                    ],
                                                    paragraphReferences: [
                                                        
                                                    ],
                                                },
                                    ],
                                },
                        
                                {
                                    contentType: Content.PARAGRAPH,
                                    pathID: '1-0-1',
                                    paragraphNumber: 5,
                                    supplementary: false,
                                    mainContent: [
                                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-1-0',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-1-0-0',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-1-0-1',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_01__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                        
                                                    ],
                                                    paragraphReferences: [
                                                        
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-1-1',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-1-1-0',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-1-1-1',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_01__TEXT_CONTAINER_02__TEXT_02__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                        
                                                    ],
                                                    paragraphReferences: [
                                                        
                                                    ],
                                                },
                                    ],
                                },
                        
                                {
                                    contentType: Content.PARAGRAPH,
                                    pathID: '1-0-2',
                                    paragraphNumber: 6,
                                    supplementary: true,
                                    mainContent: [
                                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-2-0',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-0-0',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-0-1',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_02__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-0-2',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_01__TEXT_03__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                        
                                                    ],
                                                    paragraphReferences: [
                                                        24
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-2-1',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-1-0',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_02__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                                            
                                                                    {
                                                                        referenceType: ReferenceEnum.OTHER,
                                                                        direct: false,
                                                                        source: OtherSourceEnum.SOURCE_3,
                                                                        pointer: `742`,
                                                                    },
                                                            
                                                                    {
                                                                        referenceType: ReferenceEnum.OTHER,
                                                                        direct: true,
                                                                        source: OtherSourceEnum.SOURCE_1,
                                                                        pointer: `Ch. IX, p.4`,
                                                                    },
                                                            
                                                                    {
                                                                        referenceType: ReferenceEnum.BIBLE,
                                                                        direct: false,
                                                                        book: BibleBook.JOHN,
                                                                        chapter: 1,
                                                                        verses: `3-4`,
                                                                    },
                                                    ],
                                                    paragraphReferences: [
                                                        13
                                                    ],
                                                },
                                        
                                                {
                                                    contentType: Content.TEXT_CONTAINER,
                                                    pathID: '1-0-2-2',
                                                    mainContent: [
                                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-2-0',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_03__TEXT_01__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-2-1',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_03__TEXT_02__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    },
                                                            
                                                                    {
                                                                        contentType: Content.TEXT,
                                                                        pathID: '1-0-2-2-2',
                                                                        content: TextKey.PART_01__SECTION_01__PARAGRAPH_02__TEXT_CONTAINER_03__TEXT_03__CONTENT,
                                                                        strong: false,
                                                                        emphasis: false,
                                                                        smallCaps: false,
                                                                    }
                                                    ],
                                                    references: [
                                                                            
                                                                    {
                                                                        referenceType: ReferenceEnum.BIBLE,
                                                                        direct: true,
                                                                        book: BibleBook.EPHESIANS,
                                                                        chapter: 1,
                                                                        verses: 3,
                                                                    },
                                                    ],
                                                    paragraphReferences: [
                                                        
                                                    ],
                                                },
                                    ],
                                },
                        ],
                    },
                ],
                openingContent: [
                    
                ],
            }
    ]
};