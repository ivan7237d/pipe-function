import { pipe } from '../pipe';
import { reverseArray } from './reverseArray';

it('works', () => {
  expect(pipe([0, 1, 2] as const, reverseArray)).toMatchInlineSnapshot(`
    Array [
      2,
      1,
      0,
    ]
  `);
});
