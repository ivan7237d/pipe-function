export const forEachInIterable = <T>(sideEffect: (value: T) => void) => (
  source: Iterable<T>,
): void => {
  for (const value of source) {
    sideEffect(value);
  }
};
