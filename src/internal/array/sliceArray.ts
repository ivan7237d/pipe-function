/**
 * Slices an array, yielding elements that have indexes >= `from` and < `to`.
 * Either one of the two parameters can be dropped, in which case the
 * corresponding condition will not be checked. Differs from the native `slice`
 * method in that negative values of parameters have no special meaning.
 *
 * If you are working with a very large array and do not need to stop the
 * iteration early, you may prefer using the native method for better
 * performance.
 */
export const sliceArray = (from?: number, to?: number) =>
  function* <T>(source: readonly T[]): Iterable<T> {
    const toLocal =
      to === undefined ? source.length : Math.min(to, source.length);
    for (
      let index = from === undefined ? 0 : Math.max(0, from);
      index < toLocal;
      index++
    ) {
      yield source[index];
    }
  };
