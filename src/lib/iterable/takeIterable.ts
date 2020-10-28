/**
 * Emits only the first `count` values emitted by the source.
 */
export const takeIterable = <T>(count: number) =>
  function* (source: Iterable<T>): Iterable<T> {
    let index = 0;
    for (const value of source) {
      if (index++ >= count) {
        break;
      }
      yield value;
    }
  };
