export type CompareFunction<T> = (to: T, from: T) => number;
export type EqualFunction<T> = (from: T, to: T) => boolean;
export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator | undefined;
export type View<S, A> = { get: () => A; set: (value: A) => S };
export type StateView<A> = View<void, A>;
export type Lens<S, A, B> = (source: View<S, A>) => View<S, B>;
