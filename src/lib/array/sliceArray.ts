/**
 * Slices an array, returning an array with elements from the original array
 * that have indexes >= `from` and < `to`. Either one of the two parameters can
 * be dropped, in which case the corresponding condition will not be checked.
 * Differs from the native `slice` method in that negative values of parameters
 * have no special meaning.
 */
export const sliceArray = (from?: number, to?: number) => <T>(
  source: T[],
): T[] =>
  source.slice(
    from === undefined ? undefined : Math.max(0, from),
    to === undefined ? undefined : Math.max(0, to),
  );
