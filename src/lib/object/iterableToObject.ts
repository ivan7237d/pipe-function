/**
 * Converts an iterable of key-value pairs to an object, throwing away undefined
 * values.
 */
export const iterableToObject = <Value>(
  source: Iterable<[key: string, value: Value | undefined]>,
): { [key: string]: Value } => {
  const result: { [key: string]: Value } = {};
  for (const [key, value] of source) {
    if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};
