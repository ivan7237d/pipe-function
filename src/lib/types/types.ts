export type CompareFunction<T> = (to: T, from: T) => number;
export type EqualFunction<T> = (from: T, to: T) => boolean;
export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator;
export type ValueWithSetter<S, A> = [value: A, set: (value: A) => S];
export type Binding<A> = ValueWithSetter<void, A>;
export type Lens<S, A, B> = (
  source: ValueWithSetter<S, A>,
) => ValueWithSetter<S, B>;
