import { applyPipe } from '../applyPipe';
import { firstInIterable } from './firstInIterable';

it('works', () => {
  expect(applyPipe([0, 1], firstInIterable)).toEqual(0);
  expect(applyPipe([], firstInIterable)).toEqual(undefined);
});
