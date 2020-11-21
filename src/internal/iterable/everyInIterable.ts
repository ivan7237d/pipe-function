/**
 * Note: returns `true` for an empty iterable.
 */
export const everyInIterable = (source: Iterable<boolean>): boolean => {
  for (const value of source) {
    if (!value) {
      return false;
    }
  }
  return true;
};
