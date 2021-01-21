import { ShortcutReducer } from '../types/types';

/**
 * Works like the native array method or `reduce` in RxJS, except:
 *
 * - `reduceIterable(reducer, undefined)` is equivalient to
 *   `reduceIterable(reducer)`, in other words if the seed is `undefined`, the
 *   accumulator is initialized with the first value yielded by the source
 *   iterable.
 *
 * - When the source iterable is empty and the seed is not provided, instead of
 *   throwing an error, returns `undefined`.
 *
 * - If the reducer returns `undefined`, instead of assigning this value to the
 *   accumulator, we stop the iteration early.
 */
export const reduceIterable: {
  <Element>(reducer: ShortcutReducer<Element, Element>): (
    source: Iterable<Element>,
  ) => Element | undefined;
  <Accumulator, Element>(
    reducer: ShortcutReducer<
      Accumulator extends undefined ? Element : Accumulator,
      Element
    >,
    seed: Accumulator,
  ): (
    source: Iterable<Element>,
  ) => Accumulator extends undefined ? Element | undefined : Accumulator;
} = (reducer: ShortcutReducer<unknown, unknown>, seed?: unknown) => (
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
