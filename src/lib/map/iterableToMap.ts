export const iterableToMap = <Key, Value>(
  source: Iterable<readonly [key: Key, value: Value]>,
): ReadonlyMap<Key, Value> => new Map(source);
