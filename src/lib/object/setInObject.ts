type ObjectValue<Obj, Key extends keyof Obj> = Omit<Obj, Key> extends Obj
  ? Obj[Key] | undefined
  : undefined extends Obj[Key]
  ? never
  : Obj[Key];

/**
 * Sets a property value immutable-style. If the provided value is undefined,
 * deletes the key. The object must not have required properties equal to
 * undefined.
 */
export const setInObject = <T, Key extends keyof T>(
  key: Key,
  value: ObjectValue<T, Key>,
) => (obj: T): Readonly<T> => {
  const { ...copy } = obj;
  if (value === undefined) {
    delete copy[key];
  } else {
    copy[key] = value as T[Key];
  }
  return copy;
};
