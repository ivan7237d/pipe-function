export const objectValues = function* <T>(source: T): Iterable<T[keyof T]> {
  for (const key in source) {
    yield source[key];
  }
};
