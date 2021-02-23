import { pipe } from '../pipe';
import { lastInIterable } from './lastInIterable';
import { mapIterable } from './mapIterable';

it('works', () => {
  expect(pipe([0, 1], lastInIterable)).toEqual(1);
  expect(pipe([], lastInIterable)).toEqual(undefined);
  expect(
    pipe(
      [0, 1],
      mapIterable((value) => value),
      lastInIterable,
    ),
  ).toEqual(1);
  expect(
    pipe(
      [],
      mapIterable((value) => value),
      lastInIterable,
    ),
  ).toEqual(undefined);
});
