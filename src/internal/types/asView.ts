import { as } from './as';
import { View } from './types';

/**
 * An identity function that downcasts a value to a `View`.
 */
export const asView: <S, A>(value: View<S, A>) => View<S, A> = as;
