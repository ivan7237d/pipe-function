import { applyPipe } from '../applyPipe';

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

const f = <T>(s: Set<T>) => {};
f(applyPipe(new Set([1]), addToSet(1)));
const g = <T>(s: ReadonlySet<T>) => {};
g(applyPipe(new Set([1]), addToSet(1)));
