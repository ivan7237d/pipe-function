import { Reducer } from '../types/types';

export const reduceIterable = <Accumulator, Value>(
  reducer: Reducer<Accumulator, Value>,
  seed: Accumulator,
) => (source: Iterable<Value>): Accumulator => {
  let accumulator = seed;
  for (const value of source) {
    accumulator = reducer(accumulator, value);
  }
  return accumulator;
};
