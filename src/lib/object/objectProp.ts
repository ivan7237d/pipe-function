import { applyPipe } from '../applyPipe';
import { Lens } from '../types/types';
import { setInObject } from './setInObject';

type ObjectValue<Obj, Key extends keyof Obj> = Omit<Obj, Key> extends Obj
  ? Obj[Key] | undefined
  : undefined extends Obj[Key]
  ? never
  : Obj[Key];

/**
 * A lens for zooming in on an object's property. The setter will
 * remove the key if the value is undefined. The object must not have
 * required properties equal to undefined.
 */
export const objectProp = <
  S,
  A extends { [key: string]: unknown },
  Key extends keyof A
>(
  key: Key,
): Lens<S, A, ObjectValue<A, Key>> => ([objectValue, set]) => [
  objectValue[key] as ObjectValue<A, Key>,
  (propValue) => set(applyPipe(objectValue, setInObject(key, propValue))),
];
