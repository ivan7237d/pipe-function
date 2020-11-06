/**
 * Diverges from the native method in that if the provided value is `undefined`,
 * the key is deleted from the map.
 */
export const setInMap = <Key, Value, ValueArg extends Value>(
  key: Key,
  value: ValueArg | undefined,
) => (map: ReadonlyMap<Key, Value>): ReadonlyMap<Key, Value> => {
  const copy = new Map(map);
  if (value === undefined) {
    copy.delete(key);
  } else {
    copy.set(key, value);
  }
  return copy;
};
