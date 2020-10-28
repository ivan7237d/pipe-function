import { applyPipe } from '../applyPipe';
import { firstIterable } from './firstIterable';

it('works', () => {
  expect(applyPipe([0, 1], firstIterable)).toEqual(0);
  expect(applyPipe([], firstIterable)).toEqual(undefined);
});
