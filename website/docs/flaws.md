# Flaws

## Infinite scroll URL updating

### Replication steps

- Navigate to the main content (e.g. `/part-1`)
- Scroll to the bottom of the page to load new content
  - Repeat at least once more
- Quickly scroll to the top of the page (the `Home` key on the keyboard seems to be the best way of doing this)

### Desired result

During and after scrolling to the top, the URL in the address bar is updated once (with the URL of the top section).

### Actual result

During and after scrolling to the top, the URL in the address bar is updated multiple times (once for every section that is passed over).
