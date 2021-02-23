import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { maxReducer } from './maxReducer';

it('works', () => {
  expect(pipe([1, 2], reduceIterable(maxReducer))).toEqual(2);
});
