/**
 * Note: returns `true` for an empty iterable.
 */
export const everyInIterable = <T>(source: Iterable<T>): boolean => {
  for (const value of source) {
    if (!value) {
      return false;
    }
  }
  return true;
};
