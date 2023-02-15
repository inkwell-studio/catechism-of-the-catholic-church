import { Text } from '../catechism/source/text/text-en.ts';
import { TextKey } from '../catechism/source/types/types.ts';

export function getText(key: TextKey): string {
    return Text[key];
}
