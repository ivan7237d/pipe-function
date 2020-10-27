# Contributing Guidelines

## Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. Run `yarn commit` to call Commitizen which simplifies creating such commits.

## JS/TS Style Guide

- Use arrow functions whenever possible, even for methods.

- Don't use special naming conventions (e.g. uppercase for constants, \$ for observables, \_ for private members), except optional capitalization to distinguish a class/interface/type from an instance, which is the equivalent of using definite and indefinite articles in actual English. React components are an exception to this because of limitations of the JSX syntax.

- Write acronyms in camel case: `getUrl`, not `getURL`.

- Prefer `===` and `!==` to `==` and `!=`.

- Prefer named imports unless there is a specific reason to use wildcard or default imports.

- Try to name exported symbols in a way that will most likely make them globally unique; for instance, http module should export `httpGet` instead of just `get`. There are two reasons for this: preventing clashes with other libraries and making it easy to automatically import a symbol in VSCode.

- File names should start in lower case (even if the main exported symbol starts in upper case).

- If a function is a void function, enclose its body in braces even if this isn't strictly necessary, for example `() => { window.location.reload(); }` instead of `() => window.location.reload()`.

- Make sure to JSDoc exported symbols, but do not duplicate in the docstring the information already included in the TS type signature.

- Make sure to explicitly type returned values of exported functions, rather than relying on TS type inference. This makes sure that the returned type is included in the auto-generated docs and prevents unintended changes to type signature when the implementation of the function changes.
