export const objectKeys = function* <T>(source: T): Iterable<keyof T> {
  for (const key in source) {
    yield key;
  }
};
