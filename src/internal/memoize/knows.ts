import { memoizeCache } from './cache';

/**
 * For a function decorated with `memoizeWeak` or `memoizeStrong`, checks
 * whether the cache contains the result for a given argument.
 */
export const knows = <From>(
  project: (arg: From) => unknown,
  from: From,
): boolean => {
  const cache = memoizeCache.get(project);
  if (cache === undefined) {
    throw Error(
      `teach() must be called with a function returned by memoizeWeak() or memoizeStrong().`,
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions
  return cache.has(from as any);
};
