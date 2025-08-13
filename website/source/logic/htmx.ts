// No official HTMX typing is available, so this is here to aid development when accessing the global `htmx` object.
// It is not meant to be complete, but to be populated on an as-needed basis.
// The official documention: https://htmx.org/

export interface HTMX {
    process: (e: HTMLElement) => void;
}
