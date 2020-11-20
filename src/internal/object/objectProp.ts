import { Lens } from '../types/types';

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
  (propValue) => {
    const { ...copy } = objectValue;
    if (propValue === undefined) {
      delete copy[key];
    } else {
      copy[key] = propValue as A[Key];
    }
    return set(copy);
  },
];
