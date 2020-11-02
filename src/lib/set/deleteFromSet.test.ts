import { applyPipe } from '../applyPipe';
import { deleteFromSet } from './deleteFromSet';

it('works', () => {
  expect(applyPipe(new Set([0, 1] as const), deleteFromSet(1)))
    .toMatchInlineSnapshot(`
    Set {
      0,
    }
  `);
});
