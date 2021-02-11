import { EqualFunction } from '../types/types';

/**
 * For each key that the two maps do not have equal values for, yields that key
 * along with values that the two maps have for that key (a missing value is
 * represented by `undefined`).
 */
export const diffMaps = function* <Key, Value>(
  from: ReadonlyMap<Key, Value>,
  to: ReadonlyMap<Key, Value>,
  equalFunction: EqualFunction<Value> = (from, to) => from === to,
): Iterable<
  [
    key: Key,
    values:
      | [from: Value, to: Value]
      | [from: Value, to: undefined]
      | [from: undefined, to: Value],
  ]
> {
  for (const key of to.keys()) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (!from.has(key) || !equalFunction(from.get(key)!, to.get(key)!)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      yield [key, [from.get(key)!, to.get(key)!]];
    }
  }
  for (const key of from.keys()) {
    if (!to.has(key)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      yield [key, [from.get(key)!, undefined]];
    }
  }
};
