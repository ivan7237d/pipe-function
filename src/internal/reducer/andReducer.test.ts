import { reduceIterable } from '../iterable/reduceIterable';
import { pipe } from '../pipe';
import { andReducer } from './andReducer';

it('works', () => {
  expect(pipe([true, true], reduceIterable(andReducer))).toEqual(true);
  expect(pipe([true, false], reduceIterable(andReducer))).toEqual(false);
  expect(pipe([false, true], reduceIterable(andReducer))).toEqual(false);
  expect(pipe([false, false], reduceIterable(andReducer))).toEqual(false);
});
