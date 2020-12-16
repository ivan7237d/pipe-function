import { as } from './as';
import { EqualFunction } from './types';

/**
 * An identity function that downcasts a value to an `EqualFunction`.
 */
export const asEqualFunction: <T>(
  value: EqualFunction<T>,
) => EqualFunction<T> = as;
