import { UnknownPageProps } from '$fresh/server.ts';

export default function FourHundredFour(props: UnknownPageProps) {
    return (
        <div class='h-[70vh] flex flex-col justify-center'>
            <div class='bg-tan-50 flex flex-col justify-center items-center gap-4 py-40 shadow-lg sm:(gap-6 px-40 mx-auto rounded-lg)'>
                <h1 class='font-serif text-4xl italic'>Page not found.</h1>
                <div>
                    Unknown page: <span class='font-mono'>{props.url.pathname}</span>
                </div>

                <strong class='font-bold text-xl md:text-2xl'>
                    <a href='/' class='hover:underline'>Go Home</a>
                </strong>
            </div>
        </div>
    );
}
