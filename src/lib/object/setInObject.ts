/**
 * Sets a property value immutable-style.
 */
export const setInObject = <
  T extends { [key: string]: unknown },
  Key extends keyof T
>(
  key: Key,
  value: T[Key],
) => (obj: T): Readonly<T> => ({ ...obj, [key]: value });
