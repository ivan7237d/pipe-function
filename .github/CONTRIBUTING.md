# Contributing Guidelines

## Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. Run `yarn commit` to call Commitizen which simplifies creating such commits.

## File names

File names should start in lower case (even if the main exported symbol starts in upper case).

## JS/TS style rules not covered by ESLint

- Don't use special naming conventions (e.g. uppercase for constants, \$ for observables, \_ for private members), except capitalization to distinguish a type (class, interface, type alias, enum) from a value of that type, which is the equivalent of using definite and indefinite articles in actual English. React components are an exception to this because of limitations of the JSX syntax.

- Write acronyms in camel case: `getUrl`, not `getURL`.

- You do not have to duplicate in JSDoc the information already included in the symbol name and its type signature.

## Submitting a pull request

- Fork the repository and create your branch from `master`.

- If you've fixed a bug or added code that should be tested, add tests.

- Ensure `yarn test` passes (this runs build, jest, prettier and lint).
