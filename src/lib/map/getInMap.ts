export const getInMap = <Key, Value>(key: Key) => (
  map: ReadonlyMap<Key, Value>,
): Value | undefined => map.get(key);
