/**
 * As long as the value is not `undefined`, yields it, updates it with the
 * provided function, and repeats. Example:
 *
 * ```
 * const even = expandIterable((value) => !value, false);
 * ```
 */
export const expandIterable = function* <T>(
  project: (value: T) => T | undefined,
  seed?: T,
): Iterable<T> {
  let value = seed;
  while (true) {
    if (value === undefined) {
      return;
    }
    yield value;
    value = project(value);
  }
};
