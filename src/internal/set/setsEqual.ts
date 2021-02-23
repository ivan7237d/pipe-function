import { mapIterable } from '../iterable/mapIterable';
import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { andReducer } from '../reducer/andReducer';
import { asContext } from '../types/asContext';

export const setsEqual = <Value>(
  from: ReadonlySet<Value>,
  to: ReadonlySet<Value>,
): boolean =>
  from.size === to.size &&
  pipe(
    from,
    mapIterable((el) => to.has(el)),
    reduceIterable(andReducer, asContext(true)),
  );
