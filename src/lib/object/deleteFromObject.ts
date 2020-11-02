/**
 * Deletes a key from an object.
 */
export const deleteFromObject = <
  T extends { [key: string]: unknown },
  Key extends keyof T
>(
  key: Key,
) => (obj: T & { key?: T[Key] }): Readonly<Pick<T, Exclude<keyof T, Key>>> => {
  const { [key]: value, ...copy } = obj;
  return copy;
};
