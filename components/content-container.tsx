import Content from '../islands/content.tsx';

export function ContentContainer() {
    return <div class='flex justify-center'>
        <main class='
                relative bg-tan-50 text-justify h-[min-content]
                rounded-md shadow md:shadow-2xl
                w-full md:max-w-2xl lg:max-w-3xl
                px-6 xs:px-10 sm:px-20 lg:px-32
                pb-4 pt-4 sm:pt-8 md:pt-14 md:my-8 lg:pt-16
            '>
            <Content></Content>
        </main>
    </div>
}
