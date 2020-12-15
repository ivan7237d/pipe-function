import { memoizeCache } from './cache';

/**
 * Memoizes a sigle-argument function using Map.
 *
 * Returns a version of the original function that returns a cached result if
 * the argument === one from a prior call.
 *
 * Internally uses a Map that maps arguments to results. Retaining a reference
 * to the memoized function will prevent cached arguments and results from being
 * garbage-collected, but unlike `memoizeWeak`, arguments can be primitive
 * values.
 */
export const memoizeStrong = <From, To>(
  project: (arg: From) => To,
): ((arg: From) => To) => {
  const cache = new Map<From, To>();
  const decorated = (arg: From): To =>
    cache.has(arg)
      ? (cache.get(arg) as To)
      : (() => {
          const result = project(arg);
          cache.set(arg, result);
          return result;
        })();
  memoizeCache.set(decorated, cache);
  return decorated;
};
