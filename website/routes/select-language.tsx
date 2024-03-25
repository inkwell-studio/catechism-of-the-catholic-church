import { JSX } from 'preact';

import { Language } from '../../catechism/source/types/types.ts';
import { getNativeLanguageText, getSupportedLanguages } from '../../catechism/source/utils/language.ts';

export default function SelectLanguage(): JSX.Element {
    return (
        <div class='min-h-screen flex flex-col items-center'>
            <h1 class='mt-[15vh] text-center'>Select your language:</h1>
            <div class='flex flex-col gap-8 items-center mt-16'>
                {getLanguages().map((languageData) => (
                    <a
                        href={`/${languageData.language}`}
                        class='w-48 text-center'
                    >
                        {languageData.text}
                    </a>
                ))}
            </div>
            <a href='/' class='flex items-center'>
                {/* Extract this into the new `icons` folder */}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'
                >
                    <path stroke-linecap='round' stroke-linejoin='round' d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3' />
                </svg>
                <span>
                    Return to the Introduction
                </span>
            </a>
        </div>
    );
}

function getLanguages(): Array<{ language: Language; text: string }> {
    return getSupportedLanguages()
        .map(([_text, language]) => ({ language, text: getNativeLanguageText(language) }))
        .sort((a, b) => a.text.localeCompare(b.text));
}
