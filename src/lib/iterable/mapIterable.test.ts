import { applyPipe } from '../applyPipe';
import { mapIterable } from './mapIterable';

it('works', () => {
  expect(
    applyPipe(
      [1, 2],
      mapIterable((value) => value * 2),
      (source) => [...source],
    ),
  ).toEqual([2, 4]);
});
