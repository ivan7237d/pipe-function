import { CompareFunction } from '../types/types';

export const booleanCompare: CompareFunction<boolean> = (to, from) =>
  to ? (from ? 0 : 1) : from ? -1 : 0;
