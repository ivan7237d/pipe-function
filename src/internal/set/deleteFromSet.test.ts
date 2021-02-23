import { pipe } from '../pipe';
import { deleteFromSet } from './deleteFromSet';

it('works', () => {
  expect(pipe(new Set([0, 1] as const), deleteFromSet(1)))
    .toMatchInlineSnapshot(`
    Set {
      0,
    }
  `);
});
