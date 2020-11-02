import { EqualFunction } from '../types/types';

export const mapsEqual = <Key, Value>(
  from: ReadonlyMap<Key, Value>,
  to: ReadonlyMap<Key, Value>,
  equalFunction: EqualFunction<Value> = (from, to) => from === to,
) => {
  for (const [key, value] of to) {
    if (!(from.has(key) && equalFunction(from.get(key) as Value, value))) {
      return false;
    }
  }
  for (const key of from.keys()) {
    if (!to.has(key)) {
      return false;
    }
  }
  return true;
};
