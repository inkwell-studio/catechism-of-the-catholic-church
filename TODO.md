# Tasks to complete now

- [ ] consider activating higher-tier Deno Deploy services
  - [ ] determine if the project can be built with full-scale mock data on Deno
        Deploy as part of the regular build process
    - [ ] consider removing the artifacts from source control
      - [ ] perform offloading onto the server if necessary
    - [ ] if not, consider implementing more advanced HTMX-"pick-and-choose"
          logic to allow for a major reduction in the number of pre-generated
          partial pages
  - [ ] determine if the infinite-scroll triggers need to be updated
  - [ ] determine if a loading indicator needs to be added to the
        cross-reference panel

- [ ] determine why the `colors-button-stone-100` class isn't being applied to
      the table-of-contents trigger on the demo site

- [ ] make the 404 page more helpful

- [ ] fix sticky-scrolling on the Table of Contents (mobile view) (or remove the
      intended "sticky" functionality)
  - consider reading:
    https://polypane.app/blog/getting-stuck-all-the-ways-position-sticky-can-fail/

- [ ] add a utility function to wrap `document.getElementByID()`

- [ ] prioritize tasks below

- [ ] (if time-reasonable) try fixing the infinite-backward-scrolling bug

- [ ] consider adding a loading indicator to the bottom of the infinite-scroll
      content
- [ ] consider if the homepage needs any more work (see more extensive notes
      with photo references below)

- [ ] add these to the list of online versions of the Catechism (other repo):
  - https://canonicaleye.org/Catechism/
  - https://www.catholicdoors.com/catechis/index.htm
  - the "non-archive" Vatican site

- [ ] fix the footnotes hover-background placement on mobile

- [ ] have the toolbar change color to match the table-of-contents when it is
      open

- [ ] thoroughly investigate if fonts are properly configured

- [ ] consider upgrading Astro to 5.12.8 for risk mitigation

- [ ] consider if the `PT Sans Caption` (wider) or `PT Sans Narrow` fonts should
      be added and used anywhere (look at where `tracking-X` is used)

- [ ] diagnose HTMX bug and consider solutions and prioritize handling:
  - open the cross-reference panel
  - click the "navigate to" link to load new content
  - click the browser's back button
    - expected behavior: all components work normally
    - observed behavior: the theme switcher and the cross-reference-panel:close
      button does not work

- [ ] consider removing the `/demos` page (and the related instructions in
      `DEVELOPMENT.md`)

- [ ] consider reverting all the default Shoelace values
      (`https://github.com/shoelace-style/shoelace/blob/next/src/themes/light.css`)

- [ ] set caching headers for the fonts (and any other static files?)

- [ ] add paragraph numbers to the search results

- [ ] consider adding a note to `DEVELOPMENT.md` about adding languages (does
      just `catechism/source/types/language.ts` have to be modified for
      additional language support, and the `~/pages/en/index.astro` path have to
      be modified if the default language changes?)

- [ ] determine if all usages of `@std/path/resolve` are necessary (Can just
      `join` be used instead?)

- [ ] validate all file imports are set correctly
  - [ ] for files that import other files in the same "module" (i.e. they are in
        the same directory, or the one being imported is in a child directory):
    - use relative imports: `./other-file.ts`
  - [ ] for files that import a file from a different "module":
    - use "namespace" imports: `@logic/routing.ts`

- [ ] add a `<noscript>` feature

- [ ] consider updates to the homepage UI
  - consider https://eryri.gov.wales/visit/
  - [ ] background
    - [ ] consider:
      - https://unsplash.com/photos/the-ceiling-of-a-large-building-with-a-dome-XQUQ8PR5pFc
      - https://unsplash.com/photos/the-ceiling-of-a-building-with-a-clock-on-it-zNtmXuF9hLg
      - https://unsplash.com/photos/the-ceiling-of-a-large-building-with-a-dome-Ad1uzr4cD4I
      - https://unsplash.com/photos/gray-concrete-church-interior-GZVCCkoLtig
      - https://unsplash.com/photos/gold-and-white-cathedral-interior-1TLdxVTeO_0

- [ ] determine if a cross-references property needs to be added to the
      `Paragraph` interface

- [ ] consider disabling default Tailwind colors (remember the Deno formatter
      issue, and the workaround of adding `source/css/colors.css`, and having
      the Deno formatter exclude that file from formatting)

- [ ] upgrade to lastest version of Deno
  - [ ] determine if `tsconfig.json` usage can be simplified
        (https://deno.com/blog/v2.4#better-tsconfigjson-support)

- [ ] consider/try centralizing UI logic via an NgRx-like paradigm

- [ ] upgrade to Astro 5.7 (or latest?)
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

- [ ] consider "vendoring" dependencies

- [ ] consider making use of Deno's OpenTelemetry support

## Unprioritized

- [ ] determine long-term "technical debt"/"technical health" tasks, such as:
  - [ ] centralizing the logic UI
  - [ ] polishing the UI (animations, consistent styling, etc.)
  - [ ] replacing the Shoelace components with either Web Awesome components or
        custom components

- [ ] consider if advanced e2e testing is necessary - potentially helpful tools:
  - Astral: https://astral.deno.dev/
  - Puppeteer: https://github.com/puppeteer/puppeteer

- [ ] add a 500 page
- [ ] consider addding a concordance
- [ ] populate the index pages
- [ ] simplify the favicon fileset:
      https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
- [ ] consider improving artifact management
  - should artifacts not be commited, and instead be built during deployment?
- [ ] add e2e UI tests to validate links
- [ ] add JSON validation for `catechism.json`
- [ ] add an indicator in the main content text on words that are in the
      glossary, with a link to the glossary entry
- [ ] add "active path" highlighting to links in the Table of Contents

- [ ] implement unimplemented tests (see `TODO`s)

- [ ] add a test to ensure that all cross-references are paired (in
      `catechism.test.ts`)

- [ ] translations: always use a server-side component so data aren't sent up to
      the client unnecessarily

### Consider adding these features:

- consider updating the UI with features from these mobile apps:
  - [ ] Blue Letter Bible
    - note the navigation for book and chapter better than the YouVersion Bible
      app
    - good for word meanings
    - the concordance is useful
  - [ ] Cepher Bible
    - "UI not as good"
    - likes the highlighting mechanism (makes copying and pasting easier)
  - [ ] YouVersion Bible
    - highlighting text for copying and pasting verses in handy, but wished it
      worked across chapter breaks
    - infinite scrolling is useful (even if it were limited to "big chunks",
      such as a book) (likes this better than "flipping pages")
  - [ ] Ascension App (should be re-examined)
  - [ ] accomodate Forced Colors mode (see Polypane blog)
- [ ] navigation bar
  - [ ] "progress bar" functionality, as thought of by William
- [ ] handle RTL languages
- [ ] hierarchical navigation
- [ ] historical navigation
- [ ] the ability to copy paragraphs via a button or some kind of "long press"
- [ ] the ability to ask a question in natural language (via text or mic), e.g.
      "What happens in the Sacrament of Confirmation?"
- [ ] note-taking and highlighting
  - [ ] permanent and temporary storage (easily toggleable)
- [ ] narration
  - [ ] recordered audio (better than a screen reader)
  - [ ] text is highlighted to follow along (toggleable)

# Tasks to complete once it has been decided to release a production-ready version

- [ ] ensure all translations in are correct
