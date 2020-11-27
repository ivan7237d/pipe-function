/**
 * Returns a function that memoizes the result of the original function using
 * WeakMap, and a function that allows to store the result that the original
 * function should return without actually performing the computation, for cases
 * when this result is known from an external source.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const memoize = <From extends object, To>(
  project: (arg: From) => To,
): [decorated: (arg: From) => To, teach: (from: From, to: To) => void] => {
  const cache = new WeakMap<From, To>();
  return [
    (arg: From) =>
      cache.has(arg)
        ? (cache.get(arg) as To)
        : (() => {
            const result = project(arg);
            cache.set(arg, result);
            return result;
          })(),
    (from: From, to: To) => {
      cache.set(from, to);
    },
  ];
};
