/**
 * Unlike `Object.keys` native method, returns an iterable, not an array.
 * Iterates using a for-in loop.
 */
export const objectKeys = function* <T>(
  source: T,
): Iterable<Extract<keyof T, string>> {
  for (const key in source) {
    yield key;
  }
};
