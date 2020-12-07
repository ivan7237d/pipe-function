import { applyPipe } from '../applyPipe';
import { reduceIterable } from '../iterable/reduceIterable';
import { maxReducer } from './maxReducer';

it('works', () => {
  expect(applyPipe([1, 2], reduceIterable(maxReducer))).toEqual(2);
});
