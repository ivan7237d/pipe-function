import { countInIterable } from './countInIterable';

it('works', () => {
  expect(countInIterable([])).toEqual(0);
  expect(countInIterable([1])).toEqual(1);
});
