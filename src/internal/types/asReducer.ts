import { as } from './as';
import { Reducer } from './types';

/**
 * An identity function that downcasts a value to a `Reducer`.
 */
export const asReducer: <Accumulator, Element>(
  value: Reducer<Accumulator, Element>,
) => Reducer<Accumulator, Element> = as;
