/**
 * Deletes an element from a set.
 */
export const setHas = <Value>(value: Value) => (
  set: ReadonlySet<Value>,
): boolean => set.has(value);
