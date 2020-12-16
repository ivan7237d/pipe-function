/**
 * A utility used to typecheck that a symbol has type `never`. Throws if called.
 *
 * Example: if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1
 * ? 'one' : asNever(a)` to make sure that typecheck will fail if the type of
 * `a` changes to say `0 | 1 | 2`.
 */
export const asNever: (arg: never) => never = () => {
  throw 'asNever has been called; this means that if you use TypeScript, typecheck is failing.';
};
