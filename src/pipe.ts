type Pipe = {
  <T, A>(source: T, a: (value: T) => A): A;
  <T, A, B>(source: T, a: (value: T) => A, b: (value: A) => B): B;
  <T, A, B, C>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C
  ): C;
  <T, A, B, C, D>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D
  ): D;
  <T, A, B, C, D, E>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E
  ): E;
  <T, A, B, C, D, E, F>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F
  ): F;
  <T, A, B, C, D, E, F, G>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G
  ): G;
  <T, A, B, C, D, E, F, G, H>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H
  ): H;
  <T, A, B, C, D, E, F, G, H, I>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
    i: (value: H) => I
  ): I;
  <T, A, B, C, D, E, F, G, H, I, J>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
    i: (value: H) => I,
    j: (value: I) => J
  ): J;
  <T, A, B, C, D, E, F, G, H, I, J, K>(
    source: T,
    a: (value: T) => A,
    b: (value: A) => B,
    c: (value: B) => C,
    d: (value: C) => D,
    e: (value: D) => E,
    f: (value: E) => F,
    g: (value: F) => G,
    h: (value: G) => H,
    i: (value: H) => I,
    j: (value: I) => J,
    k: (value: J) => K
  ): K;
};

/**
 * Pipes a value through a number of functions in the order that they appear.
 * Takes between 1 and 12 arguments. `pipe(x, a, b)` is equivalent to `b(a(x))`.
 *
 * If only one argument is provided (`pipe(x)`), this will produce a type error
 * but JS will run fine (and return `x`).
 */
const pipe: Pipe = (
  source: unknown,
  ...project: ((value: unknown) => unknown)[]
): unknown =>
  project.reduce((accumulator, element) => element(accumulator), source);

export default pipe;
