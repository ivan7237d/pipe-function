import { ShortcutReducer } from '../types/types';

export const orReducer: ShortcutReducer<boolean, boolean> = (
  accumulator,
  value,
) => (accumulator ? undefined : value);
