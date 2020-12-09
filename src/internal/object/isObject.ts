/**
 * Returns false for functions and nulls.
 */
export const isObject = (value: unknown): boolean =>
  typeof value === 'object' && value !== null;
