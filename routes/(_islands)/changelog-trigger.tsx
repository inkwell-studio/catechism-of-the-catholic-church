// deno-lint-ignore-file fresh-server-event-handlers
import { JSX } from 'preact';

import { Actions } from '../../web/state.ts';

export default function ChangelogTrigger(props: { text: string; classes: string }): JSX.Element {
    return <button onClick={Actions.changelog.open} class={props.classes}>{props.text}</button>;
}
