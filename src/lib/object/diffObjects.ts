import { EqualFunction } from '../types';

/**
 * For each key that the two objects do not have equal values for, yields that
 * key along with values that the two objects have for that key (a missing value
 * is represented by `undefined`).
 */
export const diffObjects = function* <T>(
  from: { [key: string]: T },
  to: { [key: string]: T },
  equalFunction: EqualFunction<T> = (from, to) => from === to,
): Iterable<[
  key: string,
  values:
    | [from: T, to: T]
    | [from: T, to: undefined]
    | [from: undefined, to: T],
]> {
  for (const key in to) {
    if (!(key in from) || !equalFunction(from[key], to[key])) {
      yield [key, [from[key], to[key]]];
    }
  }
  for (const key in from) {
    if (!(key in to)) {
      yield [key, [from[key], undefined]];
    }
  }
};
