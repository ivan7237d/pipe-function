import { pipe } from '../pipe';
import { mapIterable } from './mapIterable';

it('works', () => {
  expect(
    pipe(
      [1, 2],
      mapIterable((value) => value * 2),
      (source) => [...source],
    ),
  ).toEqual([2, 4]);
});
