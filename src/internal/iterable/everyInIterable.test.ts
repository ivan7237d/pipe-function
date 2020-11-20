import { applyPipe } from '../applyPipe';
import { everyInIterable } from './everyInIterable';

it('works', () => {
  expect(applyPipe([], everyInIterable)).toEqual(true);

  expect(applyPipe([false, true], everyInIterable)).toEqual(false);

  expect(applyPipe([true, true], everyInIterable)).toEqual(true);
});
