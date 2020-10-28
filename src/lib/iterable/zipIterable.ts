/**
 * Combines iterables to create an iterable whose values are computed from the
 * values, in order, of each of the input iterables. If no arguments are
 * provided, returns an empty iterable.
 */
export const zipIterable = function* <T extends unknown[]>(
  ...iterables: { [Key in keyof T]: Iterable<T[Key]> }
): Iterable<T> {
  if (iterables.length === 0) {
    return;
  }
  const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
  while (true) {
    const results = iterators.map((iter) => iter.next());
    if (results.some((res) => res.done)) {
      return;
    } else {
      yield results.map((res) => res.value) as T;
    }
  }
};
