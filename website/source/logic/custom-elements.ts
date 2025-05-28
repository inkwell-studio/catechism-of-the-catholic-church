export function defineElement(elementName: string, elementClass: CustomElementConstructor): void {
    const isNewElement = !customElements.get(elementName);
    if (isNewElement) {
        customElements.define(elementName, elementClass);
    }
}

/**
 * @returns `Promise<true>` if all Shoelace components were successfully initialized, and `Promise<false>` otherwise
 */
export async function shoelaceInitialized(): Promise<boolean> {
    const results = await Promise.allSettled([
        // This list should include every Shoelace component that is used in the project, and no others
        customElements.whenDefined('sl-dropdown'),
        customElements.whenDefined('sl-radio-button'),
        customElements.whenDefined('sl-radio-group'),
        customElements.whenDefined('sl-tab'),
        customElements.whenDefined('sl-tab-group'),
        customElements.whenDefined('sl-tab-panel'),
    ]);

    return results.every((r) => 'fulfilled' === r.status);
}
