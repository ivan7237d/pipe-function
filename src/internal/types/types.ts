export type CompareFunction<T> = (to: T, from: T) => number;
export type EqualFunction<T> = (from: T, to: T) => boolean;
export type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator;
/**
 * A reducer which can return `undefined` to indicate that the accumulator will
 * not change with further iterations and therefore the iteration can be cut
 * short.
 */
export type ShortcutReducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator | undefined;
export type View<S, A> = { get: () => A; set: (value: A) => S };
export type StateView<A> = View<void, A>;
export type Lens<S, A, B> = (source: View<S, A>) => View<S, B>;
