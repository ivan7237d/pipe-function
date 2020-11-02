import { iterablesEqual } from './iterablesEqual';

it('works', () => {
  expect(iterablesEqual([], [])).toEqual(true);
  expect(iterablesEqual([1], [1])).toEqual(true);
  expect(iterablesEqual([1], [])).toEqual(false);
  expect(iterablesEqual([], [1])).toEqual(false);
  expect(iterablesEqual([1], [1, 2])).toEqual(false);
  expect(iterablesEqual([1, 2], [1])).toEqual(false);
  expect(iterablesEqual([1, 2], [1, 2])).toEqual(true);
  expect(iterablesEqual([1], [2])).toEqual(false);
  expect(iterablesEqual([[1]], [[1]])).toEqual(false);
  expect(iterablesEqual([[1]], [[1]], (from, to) => from[0] === to[0])).toEqual(
    true,
  );
  expect(iterablesEqual([[1]], [[2]], (from, to) => from[0] === to[0])).toEqual(
    false,
  );
});
