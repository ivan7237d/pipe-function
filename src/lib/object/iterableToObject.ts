/**
 * Converts an iterable of key-value pairs to an object.
 */
export const iterableToObject = <Key extends string | number | symbol, Value>(
  source: Iterable<[key: Key, value: Value]>,
): Readonly<Record<Key, Value>> => {
  const result = {} as Record<Key, Value>;
  for (const [key, value] of source) {
    result[key] = value;
  }
  return result;
};
