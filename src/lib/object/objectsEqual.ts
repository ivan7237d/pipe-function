import { EqualFunction } from '../types/types';

export const objectsEqual = <T>(
  from: { [key: string]: T },
  to: { [key: string]: T },
  equalFunction: EqualFunction<T> = (from, to) => from === to,
) => {
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
