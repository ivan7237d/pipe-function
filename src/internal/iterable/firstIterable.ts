/**
 * A boolean equivalent of `range`. Yields `true`, `false`, `false`, and so on.
 * Zip it (`zipIterable`) to another iterable to get an indication of whether
 * the value is the first in the sequence.
 */
export const firstIterable = function* (): IterableIterator<boolean> {
  yield true;
  while (true) {
    yield false;
  }
};
