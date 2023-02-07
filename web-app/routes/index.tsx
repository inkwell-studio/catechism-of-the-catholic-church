import { Head } from '$fresh/runtime.ts';

export default function Home() {
    return (
        <>
            <Head>
                <title>Catechism of the Catholic Church</title>
            </Head>
            <body class='flex flex-col items-center bg-tan-100'>
                <div class='h-[80vh] flex flex-col justify-center items-center px-8'>
                    <h1 class='font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-center'>
                        Catechism of&nbsp;the Catholic&nbsp;Church
                    </h1>
                    <h2 class='italic text-xl md:text-2xl lg:text-3xl my-6'>Proof of Concept</h2>
                </div>

                <div class='max-w-xl md:max-w-2xl px-8 mb-8'>
                    <div class='bg-red-900 w-full h-px mb-8'>&nbsp;</div>

                    <Title>What This Is</Title>
                    <Paragraph>
                        A proof-of-concept for how the <span class='italic'>Catechism of the Catholic&nbsp;Church</span>
                        {' '}
                        can be made more user-friendly for the general online public.
                    </Paragraph>
                    <Paragraph>
                        It is a step toward a better online version of the{' '}
                        <span class='italic'>Catechism of the Catholic Church</span>.
                    </Paragraph>

                    <Title>Why It Exists</Title>
                    <Paragraph>
                        To provide a more fitting digital home for one of the Church's great treasures;
                    </Paragraph>
                    <Paragraph>
                        And to demonstrate how the <span class='italic'>Catechism</span>{' '}
                        can be better presented with modern web features:
                        <ul class='list-disc ml-6'>
                            <li>responsive layout</li>
                            <li>robust and intuitive search</li>
                            <li>
                                navigation mechanism that allows for quick and traceable traversal by paragraph numbers
                                and cross references
                            </li>
                        </ul>
                    </Paragraph>

                    <Title>What Already Exists</Title>
                    <Paragraph>
                        Currently, there are four websites with the English translation of the{' '}
                        <span class='italic'>Catechism</span>. All of these lack some, if not all, of the features
                        listed above.
                        <ol class='list-disc ml-4'>
                            <li>
                                <a href='http://www.vatican.va/archive/ENG0015/_INDEX.HTM'>Vatican archive</a>
                            </li>
                            <li>
                                <a href='https://www.usccb.org/beliefs-and-teachings/what-we-believe/catechism/catechism-of-the-catholic-church'>
                                    United States Conference of Catholic Bishops
                                </a>
                            </li>
                            <li>
                                <a href='https://scborromeo2.org/catechism-of-the-catholic-church'>
                                    St. Charles Borromeo Catholic Church of Picayune, Mississippi
                                </a>
                            </li>
                            <li>
                                <a href='http://cccref.com/'>A wrapper around the St. Charles Borromeo website</a>
                            </li>
                        </ol>
                    </Paragraph>

                    <Title>What Comes Next</Title>
                    <Paragraph>
                        Much development work remains.
                    </Paragraph>
                    <Paragraph>
                        Licensing permission needs to be obtained before the actual text of the{' '}
                        <span class='italic'>Catechism</span>{' '}
                        can be used here (the United&nbsp;States Conference of Catholic&nbsp;Bishops holds the copyright
                        for the English translation).
                    </Paragraph>

                    <Title>View the Site</Title>
                    <Paragraph>
                        <span class='italic'>Please check back later today, February 7, 2023.</span>
                    </Paragraph>

                    <Title>Learning More</Title>
                    <Paragraph>
                        If you would like to see the code or contact the sole developer, please do so:
                    </Paragraph>
                    <div className='my-4 flex justify-center'>
                        <ButtonLink
                            href='https://github.com/inkwell-studio/catechism-of-the-catholic-church'
                            text='source code'
                        >
                        </ButtonLink>
                        <ButtonLink href='mailto:joecode@tuta.io' text='joecode@tuta.io'></ButtonLink>
                    </div>
                </div>
            </body>
        </>
    );
}

function Title({ children }) {
    return <h3 class='font-serif font-bold italic text-xl mt-6 mb-4'>{children}</h3>;
}

function Content({ children }) {
    return <div class='px-4'>{children}</div>;
}

function Paragraph({ children }) {
    return <p class='px-4 mb-2'>{children}</p>;
}

function ButtonLink({ href, text }) {
    return (
        <a
            href={href}
            target='_blank'
            class='inline-block font-sans border border-2 rounded bg-tan-100 hover:bg-tan-50 transition-bg p-3 mt-2 mr-3'
        >
            {text}
        </a>
    );
}
