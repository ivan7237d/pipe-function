import { CompareFunction } from '../types/types';

export const numberCompare: CompareFunction<number> = (to, from) => to - from;
