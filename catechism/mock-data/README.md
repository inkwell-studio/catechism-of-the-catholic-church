# Mock Data

## About

This is a collection of files that generates mock data for the Catechism source code.\
There are two steps to the data-generation process:

1. Generate mock data as in-memory objects
2. Use the data to write source code for `catechism.ts`, `text-en.ts`, and `text-key.ts`
3. Overwrite the existing files with the new source code

## Usage

```
deno task build-mock-data
```
