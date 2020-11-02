export const setInMap = <Key, Value>(key: Key, value: Value) => (
  map: ReadonlyMap<Key, Value>,
): ReadonlyMap<Key, Value> => {
  const copy = new Map(map);
  copy.set(key, value);
  return copy;
};
