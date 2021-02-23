import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { countReducer } from './countReducer';

it('works', () => {
  expect(pipe([1, 2], reduceIterable(countReducer))).toEqual(2);
});
