import { applyPipe } from '../applyPipe';
import { iterableToArray } from './iterableToArray';
import { reverseArrayIterable } from './reverseArrayIterable';

it('works', () => {
  expect(applyPipe([0, 1, 2], reverseArrayIterable, iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      2,
      1,
      0,
    ]
  `);
});
