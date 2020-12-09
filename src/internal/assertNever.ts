/**
 * Utility used to typecheck that a conditional has exhausted all possibilities,
 * e.g. if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1 ?
 * 'one' : assertNever(a)`.
 */
export const assertNever: (arg: never) => never = () => {
  throw 'assertNever';
};
