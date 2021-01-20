/**
 * Slices an iterable, yielding elements that have indexes >= `from` and < `to`.
 * Either one of the two parameters can be dropped, in which case the
 * corresponding condition will not be checked. Differs from the array `slice`
 * method in that negative values of parameters have no special meaning.
 *
 * Performance-related note: if the source iterable is an array, immediately
 * skips to the starting index, otherwise throws away elements yielded by the
 * source until the starting index is reached.
 */
export const sliceIterable = <T>(from?: number, to?: number) =>
  function* (source: Iterable<T>): IterableIterator<T> {
    if (Array.isArray(source)) {
      const toLocal =
        to === undefined ? source.length : Math.min(to, source.length);
      for (
        let index = from === undefined ? 0 : Math.max(0, from);
        index < toLocal;
        index++
      ) {
        yield source[index];
      }
    } else {
      const iterator = source[Symbol.iterator]();
      if (from !== undefined) {
        for (let index = 0; index < from; index++) {
          if (iterator.next().done) {
            return;
          }
        }
      }
      const toLocal = to ?? Number.POSITIVE_INFINITY;
      for (let index = from ?? 0; index < toLocal; index++) {
        const { value, done } = iterator.next();
        if (done) {
          return;
        }
        yield value;
      }
    }
  };
