/**
 * Combines iterables to create an iterable whose values are computed from the
 * values, in order, of each of the input iterables. Completes when any of the
 * input iterables completes. If no arguments are provided, returns an empty
 * iterable.
 */
export const zipIterables = function* <T extends unknown[]>(
  ...iterables: { [Key in keyof T]: Iterable<T[Key]> }
): IterableIterator<T> {
  if (iterables.length === 0) {
    return;
  }
  const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
  while (true) {
    const results = iterators.map((iter) => iter.next());
    if (results.some((res) => res.done)) {
      return;
    } else {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      yield results.map((res) => res.value) as T;
    }
  }
};
