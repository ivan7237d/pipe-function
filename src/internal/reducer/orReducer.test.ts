import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { orReducer } from './orReducer';

it('works', () => {
  expect(pipe([true, true], reduceIterable(orReducer))).toEqual(true);
  expect(pipe([true, false], reduceIterable(orReducer))).toEqual(true);
  expect(pipe([false, true], reduceIterable(orReducer))).toEqual(true);
  expect(pipe([false, false], reduceIterable(orReducer))).toEqual(false);
});
