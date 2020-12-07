/**
 * Returns the last value, or `undefined` if the iterable is empty.
 */
export const lastInIterable = <T>(iterable: Iterable<T>): T | undefined => {
  let result: T | undefined = undefined;
  for (const el of iterable) {
    result = el;
  }
  return result;
};
