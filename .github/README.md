# Antiutils

A minimal set of JS/TS utilities.

## Installation

```bash
npm install antiutils
```

or

```bash
yarn add antiutils
```

or

```bash
pnpm add antiutils
```

## Usage

The library provides just two functions.

### pipe

```ts
import { pipe } from "antiutils";
```

Takes between 2 and 12 arguments. `pipe(x, a, b)` is equivalent to `b(a(x))`, in other words, this function pipes a value through a number of functions in the order that they appear. [This article](https://dev.to/ivan7237d/i-ve-used-the-pipe-function-2-560-times-and-i-can-tell-you-it-s-good-4aal) talks about why this function is useful.

`pipe(x)` will run and return `x`, but will produce a type error.

### assertNever

```ts
import { assertNever } from "antiutils";
```

Takes 1+ arguments each of type `never` and throws. This is useful when you need to assert that all options have been exhausted:

```ts
const translate = (word: "hello" | "goodbye") =>
  word === "hello"
    ? "bonjour"
    : word === "goodbye"
    ? "au revoir"
    : assertNever(word);
```

This typechecks because at the point where `word` is passed to `assertNever`, it has type `never`, but will no longer typecheck if you add a third option to `"hello" | "goodbye"`.

---

[Contributing guidelines](https://github.com/ivan7237d/antiutils/blob/master/.github/CONTRIBUTING.md)
