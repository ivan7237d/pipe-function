import { applyPipe } from '../applyPipe';
import { everyInIterable } from '../iterable/everyInIterable';
import { mapIterable } from '../iterable/mapIterable';

export const setsEqual = <Value>(
  from: ReadonlySet<Value>,
  to: ReadonlySet<Value>,
): boolean =>
  from.size === to.size &&
  applyPipe(
    from,
    mapIterable((el) => to.has(el)),
    everyInIterable,
  );
