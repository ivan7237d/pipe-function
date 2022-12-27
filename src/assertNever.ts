/**
 * Takes any number of arguments of type `never` and throws an error.
 */
export const assertNever: (...args: [...never[]]) => never = () => {
  throw new Error(`assertNever must never be called.`);
};
