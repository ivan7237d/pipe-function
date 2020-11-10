import { CompareFunction } from '../types/types';

/**
 * Compares string using inequality operator. Often it's better to use
 * `(to, from) => to.localeCompare(from)`.
 */
export const stringCompare: CompareFunction<string> = (to, from) =>
  to < from ? -1 : to > from ? 1 : 0;
