import { Reducer } from '../types/types';

export const minReducer: Reducer<number, number> = (accumulator, value) =>
  Math.min(accumulator, value);
