import { sliceReversedIterable } from './sliceReversedIterable';

/**
 * Performance-related note: if the source iterable is an array, retrieves
 * elements by index, otherwise converts the source iterable to an array first.
 */
export const reverseIterable = <T>(source: Iterable<T>): IterableIterator<T> =>
  sliceReversedIterable<T>()(source);
