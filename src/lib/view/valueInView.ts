import { View } from '../types/types';

/**
 * A helper function. `applyPipe(view, valueInView)` is equivalent to
 * `applyPipe(view, ([value]) => value)`
 */
export const valueInView = <S, A>(view: View<S, A>): A => view[0];
