import { applyPipe } from '../applyPipe';
import { reverseIterable } from './reverseIterable';

it('works', () => {
  expect([...applyPipe([0, 1, 2] as const, reverseIterable)])
    .toMatchInlineSnapshot(`
    Array [
      2,
      1,
      0,
    ]
  `);
});
