import { as } from './as';
import { CompareFunction } from './types';

/**
 * An identity function that downcasts a value to a `CompareFunction`.
 */
export const asCompareFunction: <T>(
  value: CompareFunction<T>,
) => CompareFunction<T> = as;
