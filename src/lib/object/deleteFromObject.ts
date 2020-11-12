/**
 * Deletes a key from an object.
 */
export const deleteFromObject = <T, Key extends keyof T>(key: Key) => (
  obj: Omit<T, Key> extends T ? T : never,
): T => {
  const { [key]: value, ...copy } = obj;
  return (copy as unknown) as T;
};
