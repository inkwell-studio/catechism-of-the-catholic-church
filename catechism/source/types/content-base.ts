import { Content } from './content.ts';
import { NaturalLanguagePath } from './natural-language-path.ts';
import { PathID } from './path-id.ts';
import { SemanticPath } from './semantic-path.ts';

export interface ContentBase {
    readonly contentType: Content;
    readonly pathID: PathID;
    readonly semanticPath: SemanticPath;
    // This is a human-readable list of ancestors, from the top-down. It is not meant
    // to include entries for "low-level" content (i.e. anything beneath a `paragraph`).
    readonly naturalLanguagePath: NaturalLanguagePath;
    // This denotes the placement of the item within the Catechism according to the human-readable order
    // of content (i.e. when all items are flattened into a single list via a depth-first traversal).
    // The value must be greater than 0.
    readonly rank: number;
}
