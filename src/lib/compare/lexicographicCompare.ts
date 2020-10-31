import { CompareFunction } from '../types/types';

/**
 * Compares using multiple compare functions, so that any function that comes
 * first takes priority.
 */
export const lexicographicCompare = <T>(
  ...source: CompareFunction<T>[]
): CompareFunction<T> => (to, from) => {
  for (const compareFunction of source) {
    const comparisonResult = compareFunction(to, from);
    if (comparisonResult !== 0) {
      return comparisonResult;
    }
  }
  return 0;
};
