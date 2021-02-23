import { pipe } from '../pipe';
import { reverseIterable } from './reverseIterable';

it('works', () => {
  expect([...pipe([0, 1, 2] as const, reverseIterable)]).toMatchInlineSnapshot(`
    Array [
      2,
      1,
      0,
    ]
  `);
});
