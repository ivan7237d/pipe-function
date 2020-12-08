/**
 * Returns the last value, or `undefined` if the iterable is empty.
 */
export const lastInIterable = <T>(iterable: Iterable<T>): T | undefined => {
  let result: T | undefined = undefined;
  // eslint-disable-next-line no-empty
  for (result of iterable) {
  }
  return result;
};
