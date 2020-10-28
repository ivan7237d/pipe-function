export const concatIterable = function* <T extends unknown[]>(
  ...iterables: { [Key in keyof T]: Iterable<T[Key]> }
): Iterable<T[number]> {
  for (const iterable of iterables) {
    for (const value of iterable) {
      yield value;
    }
  }
};
