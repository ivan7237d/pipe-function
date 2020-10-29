/**
 * Slices an array, yielding elements that have indexes >= `from` and < `to`.
 * Either one of the two parameters can be dropped, in which case the
 * corresponding condition will not be checked. Differs from the native `slice`
 * method in that negative values of parameters have no special meaning.
 */
export const sliceArrayIterable = (from?: number, to?: number) =>
  function* <T>(source: T[]): Iterable<T> {
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
