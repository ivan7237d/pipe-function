/**
 * Returns an array with elements from the reversed original array that have
 * indexes >= `from` and < `to`. Either one of the two parameters can be
 * dropped, in which case the corresponding condition will not be checked.
 * Differs from the native `slice` method in that negative values of parameters
 * have no special meaning. More efficient than first reversing the array and
 * then slicing it, since internally it first slices and then reverses.
 */
export const sliceReversedArray = (from?: number, to?: number) => <T>(
  source: readonly T[],
): T[] =>
  source
    .slice(
      to !== undefined ? (to <= 0 ? Number.POSITIVE_INFINITY : -to) : 0,
      from !== undefined && from > 0 ? -from : undefined,
    )
    .reverse();
