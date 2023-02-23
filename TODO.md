# Tasks

- write `catechism/artifacts/table-of-contents.json` (see `catechism/artifact-builders/table-of-contents.ts :: write()`)
- implement the _Table of Contents_ page using the new `table-of-contents.json` file
- improve the architecture of the `<ContentContainer>` and `<Content>` components (see note in `[...index].tsx`)

- render all content
  - opening content
  - citation markers
  - is there anything else?
- implement content loading
  - cross-reference navigation
  - chapter > chapter navigation
  - routing
    - to in-page anchor tags

- styling

## Unprioritized

- implement table-of-contents navigation
- implement hierarchical navigation
- implement historical navigation
- implement search
- implement index
- implement glossary
- implement "copy" buttons (click a button to copy the entire text of a paragraph, quote, etc.)
- light/dark/high-contrast mode toggle
  - dark mode: try to avoid the "window blending" (cannot tell where the browser window starts and another application
    window begins)
- consider using the following colors:
  - #E86D82 (red-pink)

# Possible features

- the ability to ask a question in natural language (via text or mic), e.g. "What happens in the sacrament of
  Confirmation?"
- note-taking and highlighting
  - permanent and temporary storage (easily toggleable)
- narration
  - recordered audio (better than a screen reader)
  - text is highlighted to follow along (toggleable)
