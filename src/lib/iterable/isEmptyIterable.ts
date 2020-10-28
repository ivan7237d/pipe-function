export const isEmptyIterable = <T>(source: Iterable<T>): boolean =>
  !!source[Symbol.iterator]().next().done;
