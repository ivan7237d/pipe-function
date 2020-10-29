import { CompareFunction } from '../types';

/**
 * Compares strings using `String`'s `localeCompare` method.
 */
export const stringLocaleCompare = (
  locales?: string | string[],
  options?: Intl.CollatorOptions,
): CompareFunction<string> => (to, from) =>
  to.localeCompare(from, locales, options);
