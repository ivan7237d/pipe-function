/**
 * Adds an element to a set.
 */
export const addToSet = <Value>(value: Value) => (
  set: ReadonlySet<Value>,
): Set<Value> => new Set(set).add(value);
