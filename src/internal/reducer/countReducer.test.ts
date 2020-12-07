import { applyPipe } from '../applyPipe';
import { reduceIterable } from '../iterable/reduceIterable';
import { countReducer } from './countReducer';

it('works', () => {
  expect(applyPipe([1, 2], reduceIterable(countReducer))).toEqual(2);
});
