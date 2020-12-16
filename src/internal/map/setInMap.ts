/**
 * Diverges from the native method in that if the provided value is `undefined`,
 * the key is deleted from the map.
 *
 * Tip: if you get a typechecking error when passing a value of `undefined`,
 * replace `undefined` with `asContext(undefined)` or omit this argument.
 */
export const setInMap = <Key, Value>(key: Key, value?: Value | undefined) => (
  map: ReadonlyMap<Key, Value>,
): Map<Key, Value> => {
  const copy = new Map(map);
  if (value === undefined) {
    copy.delete(key);
  } else {
    copy.set(key, value);
  }
  return copy;
};
