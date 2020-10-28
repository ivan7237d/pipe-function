/**
 * A boolean equivalent of `range`. Yields `true`, `false`, `false`, and so on.
 * Zip it (`zipIterable`) to another iterable to get an indication of whether
 * the value is the first in the sequence.
 */
export const isFirstIterable: Iterable<boolean> = {
  [Symbol.iterator]: () => {
    let first = true;
    return {
      next: () => {
        const value = first;
        first = false;
        return {
          done: false,
          value,
        };
      },
    };
  },
};
