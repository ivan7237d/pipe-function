/**
 * For each function returned by `memoizeWeak` or `memoizeStrong`, stores
 * respectively a `WeakMap` or a `Map`, either way containing cached function
 * result for a given argument.
 */
export const memoizeCache = new WeakMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  WeakMap<object, unknown> | Map<unknown, unknown>
>();
