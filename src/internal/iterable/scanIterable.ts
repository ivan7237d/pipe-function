import { Reducer } from '../types/types';

/**
 * Performs the same computation as `reduce`, but emits the value of the
 * accumulator after each iteration.
 */
export const scanIterable = <Accumulator, Element>(
  reducer: Reducer<Accumulator, Element>,
  seed: Accumulator,
) =>
  function* (source: Iterable<Element>): Iterable<Accumulator> {
    let accumulator = seed;
    for (const element of source) {
      accumulator = reducer(accumulator, element);
      yield accumulator;
    }
  };
