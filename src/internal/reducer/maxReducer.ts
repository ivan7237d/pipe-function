import { Reducer } from '../types/types';

export const maxReducer: Reducer<number, number> = (accumulator, value) =>
  Math.max(accumulator, value);
