import { applyPipe } from '../applyPipe';
import { takeIterable } from './takeIterable';

it('works', () => {
  expect(
    applyPipe([0, 1, 2], takeIterable(0), (source) => [...source]),
  ).toEqual([]);

  expect(
    applyPipe([0, 1, 2], takeIterable(2), (source) => [...source]),
  ).toEqual([0, 1]);

  expect(
    applyPipe([0, 1, 2], takeIterable(4), (source) => [...source]),
  ).toEqual([0, 1, 2]);
});
