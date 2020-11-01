import { View } from '../types/types';

/**
 * A helper function. `applyPipe(view, mapInView(value => value + 1))` is equivalent to
 * `applyPipe(view, ([value, set]) => set(value + 1))`
 */
export const mapInView = <S, A>(project: (from: A) => A) => ([value, set]: View<
  S,
  A
>): S => set(project(value));
