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
  readonly [
    key: Key,
    values:
      | readonly [from: Value, to: Value]
      | readonly [from: Value, to: undefined]
      | readonly [from: undefined, to: Value],
  ]
> {
  for (const key of to.keys()) {
    if (
      !from.has(key) ||
      !equalFunction(from.get(key) as Value, to.get(key) as Value)
    ) {
      yield [key, [from.get(key) as Value, to.get(key) as Value]];
    }
  }
  for (const key of from.keys()) {
    if (!to.has(key)) {
      yield [key, [from.get(key) as Value, undefined]];
    }
  }
};
