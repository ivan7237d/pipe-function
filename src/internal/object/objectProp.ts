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
> => ({ get, set }) => ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
  get: () => get()[key] as any,
  set: (propValue) => {
    const { ...copy } = get();
    if (propValue === undefined) {
      delete copy[key];
    } else {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      copy[key] = propValue as A[Key];
    }
    return set(copy);
  },
});
