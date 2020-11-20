import { EqualFunction } from '../types/types';

export const objectsEqual = <T>(
  from: T,
  to: T,
  equalFunction: EqualFunction<T[keyof T]> = (from, to) => from === to,
): boolean => {
  for (const key in to) {
    if (!(key in from && equalFunction(from[key], to[key]))) {
      return false;
    }
  }
  for (const key in from) {
    if (!(key in to)) {
      return false;
    }
  }
  return true;
};
