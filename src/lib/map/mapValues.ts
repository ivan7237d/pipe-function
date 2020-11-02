export const mapValues = <Key, Value>(
  map: ReadonlyMap<Key, Value>,
): Iterable<Value> => map.values();
