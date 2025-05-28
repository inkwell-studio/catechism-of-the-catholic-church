import { ElementClass } from './ui.ts';

//#region Event handlers
// deno-lint-ignore ban-types
export function onClick(e: Element, f: Function): void {
    e.addEventListener('click', () => f());
}

// deno-lint-ignore ban-types
export function onMouseover(e: Element, f: Function): void {
    e.addEventListener('mouseover', () => f());
}
//#endregion

//#region Showing and hiding elements
export function toggle(e: Element): void {
    toggleClass(e, ElementClass.HIDDEN);
}

export function show(e: Element): void {
    removeClass(e, ElementClass.HIDDEN);
}

export function hide(e: Element): void {
    addClass(e, ElementClass.HIDDEN);
}
//#endregion

//#region Class utils
export function toggleClass(e: Element, cssClass: string): void {
    if (e.classList.contains(cssClass)) {
        removeClass(e, cssClass);
    } else {
        addClass(e, cssClass);
    }
}

export function addClass(e: Element | null, ...classes: Array<string>): void {
    if (e) {
        e.classList.add(...classes);
    }
}

export function removeClass(e: Element | null, ...classes: Array<string>): void {
    if (e) {
        e.classList.remove(...classes);
        /*
        Remove the `class` attribute if it is empty to prevent the `class` attribute
        being present without a value, which is invalid HTML (i.e. `<html class>`)
    */
        if (e.classList.length === 0) {
            e.removeAttribute('class');
        }
    }
}
//#endregion
