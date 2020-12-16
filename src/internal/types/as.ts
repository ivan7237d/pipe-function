/**
 * An identity function that can be used to downcast a value to a non-generic
 * type.
 */
export const as = <T>(value: T): T => value;
