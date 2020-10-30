/**
 * Returns false for functions and nulls.
 */
export const isObject = (value: unknown) =>
  typeof value === 'object' && value !== null;
