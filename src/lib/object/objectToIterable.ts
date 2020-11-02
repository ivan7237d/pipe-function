/**
 * Converts an object to an iterable of key-value pairs.
 */
export const objectToIterable = function* <Value>(source: {
  [key: string]: Value;
}): Iterable<readonly [string, Value]> {
  for (const key in source) {
    yield [key, source[key]];
  }
};
