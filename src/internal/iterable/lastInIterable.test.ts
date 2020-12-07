import { applyPipe } from '../applyPipe';
import { lastInIterable } from './lastInIterable';

it('works', () => {
  expect(applyPipe([0, 1], lastInIterable)).toEqual(1);
  expect(applyPipe([], lastInIterable)).toEqual(undefined);
});
