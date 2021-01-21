import { PartialReducer } from '../types/types';

export const orReducer: PartialReducer<boolean, boolean> = (
  accumulator,
  value,
) => (accumulator ? undefined : value);
