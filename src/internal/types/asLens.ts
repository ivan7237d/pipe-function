import { as } from './as';
import { Lens } from './types';

/**
 * An identity function that downcasts a value to a `Lens`.
 */
export const asLens: <S, A, B>(value: Lens<S, A, B>) => Lens<S, A, B> = as;
