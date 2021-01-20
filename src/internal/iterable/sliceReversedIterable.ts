/**
 * Slices a reversed iterable, yielding elements that have indexes >= `from` and
 * < `to`. Either one of the two parameters can be dropped, in which case the
 * corresponding condition will not be checked. Differs from the array `slice`
 * method in that negative values of parameters have no special meaning.
 *
 * Performance-related note: if the source iterable is an array, retrieves
 * elements by index, otherwise converts the source iterable to an array first.
 */
export const sliceReversedIterable = <T>(from?: number, to?: number) =>
  function* (source: Iterable<T>): IterableIterator<T> {
    const array = Array.isArray(source) ? source : [...source];
    const length = array.length;
    const toLocal = to === undefined ? 0 : Math.max(0, length - to);
    for (
      let index = length - (from === undefined ? 0 : Math.max(0, from)) - 1;
      index >= toLocal;
      index--
    ) {
      yield array[index];
    }
  };
