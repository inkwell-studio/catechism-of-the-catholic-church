import { JSX } from 'preact';

import { getLatestChanges } from '../../project-data/changelog.ts';

import Changelog from './(_islands)/changelog.tsx';
import ChangelogTrigger from './(_islands)/changelog-trigger.tsx';

export default function Home(): JSX.Element {
    return (
        <>
            <Changelog></Changelog>
            <div class='flex flex-col items-center'>
                <div class='w-full h-8 opacity-70'>&nbsp;</div>

                <div class='h-[80vh] flex flex-col justify-center items-center px-8'>
                    <h1 class='font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>
                        <span class='inline-block'>Catechism of&nbsp;the</span>
                        <br />
                        <span class='inline-block mt-1 md:mt-2 lg:mt-3'>Catholic Church</span>
                    </h1>
                    <h2 class='italic text-center text-lg sm:text-xl md:text-2xl lg:text-3xl my-8'>
                        A Better Online Version — Proof&nbsp;of&nbsp;Concept
                    </h2>
                    <ChangelogTrigger
                        text={`Last updated on ${getLatestChanges().date.toLocaleDateString()}.`}
                        classes='hover:underline text-sm xs:font-bold sm:text-base lg:text-lg md:mt-8'
                    />
                </div>

                <div class='max-w-xl md:max-w-2xl px-6 sm:px-8'>
                    <div class='h-px -mb-2 w-screen hidden xs:block relative xs:static xs:w-full xs:left-0 xs:right-0 lg:relative lg:-left-8 lg:-right-8 lg:w-[110%]'>
                        &nbsp;
                    </div>
                    <Title highlight={true}>What This Is</Title>
                    <Paragraph>
                        <>
                            A proof-of-concept for a better online version of the{' '}
                            <span class='italic'>Catechism of the Catholic&nbsp;Church</span>.
                        </>
                    </Paragraph>

                    <Title>Why It Exists</Title>
                    <Paragraph>
                        <>
                            To provide a more fitting digital home for one of the Church's great treasures, and to
                            demonstrate how the <span class='italic'>Catechism</span>{' '}
                            can be better presented with modern web features.
                        </>
                    </Paragraph>

                    <Title>What Already Exists</Title>
                    <Paragraph>
                        <>
                            Currently, there are at least seven websites with the English translation of the{' '}
                            <span class='italic'>Catechism</span>. All of these lack some, if not all, of the features
                            listed in the next section.
                        </>
                    </Paragraph>
                    <ol class='list-disc mb-2 ml-6 space-y-0.5'>
                        {[
                            {
                                url: 'http://www.vatican.va/archive/ENG0015/_INDEX.HTM',
                                text: 'Vatican archive',
                            },
                            {
                                url: 'https://www.usccb.org/beliefs-and-teachings/what-we-believe/catechism/catechism-of-the-catholic-church',
                                text: 'United States Conference of Catholic Bishops',
                            },
                            {
                                url: 'https://scborromeo2.org/catechism-of-the-catholic-church',
                                text: 'St. Charles Borromeo Catholic Church of Picayune, Mississippi',
                            },
                            {
                                url: 'http://cccref.com/',
                                text: 'A wrapper around the St. Charles Borromeo website',
                            },
                            {
                                url: 'https://www.catechismonline.com/home',
                                text: 'www.catechismonline.com',
                            },
                            {
                                url: 'https://www.catholicculture.org/culture/library/catechism/index.cfm',
                                text: 'www.catholicculture.org',
                            },
                            {
                                url: 'https://www.catholicdoors.com/catechis/index.htm',
                                text: 'www.catholicdoors.com',
                            },
                        ].map((site) => (
                            <li>
                                <a class='hover:underline' href={site.url}>{site.text}</a>
                            </li>
                        ))}
                    </ol>
                    <Paragraph>
                        <>
                            There is also the{' '}
                            <a href='https://ascensionpress.com/pages/ascension-app' class='hover:underline italic'>
                                Bible & Catechsim App
                            </a>{' '}
                            from Ascension, which includes many of the features below. However, the app is available
                            only on particular devices and users must have an account with an app store, whereas a
                            simple web site has the advantage of being immediately and directly accessible by all modern
                            web-capable devices.
                        </>
                    </Paragraph>
                    <Paragraph>
                        <>
                            Also, the app has functionality not directly related to the{' '}
                            <span class='italic'>Catechism</span>, which may result in a less-intuitive experience for
                            users who are interested solely in the <span class='italic'>Catechism</span>.
                        </>
                    </Paragraph>

                    <Title>Why not improve an existing site?</Title>
                    <Paragraph>
                        <>
                            The existing sites do not appear to have the technical foundation for providing all the
                            features this site is capable of:
                            <ul class='list-disc mb-4 ml-6 space-y-0.5'>
                                <li>responsive design</li>
                                <li>robust and intuitive search</li>
                                <li>a single site for all translations</li>
                                <li>
                                    intuitive and traceable navigation by paragraph numbers, cross references, and
                                    topics
                                </li>
                                <li>URL navigation by paragraph number, chapter number, etc.</li>
                                <li>
                                    API for human and machine querying (to help make projects like{' '}
                                    <a href='https://github.com/konohitowa/catebot' class='italic'>CateBot</a> possible)
                                </li>
                            </ul>
                        </>
                    </Paragraph>
                    <Paragraph>
                        <>
                            This new site, with its architecture, provides opportunity for all these.
                        </>
                    </Paragraph>

                    <Title highlight={true}>What Comes Next</Title>
                    <Paragraph>
                        <>
                            Much development work remains.{' '}
                            <ChangelogTrigger text='Here are the latest updates.' classes='font-bold hover:underline' />
                        </>
                    </Paragraph>
                    <Paragraph>
                        <>
                            Licensing permission needs to be obtained before the text of the{' '}
                            <span class='italic'>Catechism</span>{' '}
                            can be used (the United&nbsp;States&nbsp;Conference of Catholic&nbsp;Bishops holds the
                            copyright for the English translation).
                        </>
                    </Paragraph>

                    <Title>Learning More</Title>
                    <Paragraph>
                        <>
                            If you would like to see the code or contact&nbsp;the&nbsp;developer,
                            please&nbsp;do&nbsp;so:
                        </>
                    </Paragraph>
                    <div class='my-4 mx-4 flex flex-col md:flex-row gap-3'>
                        <ButtonLink
                            newTab={true}
                            href='https://github.com/inkwell-studio/catechism-of-the-catholic-church'
                            text='source code'
                        >
                            <></>
                        </ButtonLink>
                        <ButtonLink newTab={true} href='mailto:joecode@tuta.io' text='joecode@tuta.io'></ButtonLink>
                    </div>

                    <Title highlight={true}>View the Demo</Title>
                    <Paragraph>
                        <>
                            The sample text is from public domain Scripture translations, and its formatting is
                            generated randomly.
                        </>
                    </Paragraph>
                    <Paragraph>
                        <>
                            Many features are not yet implemented, and the user interface is in a draft state.
                        </>
                    </Paragraph>
                    <Paragraph>
                        <>
                            You may click open cross-reference by clicking them, and you may navigate to paragraphs
                            directly by the URL (e.g.{' '}
                            <a href='en/192' class='font-mono'>www.catholiccatechism.app/en/192</a>).
                        </>
                    </Paragraph>
                    <Paragraph>
                        <div class='mt-3 mx-4 flex'>
                            <ButtonLink newTab={false} href='/select-language' text='Enter'></ButtonLink>
                        </div>
                    </Paragraph>
                </div>
                <div class='w-full h-6 md:h-8 opacity-70 mt-8 md:mt-16 md:opacity-80'>&nbsp;</div>
            </div>
        </>
    );
}

function Title(props: { children: JSX.Element | string; highlight?: boolean }): JSX.Element {
    return (
        <span class='relative'>
            {props.highlight ? <span class='block absolute -inset-1 rounded-sm opacity-30'></span> : ''}
            <h3 class={(props.highlight ? 'mt-8' : 'mt-6') + ' relative font-serif font-bold italic text-xl p-1 mb-4'}>
                {props.children}
            </h3>
        </span>
    );
}

function Paragraph(props: { children: JSX.Element }): JSX.Element {
    return <p class='px-4 mb-2'>{props.children}</p>;
}

function ButtonLink(props: { children?: JSX.Element; href: string; text: string; newTab: boolean }): JSX.Element {
    const target = props.newTab ? '_blank' : '';

    return (
        <a
            href={props.href}
            target={target}
            class='flex-grow inline-block font-sans text-center border border-2 rounded transition-bg p-3'
        >
            {props.text}
        </a>
    );
}
