/**
 * Tip: `flatMap(value => predicate(value) ? [value] : [])` often works better
 * for type inference.
 */
export const filterIterable = <T>(predicate: (value: T) => boolean) =>
  function* (source: Iterable<T>): IterableIterator<T> {
    for (const value of source) {
      if (predicate(value)) {
        yield value;
      }
    }
  };
