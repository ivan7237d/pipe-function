export interface CompareFunction<T> {
  (to: T, from: T): number;
}
export interface EqualFunction<T> {
  (from: T, to: T): boolean;
}
export interface Reducer<Accumulator, Element> {
  (accumulator: Accumulator, element: Element): Accumulator;
}
/**
 * A reducer which can return `undefined` to indicate that the current value of
 * the accumulator should be used as the final result.
 */
export interface PartialReducer<Accumulator, Element> {
  (accumulator: Accumulator, element: Element): Accumulator | undefined;
}
export interface View<S, A> {
  get: () => A;
  set: (value: A) => S;
}
export type StateView<A> = View<void, A>;
export interface Lens<S, A, B> {
  (source: View<S, A>): View<S, B>;
}
