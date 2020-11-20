/**
 * Deletes an element from a set.
 */
export const deleteFromSet = <Value>(value: Value) => (
  set: ReadonlySet<Value>,
): Set<Value> => {
  const copy = new Set(set);
  copy.delete(value);
  return copy;
};
