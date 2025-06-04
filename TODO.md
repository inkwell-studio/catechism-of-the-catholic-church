# Tasks to complete now

- [ ] make the UX demo-worthy
  - [ ] update the language-switcher navigation values as the URL is updated
        while scrolling
    - will probably have to be done "manually", without HTMX (or can
      `htmx.trigger()` be used?)
    - [ ] merge

  - [ ] fix natural-language-path toolbar text updates on non-main-content pages
    - [ ] merge

  - [ ] add a navigate-by-paragraph-number feature to the toolbar's
        table-of-contents menu
    - [ ] merge

  - [ ] implement the homepage
  - [ ] add a "project introduction" page
  - [ ] add an "about/legal" page
  - [ ] determine what should be done with the search functionality (POC or
        remove?)
  - [ ] add a "demo/introduction" page
  - [ ] implement the homepage: UI
    - consider https://eryri.gov.wales/visit/
    - [ ] background
      - [ ] consider:
        - https://unsplash.com/photos/the-ceiling-of-a-large-building-with-a-dome-XQUQ8PR5pFc
        - https://unsplash.com/photos/the-ceiling-of-a-building-with-a-clock-on-it-zNtmXuF9hLg
        - https://unsplash.com/photos/the-ceiling-of-a-large-building-with-a-dome-Ad1uzr4cD4I
        - https://unsplash.com/photos/gray-concrete-church-interior-GZVCCkoLtig
        - https://unsplash.com/photos/gold-and-white-cathedral-interior-1TLdxVTeO_0
  - [ ] determine if `content-layout.astro` is still properly set up for
        browser-chrome-collapsing on mobile browsers
  - [ ] make everything work on mobile browsers
  - [ ] finalize element sizes and arrangment
    - [ ] fix the toolbar styling so that no parts of it are an "empty" element
          that takes up space and prevents the mouse "click-throughs" to
          elements "underneath" it
    - [ ] update text sizes so `text-base` is the current `text-lg` value
  - [ ] finalize colors
    - [ ] light (default) mode
    - [ ] dark mode
  - [ ] (if quickly attainable) add a loading indicator to the bottom of the
        infinite-scroll content
  - [ ] make the 404 page more helpful
- [ ] make licensing info explicit
- [ ] clean up `website/source/graphics/home-page/`
  - [ ] remove unused files
  - [ ] simplify used files
  - [ ] ensure SVG files are valid

- [ ] merge

- [ ] consider improving English mock text
  - John Henry Cardinal Newman sermons
- [ ] merge

- [ ] consider repo management (this and the original
      `catechism-of-of-the-catholic-church` repo)

- [ ] add these to the list of online versions of the Catechism:
  - https://canonicaleye.org/Catechism/
  - https://www.catholicdoors.com/catechis/index.htm
  - the "non-archive" Vatican site

- [ ] reach out to connections

- [ ] determine if a cross-references property needs to be added to the
      `Paragraph` interface

- [ ] move all artifact builders that are associated with the website code from
      `catechism/artifacts/derivative/etc` to a new location in `website/`.

- [ ] upgrade to Astro 5.7
  - [ ] add the `experimental: preserveScriptOrder` flag (with a value of
        `true`), and make any necessary changes
    - see https://astro.build/blog/astro-550/#type-safe-experimental-sessions
      (Experimental: preserve order of style and script tags)
  - [ ] use the `astro:config` virtual module (e.g.
        `import { trailingSlash, base } from 'astro:config/client';`):
    - [ ] use this instead of the `website/config.ts` import in `robots.txt.ts`
    - [ ] remove `website/config.ts`
    - see https://astro.build/blog/astro-570/ (Config Imports)
- [ ] merge

- [ ] consider if advanced e2e testing is necessary - potentially helpful tools:
  - Astral: https://astral.deno.dev/
  - Puppeteer: https://github.com/puppeteer/puppeteer

- [ ] navigation bar
  - [ ] "progress bar" functionality, as thought of by William
- [ ] rework the "action bar" as a "menu"/"action" icon slide-up menu - [ ]
      rename files appropriately
  - [ ] for mobile devices only, with a different menu paradigm for larger
        screen?

- [ ] consider "vendoring" dependencies

- [ ] consider adding logic around hiding Shoelace components before they are
      loaded:
      https://shoelace.style/getting-started/usage#waiting-for-components-to-load
- [ ] implement UI proofs of concept (e.g. React UI interactivity — especially
      with HTMX and Astro components)
  - [ ] implement Action Bar menus
    - [ ] Table of Contents
    - [ ] Search
    - [ ] Settings
      - [ ] implement theme switching (light/dark/system)
      - [ ] text size
      - [ ] "About" (general info)
      - [ ] language switcher
    - [ ] determine which component library to use:
      - https://react-spectrum.adobe.com/react-aria/index.html
      - https://headlessui.com/
        - cf.
          https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss
      - https://mantine.dev/
      - https://www.radix-ui.com/primitives
      - https://chakra-ui.com/
