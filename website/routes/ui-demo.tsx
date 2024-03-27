import { JSX } from 'preact';

import Menu from './(_islands)/ui-library-demo/menu.tsx';
import Popover from './(_islands)/ui-library-demo/popover.tsx';

export default function UiDemo(): JSX.Element {
    return (
        <div class='min-h-screen min-w-screen p-12 bg-gray-400'>
            <div class='min-h-full max-w-6xl mx-auto flex flex-col gap-8 py-48 px-24 bg-gray-100 rounded-lg'>
                <div>
                    <Popover />
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </div>
    );
}
