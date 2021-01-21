import { as } from './as';
import { ShortcutReducer } from './types';

/**
 * An identity function that downcasts a value to a `ShortcutReducer`.
 */
export const asShortcutReducer: <Accumulator, Element>(
  value: ShortcutReducer<Accumulator, Element>,
) => ShortcutReducer<Accumulator, Element> = as;
