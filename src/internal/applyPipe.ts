import { pipe } from './pipe';

/**
 * Pipes a value through a number of functions in the order that they appear.
 * Takes between 1 and 12 arguments. `applyPipe(x, a, b)` is equivalent to
 * `b(a(x))`.
 *
 * @deprecated Renamed to `pipe`.
 */
export const applyPipe = pipe;
