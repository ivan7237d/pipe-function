import { setsEqual } from './setsEqual';

it('works', () => {
  expect(setsEqual(new Set(), new Set())).toEqual(true);
  expect(setsEqual(new Set([1]), new Set())).toEqual(false);
  expect(setsEqual(new Set(), new Set([1]))).toEqual(false);
});
