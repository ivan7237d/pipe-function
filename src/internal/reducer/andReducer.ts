import { PartialReducer } from '../types/types';

export const andReducer: PartialReducer<boolean, boolean> = (
  accumulator,
  value,
) => (accumulator ? value : undefined);
