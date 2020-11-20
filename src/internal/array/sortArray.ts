import { CompareFunction } from '../types/types';

export const sortArray = <T>(compareFunction: CompareFunction<T>) => (
  arr: readonly T[],
): T[] => {
  const copy = [...arr];
  copy.sort(compareFunction);
  return copy;
};
