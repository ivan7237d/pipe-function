import { CompareFunction } from '../types/types';

/**
 * Reverses a compare function.
 */
export const reverseCompare = <T>(
  compare: CompareFunction<T>,
): CompareFunction<T> => (to, from) => -compare(to, from);
