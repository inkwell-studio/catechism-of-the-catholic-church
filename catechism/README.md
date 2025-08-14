# Catechism of the Catholic Church: data

This contains the Catechism of the Catholic Church in an arrangement that decouples its content and visual representation as much as
possible. All information necessary for a visual rendering of the content is provided.

## Writing code

The `pre-commit` task should be successfully executed before committing to ensure that the code is linted, formatted, and typechecked, and
that the artifacts are kept in-sync with the source.

Code within this directory must not import code from the `/website` directory, as doing so may cause dependency problems.
