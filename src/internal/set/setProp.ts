import { applyPipe } from '../applyPipe';
import { View } from '../types/types';
import { addToSet } from './addToSet';
import { deleteFromSet } from './deleteFromSet';

/**
 * A lens for zooming in on an element's presense in the set.
 */
export const setProp = <S, Value>(value: Value) => ({
  get,
  set,
}: {
  get: () => ReadonlySet<Value>;
  set: (value: Set<Value>) => S;
}): View<S, boolean> => ({
  get: () => get().has(value),
  set: (present) =>
    set(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      applyPipe(
        get(),
        present ? addToSet(value) : deleteFromSet(value),
      ) as Set<Value>,
    ),
});
