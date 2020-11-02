/**
 * Deletes a key from a map.
 */
export const deleteFromMap = <Key, Value>(key: Key) => (
  map: ReadonlyMap<Key, Value>,
): ReadonlyMap<Key, Value> => {
  const copy = new Map(map);
  copy.delete(key);
  return copy;
};
