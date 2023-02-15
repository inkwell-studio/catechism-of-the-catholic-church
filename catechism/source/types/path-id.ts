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
export function getPathID(value: string): PathID | null {
    // TODO: Add tests
    // TODO: Implement
    return null;
}
