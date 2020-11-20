import { applyPipe } from '../applyPipe';
import { someInIterable } from './someInIterable';

it('works', () => {
  expect(applyPipe([], someInIterable)).toEqual(false);

  expect(applyPipe([false, false], someInIterable)).toEqual(false);

  expect(applyPipe([false, true], someInIterable)).toEqual(true);
});
