import { CompareFunction } from '../types';

export const booleanCompare: CompareFunction<boolean> = (to, from) =>
  to ? (from ? 0 : 1) : from ? -1 : 0;
