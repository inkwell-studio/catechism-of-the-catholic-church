# Tasks to complete now

- [ ] read or discard:
  - https://shoelace.style/components/drawer
  - https://github.com/shoelace-style/shoelace/blob/next/src/components/button/button.component.ts
  - https://shoelace.style/getting-started/installation
  - https://shoelace.style/tutorials/integrating-with-astro
  - https://github.com/b-d-m-p/astro-shoelace-starter-kit-blog/tree/main
  - https://jsr.io/@matthiesenxyz/astrolace@0.1.8
  - https://github.com/MatthiesenXYZ/Astrolace?tab=readme-ov-file

- [ ] change the cross-reference drawer to be "contained":
      https://shoelace.style/components/drawer#contained-to-an-element
- [ ] merge

- [ ] implement full navigation mechanism
  - [ ] add table-of-contents menu
  - [ ] remove `development-helper.astro`
- [ ] implement "previous section" navigation with reverse infinite-scrolling
- [ ] merge

- [ ] make the UX demo-worthy
- [ ] merge

- [ ] consider if advanced e2e testing is necessary - potentially helpful tools:
  - Astral: https://astral.deno.dev/
  - Puppeteer: https://github.com/puppeteer/puppeteer

- [ ] homepage
  - [ ] Vatican "keys" icon
  - [ ] table of contents
- [ ] merge

- [ ] make paragraph numbers in-line with the text
- [ ] merge

- [ ] navigation bar
  - [ ] "progress bar" functionality, as thought of by William
- [ ] rework the "action bar" as a "menu"/"action" icon slide-up menu - [ ]
      rename files appropriately
  - [ ] for mobile devices only, with a different menu paradigm for larger
        screen?
- [ ] dark mode
- [ ] implement proper content layout
- [ ] consider repo management (this and the original
      `catechism-of-of-the-catholic-church` repo)
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

- [ ] verify the translations in `catechism/artifact-builders/utils.ts` and
      `catechism/source/utils/semantic-path.ts` are correct

# Possible features

- [ ] the ability to ask a question in natural language (via text or mic), e.g.
      "What happens in the Sacrament of Confirmation?"
- [ ] note-taking and highlighting
  - [ ] permanent and temporary storage (easily toggleable)
- [ ] narration
  - [ ] recordered audio (better than a screen reader)
  - [ ] text is highlighted to follow along (toggleable)
