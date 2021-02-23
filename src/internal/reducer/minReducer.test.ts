import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { minReducer } from './minReducer';

it('works', () => {
  expect(pipe([1, 2], reduceIterable(minReducer))).toEqual(1);
});
