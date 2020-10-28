export type UnaryFunction<From, To> = (source: From) => To;
export type MonoTypeUnaryFunction<T> = UnaryFunction<T, T>;
export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator;
