import { applyPipe } from '../applyPipe';
import { everyIterable } from './everyIterable';

it('works', () => {
  expect(applyPipe([], everyIterable)).toEqual(true);

  expect(applyPipe([false, true], everyIterable)).toEqual(false);

  expect(applyPipe([true, true], everyIterable)).toEqual(true);
});
