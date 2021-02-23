import { pipe } from '../pipe';
import { addToSet } from './addToSet';

it('works', () => {
  expect(pipe(new Set([0, 1] as const), addToSet(2))).toMatchInlineSnapshot(`
    Set {
      0,
      1,
      2,
    }
  `);
});
