interface ObjectFromEntries {
  <Key extends string | number | symbol, Value>(
    source: Iterable<readonly [key: Key, value: Value]>,
  ): Record<Key, Value>;
}

export const objectFromEntriesPonyfill = ((source) => {
  const result = {} as Record<string | number | symbol, unknown>;
  for (const [key, value] of source) {
    result[key] = value;
  }
  return result;
}) as ObjectFromEntries;

/**
 * Converts an iterable of key-value pairs to an object. The same as
 * Object.fromEntries, but is better typed.
 */
export const objectFromEntries: ObjectFromEntries =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Object as any).fromEntries ?? objectFromEntriesPonyfill;
