export type CompareFunction<T> = (to: T, from: T) => number;
export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator;
