# `pipe` function

A function to pipe a value through a number of transforms.

## Installation

```bash
npm install pipe-function
```

or

```bash
yarn add pipe-function
```

or

```bash
pnpm add pipe-function
```

## Usage

```ts
import { pipe } from "pipe-function";
```

Takes between 2 and 20 arguments. `pipe(x, a, b)` is equivalent to `b(a(x))`, in other words, this function pipes a value through a number of functions in the order that they appear. [This article](https://dev.to/ivan7237d/i-ve-used-the-pipe-function-2-560-times-and-i-can-tell-you-it-s-good-4aal) talks about why this function is useful.

When you have a single argument, like `const y = pipe(x)`, `pipe` is redundant, so you will get a type error, but the code will run and return `x`. Despite the type error, the type of `y` will be inferred correctly as type of `x`.

---

[Contributing guidelines](https://github.com/ivan7237d/pipe-function/blob/master/.github/CONTRIBUTING.md)
