import { applyPipe } from '../applyPipe';
import { addToSet } from './addToSet';

it('works', () => {
  expect(applyPipe(new Set([0, 1] as const), addToSet(2)))
    .toMatchInlineSnapshot(`
    Set {
      0,
      1,
      2,
    }
  `);
});
