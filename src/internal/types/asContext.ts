import { as } from './as';

/**
 * An identity function that can be used to infer the type of a value from the
 * context instead of the other way around.
 */
export const asContext: <A, B extends A>(value: B) => A = as;
