import { UnaryFunction } from './types';

export function applyPipe<T>(source: T): T;
export function applyPipe<T, A>(source: T, a: UnaryFunction<T, A>): A;
export function applyPipe<T, A, B>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
): B;
export function applyPipe<T, A, B, C>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
): C;
export function applyPipe<T, A, B, C, D>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
): D;
export function applyPipe<T, A, B, C, D, E>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
): E;
export function applyPipe<T, A, B, C, D, E, F>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
  f: UnaryFunction<E, F>,
): F;
export function applyPipe<T, A, B, C, D, E, F, G>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
  f: UnaryFunction<E, F>,
  g: UnaryFunction<F, G>,
): G;
export function applyPipe<T, A, B, C, D, E, F, G, H>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
  f: UnaryFunction<E, F>,
  g: UnaryFunction<F, G>,
  h: UnaryFunction<G, H>,
): H;
export function applyPipe<T, A, B, C, D, E, F, G, H, I>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
  f: UnaryFunction<E, F>,
  g: UnaryFunction<F, G>,
  h: UnaryFunction<G, H>,
  i: UnaryFunction<H, I>,
): I;
export function applyPipe<T, A, B, C, D, E, F, G, H, I, J>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
  f: UnaryFunction<E, F>,
  g: UnaryFunction<F, G>,
  h: UnaryFunction<G, H>,
  i: UnaryFunction<H, I>,
  j: UnaryFunction<I, J>,
): J;
export function applyPipe<T, A, B, C, D, E, F, G, H, I, J, K>(
  source: T,
  a: UnaryFunction<T, A>,
  b: UnaryFunction<A, B>,
  c: UnaryFunction<B, C>,
  d: UnaryFunction<C, D>,
  e: UnaryFunction<D, E>,
  f: UnaryFunction<E, F>,
  g: UnaryFunction<F, G>,
  h: UnaryFunction<G, H>,
  i: UnaryFunction<H, I>,
  j: UnaryFunction<I, J>,
  k: UnaryFunction<J, K>,
): K;
export function applyPipe(
  source: unknown,
  ...project: UnaryFunction<unknown, unknown>[]
): unknown {
  for (const el of project) {
    source = el(source);
  }
  return source;
}
