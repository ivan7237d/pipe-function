import { applyPipe } from '../applyPipe';
import { reduceIterable } from '../iterable/reduceIterable';
import { sumReducer } from './sumReducer';

it('works', () => {
  expect(applyPipe([1, 2], reduceIterable(sumReducer))).toEqual(3);
});
