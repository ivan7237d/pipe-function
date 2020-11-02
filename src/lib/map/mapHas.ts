export const mapHas = <Key, Value>(key: Key) => (
  map: ReadonlyMap<Key, Value>,
): boolean => map.has(key);
