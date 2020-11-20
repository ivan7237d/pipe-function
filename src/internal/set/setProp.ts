import { applyPipe } from '../applyPipe';
import { View } from '../types/types';
import { addToSet } from './addToSet';
import { deleteFromSet } from './deleteFromSet';

/**
 * A lens for zooming in on an element's presense in the set.
 */
export const setProp = <S, Value>(value: Value) => ([theSet, set]: readonly [
  value: ReadonlySet<Value>,
  set: (value: Set<Value>) => S,
]): View<S, boolean> => [
  theSet.has(value),
  (present) =>
    set(
      applyPipe(
        theSet,
        present ? addToSet(value) : deleteFromSet(value),
      ) as Set<Value>,
    ),
];
