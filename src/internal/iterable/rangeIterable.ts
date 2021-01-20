/**
 * Tip: zip (`zipIterable`) the returned value to another iterable to enumerate
 * that iterable.
 */
export const rangeIterable = function* (
  from = 0,
  to?: number,
  step = 1,
): IterableIterator<number> {
  for (
    let index = from;
    to === undefined || step === 0 || (step > 0 ? index < to : index > to);
    index += step
  ) {
    yield index;
  }
};
