/**
 * Converts an iterable of key-value pairs to an object. The same as
 * Object.fromEntries, but is better typed.
 */
export const objectFromEntries = <Key extends string | number | symbol, Value>(
  source: Iterable<readonly [key: Key, value: Value]>,
): Record<Key, Value> => {
  const result = {} as Record<Key, Value>;
  for (const [key, value] of source) {
    result[key] = value;
  }
  return result;
};
