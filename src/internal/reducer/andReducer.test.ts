import { applyPipe } from '../applyPipe';
import { reduceIterable } from '../iterable/reduceIterable';
import { andReducer } from './andReducer';

it('works', () => {
  expect(applyPipe([true, true], reduceIterable(andReducer))).toEqual(true);
  expect(applyPipe([true, false], reduceIterable(andReducer))).toEqual(false);
  expect(applyPipe([false, true], reduceIterable(andReducer))).toEqual(false);
  expect(applyPipe([false, false], reduceIterable(andReducer))).toEqual(false);
});
