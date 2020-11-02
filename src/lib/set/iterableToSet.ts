export const iterableToSet = <Value>(
  source: Iterable<Value>,
): ReadonlySet<Value> => new Set(source);
