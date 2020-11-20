import { applyPipe } from '../applyPipe';
import { filterIterable } from './filterIterable';

it('works', () => {
  expect(
    applyPipe(
      [0, 1, 2],
      filterIterable((value) => value === 1),
      (source) => [...source],
    ),
  ).toEqual([1]);
});
