/**
 * Returns the last value, or `undefined` if the iterable is empty. If
 * the iterable is an array, retrieves the last value by index, otherwise
 * iterates to the end.
 */
export const lastInIterable = <T>(iterable: Iterable<T>): T | undefined => {
  if (Array.isArray(iterable)) {
    return iterable[iterable.length - 1];
  }
  let result: T | undefined = undefined;
  // eslint-disable-next-line no-empty
  for (result of iterable) {
  }
  return result;
};
