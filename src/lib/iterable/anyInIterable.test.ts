import { applyPipe } from '../applyPipe';
import { anyInIterable } from './anyInIterable';

it('works', () => {
  expect(applyPipe([], anyInIterable)).toEqual(false);

  expect(applyPipe([false, false], anyInIterable)).toEqual(false);

  expect(applyPipe([false, true], anyInIterable)).toEqual(true);
});
