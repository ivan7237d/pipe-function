import { pipe } from '../pipe';
import { firstInIterable } from './firstInIterable';

it('works', () => {
  expect(pipe([0, 1], firstInIterable)).toEqual(0);
  expect(pipe([], firstInIterable)).toEqual(undefined);
});
