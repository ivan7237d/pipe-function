import { Reducer } from '../types/types';

/**
 * Unlike the native array method and RxJS, `undefined` accumulator values have
 * special meaning:
 *
 * - `reduceIterable(reducer, undefined)` is equivalient to
 *   `reduceIterable(reducer)`.
 *
 * - If the reducer returns `undefined`, instead of assigning this value to the
 *   accumulator, we stop the iteration early.
 */
export const reduceIterable: {
  <Element>(reducer: Reducer<Element, Element>): (
    source: Iterable<Element>,
  ) => Element | undefined;
  <Accumulator, Element>(
    reducer: Reducer<
      Accumulator extends undefined ? Element : Accumulator,
      Element
    >,
    seed: Accumulator,
  ): (
    source: Iterable<Element>,
  ) => Accumulator extends undefined ? Element | undefined : Accumulator;
} = (reducer: Reducer<unknown, unknown>, seed?: unknown) => (
  source: Iterable<unknown>,
): unknown => {
  let accumulator = seed;
  for (const value of source) {
    const nextAccumulator =
      accumulator === undefined ? value : reducer(accumulator, value);
    if (nextAccumulator === undefined) {
      return accumulator;
    }
    accumulator = nextAccumulator;
  }
  return accumulator;
};
