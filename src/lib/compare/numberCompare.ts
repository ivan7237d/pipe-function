import { CompareFunction } from '../types';

export const numberCompare: CompareFunction<number> = (to, from) => to - from;
