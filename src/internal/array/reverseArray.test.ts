import { applyPipe } from '../applyPipe';
import { reverseArray } from './reverseArray';

it('works', () => {
  expect(applyPipe([0, 1, 2] as const, reverseArray)).toMatchInlineSnapshot(`
    Array [
      2,
      1,
      0,
    ]
  `);
});
