import { as } from './as';
import { PartialReducer } from './types';

/**
 * An identity function that downcasts a value to a `PartialReducer`.
 */
export const asPartialReducer: <Accumulator, Element>(
  value: PartialReducer<Accumulator, Element>,
) => PartialReducer<Accumulator, Element> = as;
