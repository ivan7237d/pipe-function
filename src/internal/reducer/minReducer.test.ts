import { applyPipe } from '../applyPipe';
import { reduceIterable } from '../iterable/reduceIterable';
import { minReducer } from './minReducer';

it('works', () => {
  expect(applyPipe([1, 2], reduceIterable(minReducer))).toEqual(1);
});
