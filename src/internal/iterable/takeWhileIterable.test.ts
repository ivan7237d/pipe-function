import { applyPipe } from '../applyPipe';
import { takeWhileIterable } from './takeWhileIterable';

it('works', () => {
  expect(
    applyPipe(
      [0, 1, 2, 3],
      takeWhileIterable((value) => value <= 1),
      (source) => [...source],
    ),
  ).toEqual([0, 1]);

  expect(
    applyPipe(
      [0, 1, 2, 3],
      takeWhileIterable((value) => value <= 1, true),
      (source) => [...source],
    ),
  ).toEqual([0, 1, 2]);
});
