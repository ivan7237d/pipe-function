export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator;
