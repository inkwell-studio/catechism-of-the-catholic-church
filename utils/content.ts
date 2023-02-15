import { Catechism } from '../catechism/source/catechism.ts';
import { Part, PathID } from '../catechism/source/types/types.ts';

// TODO: Rename `_path` as `path` when used
export function getContent(_path: PathID): Array<Part> {
    // TODO: Implement
    return Catechism.parts;
}
