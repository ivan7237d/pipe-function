import { applyPipe } from '../applyPipe';
import { Lens } from '../types/types';
import { setInObject } from './setInObject';

/**
 * A lens for zooming in on an object's property.
 */
export const objectProp = <
  S,
  A extends { [key: string]: unknown },
  Key extends keyof A
>(
  key: Key,
): Lens<S, A, A[Key]> => ([objectValue, set]) => [
  objectValue[key],
  (propValue) => set(applyPipe(objectValue, setInObject(key, propValue))),
];
