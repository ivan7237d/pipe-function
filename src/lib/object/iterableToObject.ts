/**
 * Converts an iterable of key-value pairs to an object.
 */
export const iterableToObject = <Value>(
  source: Iterable<[key: string, value: Value]>,
): { [key: string]: Value } => {
  const result: { [key: string]: Value } = {};
  for (const [key, value] of source) {
    result[key] = value;
  }
  return result;
};
