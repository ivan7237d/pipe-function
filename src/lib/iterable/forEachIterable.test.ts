import { applyPipe } from '../applyPipe';
import { forEachIterable } from './forEachIterable';

it('works', () => {
  const array: number[] = [];
  applyPipe(
    [0, 1],
    forEachIterable((value) => {
      array.push(value);
    }),
  );
  expect(array).toEqual([0, 1]);
});
