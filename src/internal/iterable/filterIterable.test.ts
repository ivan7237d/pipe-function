import { pipe } from '../pipe';
import { filterIterable } from './filterIterable';

it('works', () => {
  expect(
    pipe(
      [0, 1, 2],
      filterIterable((value) => value === 1),
      (source) => [...source],
    ),
  ).toEqual([1]);
});
