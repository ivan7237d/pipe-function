export const objectKeys = function* (source: {
  [key: string]: unknown;
}): Iterable<string> {
  for (const key in source) {
    yield key;
  }
};
