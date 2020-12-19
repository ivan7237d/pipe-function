/**
 * A utility used to typecheck that a symbol has type `never` and therefore the
 * call site is unreachable. Throws if called.
 *
 * Example: if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1
 * ? 'one' : asNever(a)` to make sure that all possibilities for `a` have been
 * exhausted. If the type of `a` changes to say `0 | 1 | 2`, the type of the
 * argument passed to `asNever` will be inferred as `2`, and this will cause a
 * typechecking error because the only type assignable to `never` is `never`
 * itself.
 */
export const asNever: (arg: never) => never = () => {
  throw 'asNever has been called; this means that if you use TypeScript, typecheck is failing.';
};
