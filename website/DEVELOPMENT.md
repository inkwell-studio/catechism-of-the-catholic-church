# Development Instructions

For helpful extensions Visual Studio Code extensions, see `.vscode/extensions.json`.

## Setup

Install packages:

```
deno install --allow-scripts=npm:sharp
```

Disable Astro telemetry:

```
deno task disable-telemetry
```

## Serving the website

To serve a development version of the site:

```
deno task dev
```

To build and serve a production version of the site:

```
deno task build
deno task serve
```

## End-to-end testing

```shell
deno task build
deno task serve

# (in a separate shell)
deno task test-e2e
```

## Writing code

This project is set up for development with [Visual Studio Code](https://code.visualstudio.com/), and is configured to have the editor
format files each time they are saved.

Packages are managed with both `deno.json` and `package.json`. Deno will modify the correct file when packages are added with
`deno add some-package@x.x.x`.

`package.json` is used only for tracking npm packages.

To format all code, and to lint and typecheck all `*.astro`, `*.ts` and `*.tsx` files, execute `deno task check-code`.

### Why are `deno.json` and `package.json` both used?

- The `deno.json` file exists so that Visual Studio Code will delegate the formatting of all files to Deno during its format-on-save
  process. This results in identical formatting between the command line and IDE. Without `deno.json`, some files, like `*.astro`, will be
  managed by a different formatter.
- The `package.json` file is used to manage npm dependencies, as managing these with `deno.json` results in Vite errors during Astro's
  bundling process.

## Debugging

The code may be debugged with Visual Studio Code via the `.vscode/launch.json` configurations:

| Code to debug    | Prelaunch step    | Configuration to run |
| ---------------- | ----------------- | -------------------- |
| Client           | `deno task dev`   | `Web app: client`    |
| End-to-end tests | `deno task serve` | `e2e tests`          |

## Deployment to Deno Deploy

See `.github/workflows/deploy.yml`.

## Using JSR packages

Packages from [jsr.io](https://jsr.io/) may be used by manually adding them to `package.json` and then executing `deno install`.

For example, to add the `@std/html` package:

```JSON
// package.json
{
    "dependencies": {
        "@std/html": "npm:@jsr/std__html@1"
    }
}
```

After executing `deno install`, you will then be able to use the package as follows:

```TypeScript
import { escape } from '@std/html`;
```

This is made possible by the `@jsr` entry in `.npmrc`.

### Regarding names

In `package.json`, the property key may be anything you like (it is `@std/html` in the example above).

The property value (`npm:@jsr/std__html@1` above) is derived from the original package name of `@std/html` as follows:

1. The slash between the scope and the package name is replaced with two underscores: `__`
2. The `@` is replaced with `npm:@jsr/`
3. The regular semantic version tag is added at the end

### Type declarations

Visual Studio Code may not be able to resolve the type declarations for JSR packages in `.astro` files without modifications to
`tsconfig.json`.

As an example, the following will allow type declarations to be resolved for packages from the Deno standard library:

```JSON
// tsconfig.json
{
    "compilerOptions": {
        "paths": {
            "@std/*": ["node_modules/@std/*/mod.ts"]
        }
    }
}
```

### Further reading

For more information, see the [JSR documentation](https://jsr.io/docs/npm-compatibility#advanced-setup).
