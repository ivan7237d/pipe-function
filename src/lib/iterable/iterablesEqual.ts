import { applyPipe } from '../applyPipe';
import { mapTuple } from '../tuple/mapTuple';
import { EqualFunction } from '../types/types';

export const iterablesEqual = <T>(
  from: Iterable<T>,
  to: Iterable<T>,
  equalFunction: EqualFunction<T> = (from, to) => from === to,
): boolean => {
  const iterators = applyPipe(
    [from, to],
    mapTuple((iterable) => iterable[Symbol.iterator]()),
  );
  while (true) {
    const [resultFrom, resultTo] = iterators.map((iter) => iter.next());
    if (resultFrom.done && resultTo.done) {
      return true;
    } else if (!resultFrom.done && !resultTo.done) {
      if (!equalFunction(resultFrom.value, resultTo.value)) {
        return false;
      }
    } else {
      return false;
    }
  }
};
