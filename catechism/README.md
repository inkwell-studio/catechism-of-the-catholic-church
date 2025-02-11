# Catechism of the Catholic Church (data)

This contains the Catechism of the Catholic Church in an arrangement that decouples its content and visual representation as much as
possible. All information necessary for a visual rendering of the content is provided.

## Writing code

The `pre-commit` task should be successfully executed before committing to ensure that the code is linted, formatted, and typechecked, and
that the artifacts are kept in-sync with the source.

## Mock data

The translations of the _Catechism of the Catholic Church_ are copyrighted, so mock data is generated for demonstration purposes. When the
appropriate licenses are obtained, the `mock-data` directory may be removed.

To generate new mock data, execute the `build-mock-data` task.

To modify the quantity of the mock data generated, see:

- the invocation of `setLimits()` in `mock-data/run.ts`
- the files within `mock-data/config/`
