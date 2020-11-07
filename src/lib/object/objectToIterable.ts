/**
 * Converts an object to an iterable of key-value pairs.
 */
export const objectToIterable = function* <T>(
  source: T,
): Iterable<readonly [keyof T, T[keyof T]]> {
  for (const key in source) {
    yield [key, source[key]];
  }
};
