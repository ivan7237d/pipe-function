import { sliceReversedArray } from './sliceReversedArray';

export const reverseArray = <T>(source: readonly T[]): T[] =>
  sliceReversedArray()(source);
