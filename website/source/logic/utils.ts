// deno-lint-ignore ban-types
export function debounce(callback: Function, delay: number): Function {
    let timeoutID: ReturnType<typeof setTimeout>;

    // deno-lint-ignore no-explicit-any
    return function (t: any, ...args: any[]) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => callback(t, args), delay);
    };
}
