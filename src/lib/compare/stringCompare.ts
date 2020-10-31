import { CompareFunction } from '../types/types';

/**
 * Compares string using inequality operator. See also `stringLocaleCompare`.
 */
export const stringCompare: CompareFunction<string> = (to, from) =>
  to < from ? -1 : to > from ? 1 : 0;
