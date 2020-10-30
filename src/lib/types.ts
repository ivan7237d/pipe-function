export type CompareFunction<T> = (to: T, from: T) => number;
export type EqualFunction<T> = (from: T, to: T) => boolean;
export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator;
