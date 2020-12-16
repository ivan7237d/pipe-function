import { as } from './as';
import { StateView } from './types';

/**
 * An identity function that downcasts a value to a `StateView`.
 */
export const asStateView: <A>(value: StateView<A>) => StateView<A> = as;
