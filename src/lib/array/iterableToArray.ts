export const iterableToArray = <T>(source: Iterable<T>): readonly T[] => [
  ...source,
];
