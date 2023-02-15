/**
 * TODO: Finish explanation (include note about retrieving the parent node `pathID` value by truncating the child `pathID` value)
 * This is used to identify the nodes
 * TODO: Add a note about `0` being the sentinal value for the "front page"/"book cover" of the Catechism
 */
export type PathID =
    | `${number}`
    | `${number}-${number}`
    | `${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}-${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}-${number}-${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}-${number}-${number}-${number}-${number}-${number}`
    | `${number}-${number}-${number}-${number}-${number}-${number}-${number}-${number}-${number}-${number}`;

/**
 * @returns the `PathID` parsed from the given value, or `null` if no `PathID` can be parsed from the given value
 */
export function getPathID(value: string | unknown): PathID | null {
    if (typeof value === 'string' && value) {
        const validChars = ['/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const sanitizedValue = Array.from(value).filter((char) => validChars.includes(char)).join('');

        if (sanitizedValue.length !== value.length) {
            return null;
        }

        return value.replaceAll('/', '-') as PathID;
    } else {
        return null;
    }
}
