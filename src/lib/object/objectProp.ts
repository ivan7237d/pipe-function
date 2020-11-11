import { applyPipe } from '../applyPipe';
import { Lens } from '../types/types';
import { setInObject } from './setInObject';

/**
 * A lens for zooming in on an object's property. The setter will remove the key
 * if the value is undefined.
 */
export const objectProp = <S, A, Key extends keyof A>(
  key: Key,
): Lens<
  S,
  A,
  Omit<A, Key> extends A
    ? A[Key] | undefined
    : undefined extends A[Key]
    ? never
    : A[Key]
> => ([objectValue, set]) => [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objectValue[key] as any,
  (propValue) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set(applyPipe(objectValue as any, setInObject(key, propValue))),
];
