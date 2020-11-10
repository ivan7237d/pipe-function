/**
 * Unlike `Object.entries` native method, returns an iterable, not an array.
 * Iterates using a for-in loop.
 */
export const objectEntries = function* <T>(
  source: T,
): Iterable<readonly [Extract<keyof T, string>, T[Extract<keyof T, string>]]> {
  for (const key in source) {
    yield [key, source[key]];
  }
};
