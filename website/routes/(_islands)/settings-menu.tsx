import { Popover } from 'headlessui';
import { JSX } from 'preact';

/*

// original (my efforts)
"headlessui": "https://esm.sh/@headlessui/react@1.7.18",

// discussion:
https://github.com/denoland/fresh/discussions/606

// original from discussion:
https://esm.sh/@headlessui/react@1.6.6?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&deps=preact@10.10.0
https://esm.sh/@headlessui/react@1.7.1?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&external=preact/compat

// new:
"headlessui": "https://esm.sh/@headlessui/react@1.7.18?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&deps=preact@10.19.6",
*/

export default function SettingsMenu(): JSX.Element {
    return (
        <Popover className='relative'>
            <Popover.Button>Solutions</Popover.Button>

            <Popover.Panel className='fixed left-8 top-8 z-10'>
                <div className='grid grid-cols-2'>
                    <a href='/analytics'>Analytics</a>
                    <a href='/engagement'>Engagement</a>
                    <a href='/security'>Security</a>
                    <a href='/integrations'>Integrations</a>
                </div>

                {/* <img src='/solutions.jpg' alt='' /> */}
            </Popover.Panel>
        </Popover>
    );
}
