/**
 * Adds an element to a set.
 */
export const addToSet = <Value>(value: Value) => (
  set: ReadonlySet<Value>,
): Set<Value> => {
  const copy = new Set(set);
  copy.add(value);
  return copy;
};
