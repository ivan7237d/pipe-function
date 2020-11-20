/**
 * Continues iteration only while the provided predicate holds. If `inclusive`
 * is true, also emits the value that failed the predicate.
 */
export const takeWhileIterable = <T>(
  predicate: (value: T) => boolean,
  inclusive = false,
) =>
  function* (source: Iterable<T>): Iterable<T> {
    for (const value of source) {
      if (predicate(value)) {
        yield value;
      } else {
        if (inclusive) {
          yield value;
        }
        break;
      }
    }
  };
