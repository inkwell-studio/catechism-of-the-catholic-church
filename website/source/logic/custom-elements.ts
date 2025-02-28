export function defineElement(elementName: string, elementClass: CustomElementConstructor): void {
    const isNewElement = !customElements.get(elementName);
    if (isNewElement) {
        customElements.define(elementName, elementClass);
    }
}
