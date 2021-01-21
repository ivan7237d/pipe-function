import { Reducer } from '../types/types';

export const countReducer: Reducer<number, number> = (accumulator) =>
  accumulator + 1;
