/**
 * Unlike `Object.values` native method, returns an iterable, not an array.
 * Iterates using a for-in loop.
 */
export const objectValues = function* <T>(
  source: T,
): Iterable<T[Extract<keyof T, string>]> {
  for (const key in source) {
    yield source[key];
  }
};
