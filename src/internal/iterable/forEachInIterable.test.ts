import { pipe } from '../pipe';
import { forEachInIterable } from './forEachInIterable';

it('works', () => {
  const array: number[] = [];
  pipe(
    [0, 1],
    forEachInIterable((value) => {
      array.push(value);
    }),
  );
  expect(array).toEqual([0, 1]);
});
