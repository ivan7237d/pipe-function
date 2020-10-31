export const objectValues = function* <Value>(source: {
  [key: string]: Value;
}): Iterable<Value> {
  for (const key in source) {
    yield source[key];
  }
};
