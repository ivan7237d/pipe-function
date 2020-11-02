export const mapKeys = <Key, Value>(
  map: ReadonlyMap<Key, Value>,
): Iterable<Key> => map.keys();
