import { applyPipe } from '../applyPipe';
import { forEachInIterable } from './forEachInIterable';

it('works', () => {
  const array: number[] = [];
  applyPipe(
    [0, 1],
    forEachInIterable((value) => {
      array.push(value);
    }),
  );
  expect(array).toEqual([0, 1]);
});
