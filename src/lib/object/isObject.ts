/**
 * Returns false for functions and nulls.
 */
export const isObject = (value: unknown): value is { [key: string]: unknown } =>
  typeof value === 'object' && value !== null;
