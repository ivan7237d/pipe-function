import { applyPipe } from '../applyPipe';
import { mapIterable } from '../iterable/mapIterable';
import { reduceIterable } from '../iterable/reduceIterable';
import { andReducer } from '../reducer/andReducer';

export const setsEqual = <Value>(
  from: ReadonlySet<Value>,
  to: ReadonlySet<Value>,
): boolean =>
  from.size === to.size &&
  applyPipe(
    from,
    mapIterable((el) => to.has(el)),
    reduceIterable<boolean, boolean>(andReducer, true),
  );
