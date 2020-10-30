export const reverseArray = function* <T>(source: T[]): Iterable<T> {
  for (let index = source.length - 1; index >= 0; index--) {
    yield source[index];
  }
};
