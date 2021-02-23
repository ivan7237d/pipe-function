import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { sumReducer } from './sumReducer';

it('works', () => {
  expect(pipe([1, 2], reduceIterable(sumReducer))).toEqual(3);
});
