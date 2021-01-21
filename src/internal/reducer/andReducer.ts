import { ShortcutReducer } from '../types/types';

export const andReducer: ShortcutReducer<boolean, boolean> = (
  accumulator,
  value,
) => (accumulator ? value : undefined);
