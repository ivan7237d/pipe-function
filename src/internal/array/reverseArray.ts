/**
 * If you are working with a very large array and do not need to stop the
 * iteration early, you may prefer using the native method for better
 * performance.
 */
export const reverseArray = function* <T>(source: readonly T[]): Iterable<T> {
  for (let index = source.length - 1; index >= 0; index--) {
    yield source[index];
  }
};
