/**
 * Unlike `Object.keys` native method, returns an iterable, not an array.
 */
export const objectKeys = function* <T>(source: T): Iterable<keyof T> {
  for (const key in source) {
    yield key;
  }
};
