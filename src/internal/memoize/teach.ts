import { memoizeCache } from './cache';

/**
 * When the result of a function memoized with `memoizeWeak` or `memoizeStrong`
 * is known from an external source such as persisted storage, allows to cache
 * this result without calling the function.
 */
export const teach = <From, To>(
  project: (arg: From) => To,
  from: From,
  to: To,
): void => {
  const cache = memoizeCache.get(project);
  if (cache === undefined) {
    throw Error(
      `teach() must be called with a function returned by memoizeWeak() or memoizeStrong().`,
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions
  if (!cache.has(from as any)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions
    cache.set(from as any, to);
  }
};
