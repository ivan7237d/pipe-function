import { Reducer } from '../types/types';

export const sumReducer: Reducer<number, number> = (accumulator, value) =>
  accumulator + value;