- [ ] consider opening the cross-reference window only after the desired
      response is received (or otherwise improve the behavior)

- [ ] populate the home page
  - add translation functionality for the home page
    - consider using `https://github.com/nanostores/i18n`
  - [ ] pages (add e2e tests as you go)
    - [ ] concordance (?)
    - [ ] project-explanation landing page (no need to populate it yet)
      - eventually add:
        - what the CCC is
        - how the Search may be used (e.g. keywords, phrases, content titles,
          paragraph numbers)
        - how the JSON API may be used
  - [ ] populate the index pages
  - [ ] ensure content navigation with HTMX works appropriately in all cases

- [ ] add a project-intro page

- [ ] consider adding a note to `DEVELOPMENT.md` about adding languages (does
      just `catechism/source/types/language.ts` have to be modified for
      additional language support, and the `~/pages/en/index.astro` path have to
      be modified if the default language changes?)
- [ ] add a 500 page
- [ ] update UI
  - [ ] look into these mobile apps:
    - Blue Letter Bible
      - note the navigation for book and chapter better than the YouVersion
        Bible app
      - good for word meanings
      - the concordance is useful
    - Cepher Bible
      - "UI not as good"
      - likes the highlighting mechanism (makes copying and pasting easier)
    - YouVersion Bible
      - highlighting text for copying and pasting verses in handy, but wished it
        worked across chapter breaks
      - infinite scrolling is useful (even if it were limited to "big chunks",
        such as a book) (likes this better than "flipping pages")
    - Ascension App (should be re-examined)
  - [ ] watch design videos
  - [ ] consider adding the ability to have different "themes" and font settings
        for the light/dark modes (cf. https://www.esv.org/Matthew+1/)
    - [ ] determine if Tailwind themes can be reasonably implemented
  - [ ] handle the overlay/mobile "expanded view" scroll problem (where
        expanding the content container's height beyond the height of the window
        cues the mobile browsers to minimize their menus, but the fixed action
        bars (and cross-reference window?) do not "capture" the user's scrolling
        motions — on desktop and mobile such that the main content is scrolled
        instead)
  - [ ] handle RTL languages
  - [ ] consider building some sort of style guide/library
  - [ ] fonts to consider
    - Bookman
    - Alegreya
    - Lora
    - others?
  - [ ] accomodate Forced Colors mode (see Polypane blog)
  - [ ] dark mode: try to avoid the "window blending" problem (cannot tell where
        the browser window starts and another application window begins)
  - [ ] consider all notes about colors found elsewhere in this file

- [ ] determine if the Catechism JSON artifacts should be created without
      formatting (will the saved disk space be beneficial?) (see
      `catechism/artifact-builders/build.ts`)

- [ ] update the intro page if appropriate

- [ ] set caching headers for the fonts (and any other static files?)

- [ ] translations: always use a server-side component so data isn't sent up to
      the client unnecessarily

- [ ] implement hierarchical navigation

- [ ] research artifact caching methods (if necessary)

## Unprioritized

- [ ] simplify the favicon fileset:
      https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
- [ ] add helpful information and links to the 404 page
- [ ] consider improving artifact management
  - should artifacts not be commited, and instead be built during deployment?
- [ ] UI: style for LTR and RTL text
- [ ] add e2e UI tests to validate links
- [ ] add JSON validation for `catechism.json`

- UI:
  - consider using Radix UI things:
    - https://www.radix-ui.com/colors
    - https://www.radix-ui.com/
    - https://icons.radix-ui.com/
  - [ ] consider using the following colors:
    - [ ] #E86D82 (red-pink)
- [ ] implement unimplemented tests
- [ ] add a test to ensure that all cross-references are paired (in
      `catechism.test.ts`)
- [ ] implement hierarchical navigation
- [ ] implement historical navigation
- [ ] implement "copy" buttons (click a button to copy the entire text of a
      paragraph, quote, etc.)

# Tasks to complete once it has been decided to release a production-ready version

- [ ] verify the translations in `website/source/logic/translation.ts` are
      correct

# Possible features

- [ ] the ability to ask a question in natural language (via text or mic), e.g.
      "What happens in the Sacrament of Confirmation?"
- [ ] note-taking and highlighting
  - [ ] permanent and temporary storage (easily toggleable)
- [ ] narration
  - [ ] recordered audio (better than a screen reader)
  - [ ] text is highlighted to follow along (toggleable)
