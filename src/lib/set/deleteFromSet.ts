/**
 * Deletes an element from a set.
 */
export const deleteFromSet = <Value>(value: Value) => (
  set: ReadonlySet<Value>,
): ReadonlySet<Value> => {
  const copy = new Set(set);
  copy.delete(value);
  return copy;
};
