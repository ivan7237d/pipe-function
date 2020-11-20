export function applyPipe<T>(source: T): T;
export function applyPipe<T, A>(source: T, a: (value: T) => A): A;
export function applyPipe<T, A, B>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
): B;
export function applyPipe<T, A, B, C>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
  c: (value: B) => C,
): C;
export function applyPipe<T, A, B, C, D>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
  c: (value: B) => C,
  d: (value: C) => D,
): D;
export function applyPipe<T, A, B, C, D, E>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
  c: (value: B) => C,
  d: (value: C) => D,
  e: (value: D) => E,
): E;
export function applyPipe<T, A, B, C, D, E, F>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
  c: (value: B) => C,
  d: (value: C) => D,
  e: (value: D) => E,
  f: (value: E) => F,
): F;
export function applyPipe<T, A, B, C, D, E, F, G>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
  c: (value: B) => C,
  d: (value: C) => D,
  e: (value: D) => E,
  f: (value: E) => F,
  g: (value: F) => G,
): G;
export function applyPipe<T, A, B, C, D, E, F, G, H>(
  source: T,
  a: (value: T) => A,
  b: (value: A) => B,
  c: (value: B) => C,
  d: (value: C) => D,
  e: (value: D) => E,
  f: (value: E) => F,
  g: (value: F) => G,
  h: (value: G) => H,
): H;
export function applyPipe<T, A, B, C, D, E, F, G, H, I>(
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
): I;
export function applyPipe<T, A, B, C, D, E, F, G, H, I, J>(
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
): J;
export function applyPipe<T, A, B, C, D, E, F, G, H, I, J, K>(
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
  k: (value: J) => K,
): K;
export function applyPipe(
  source: unknown,
  ...project: ((value: unknown) => unknown)[]
): unknown {
  for (const el of project) {
    source = el(source);
  }
  return source;
}
