import { deepEqual } from './deepEqual';

it('works', () => {
  expect(deepEqual(1, 1)).toEqual(true);
  expect(deepEqual(1, 2)).toEqual(false);
  expect(deepEqual({ a: [1] }, { a: [1] })).toEqual(true);
  expect(deepEqual({ a: [1] }, { a: [2] })).toEqual(false);
  expect(deepEqual([[1]], [[1]])).toEqual(true);
  expect(deepEqual([[1]], [[2]])).toEqual(false);
  expect(deepEqual(new Map([['a', [1]]]), new Map([['a', [1]]]))).toEqual(true);
  expect(deepEqual(new Map([['a', [1]]]), new Map([['a', [2]]]))).toEqual(
    false,
  );
  expect(deepEqual(new Set([1]), new Set([1]))).toEqual(true);
  expect(deepEqual(new Set([1]), new Set([2]))).toEqual(false);
});
