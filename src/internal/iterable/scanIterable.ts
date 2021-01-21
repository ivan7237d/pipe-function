import { PartialReducer } from '../types/types';

/**
 * Performs the same computation as `reduce`, but yields the value of the
 * accumulator after each iteration.
 */
export const scanIterable: {
  <Element>(reducer: PartialReducer<Element, Element>): (
    source: Iterable<Element>,
  ) => IterableIterator<Element>;
  <Accumulator, Element>(
    reducer: PartialReducer<
      Accumulator extends undefined ? Element : Accumulator,
      Element
    >,
    seed: Accumulator,
  ): (
    source: Iterable<Element>,
  ) => IterableIterator<Accumulator extends undefined ? Element : Accumulator>;
} = (reducer: PartialReducer<unknown, unknown>, seed?: unknown) =>
  function* (source: Iterable<unknown>): IterableIterator<unknown> {
    let accumulator = seed;
    for (const value of source) {
      const nextAccumulator =
        accumulator === undefined ? value : reducer(accumulator, value);
      if (nextAccumulator === undefined) {
        return;
      }
      yield (accumulator = nextAccumulator);
    }
    return accumulator;
  };
