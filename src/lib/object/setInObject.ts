/**
 * Sets a property value immutable-style. If the provided value is undefined,
 * deletes the key.
 */
export const setInObject = <
  T,
  Key extends keyof T,
  Value extends T[Key] | undefined
>(
  key: Key,
  value: Value,
) => (
  obj: Value extends undefined ? (Omit<T, Key> extends T ? T : never) : T,
): T => {
  const { ...copy } = obj as T;
  if (value === undefined) {
    delete copy[key];
  } else {
    copy[key] = value as T[Key];
  }
  return copy;
};
