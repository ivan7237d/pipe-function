export const countInIterable = (source: Iterable<unknown>) => {
  let index = 0;
  const iterator = source[Symbol.iterator]();
  while (true) {
    if (iterator.next().done) {
      return index;
    }
    index++;
  }
};
