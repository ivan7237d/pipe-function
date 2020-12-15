import { memoizeCache } from './cache';

/**
 * Memoizes a sigle-argument function using WeakMap.
 *
 * Returns a version of the original function that returns a cached result if
 * the argument === one from a prior call.
 *
 * Internally uses a WeakMap that maps arguments to results. This has an
 * advantage that retaining a reference to the memoized function will not
 * prevent cached arguments and results from being garbage-collected, but since
 * arguments are used as keys in a WeakMap, they must be objects, not primitive
 * values.
 */
export const memoizeWeak =
  // eslint-disable-next-line @typescript-eslint/ban-types
  <From extends object, To>(
    project: (arg: From) => To,
  ): ((arg: From) => To) => {
    const cache = new WeakMap<From, To>();
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
