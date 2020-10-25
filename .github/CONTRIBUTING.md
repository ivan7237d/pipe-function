# Contributing Guidelines

## Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. Run `yarn commit` to call Commitizen which simplifies creating such commits.

## JS/TS Style Guide

- Use named arguments (i.e. a single object argument) instead of positional arguments or `(arg1) => (arg2) => result`.

- Use arrow functions whenever possible, even for methods.

- Don't use special naming conventions (e.g. uppercase for constants, \$ for observables, \_ for private members), except optional capitalization to distinguish a class/interface/type from an instance, which is the equivalent of using definite and indefinite articles in actual English. React components are an exception to this because of limitations of the JSX syntax.

- Write acronyms in camel case: `getUrl`, not `getURL`.

- Prefer `===` and `!==` to `==` and `!=`.

- Prefer named imports unless there is a specific reason to use wildcard or default imports — this plays well with automatic imports in VS Code. Related to this: try to name exported symbols in a way that will most likely make them globally unique; for instance, http module should export `httpGet` instead of just `get`.

- File names should start in lower case (even if the main exported symbol starts in upper case).

- If a function is a void function, enclose its body in braces even if this isn't strictly necessary, for example `() => { window.location.reload(); }` instead of `() => window.location.reload()`.
