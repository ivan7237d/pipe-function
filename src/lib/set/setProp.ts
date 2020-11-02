import { applyPipe } from '../applyPipe';
import { Lens } from '../types/types';
import { addToSet } from './addToSet';
import { deleteFromSet } from './deleteFromSet';

/**
 * A lens for zooming in on an element's presense in the set.
 */
export const setProp = <S, Value>(
  value: Value,
): Lens<S, ReadonlySet<Value>, boolean> => ([theSet, set]) => [
  theSet.has(value),
  (present) =>
    set(applyPipe(theSet, present ? addToSet(value) : deleteFromSet(value))),
];
