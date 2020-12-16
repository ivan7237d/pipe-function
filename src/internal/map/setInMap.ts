/**
 * Diverges from the native method in that if the provided value is `undefined`,
 * the key is deleted from the map.
 */
export const setInMap = <Key, Value, NewValue extends Value>(
  key: Key,
  value: NewValue | undefined,
) => (map: ReadonlyMap<Key, Value>): Map<Key, Value> => {
  const copy = new Map(map);
  if (value === undefined) {
    copy.delete(key);
  } else {
    copy.set(key, value);
  }
  return copy;
};
