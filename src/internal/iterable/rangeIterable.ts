/**
 * Tip: zip (`zipIterable`) the returned value to another iterable to enumerate
 * that iterable.
 */
export const rangeIterable = function* (
  from = 0,
  to?: number,
  step = 1,
): Iterable<number> {
  for (let index = from; to === undefined || index < to; index += step) {
    yield index;
  }
};
