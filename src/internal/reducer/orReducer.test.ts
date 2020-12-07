import { applyPipe } from '../applyPipe';
import { reduceIterable } from '../iterable/reduceIterable';
import { orReducer } from './orReducer';

it('works', () => {
  expect(applyPipe([true, true], reduceIterable(orReducer))).toEqual(true);
  expect(applyPipe([true, false], reduceIterable(orReducer))).toEqual(true);
  expect(applyPipe([false, true], reduceIterable(orReducer))).toEqual(true);
  expect(applyPipe([false, false], reduceIterable(orReducer))).toEqual(false);
});
