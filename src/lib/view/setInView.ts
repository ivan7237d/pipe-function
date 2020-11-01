import { View } from '../types/types';

/**
 * A helper function. `applyPipe(view, setInView(value))` is equivalent to
 * `applyPipe(view, ([, set]) => set(value))`
 */
export const setInView = <S, A, A2 extends A>(value: A2) => (
  view: View<S, A>,
): S => view[1](value);
