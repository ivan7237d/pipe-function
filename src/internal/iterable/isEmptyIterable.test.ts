import { isEmptyIterable } from './isEmptyIterable';

it('works', () => {
  expect(isEmptyIterable([])).toEqual(true);
  expect(isEmptyIterable([1])).toEqual(false);
});
