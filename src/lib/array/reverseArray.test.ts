import { applyPipe } from '../applyPipe';
import { iterableToArray } from './iterableToArray';
import { reverseArray } from './reverseArray';

it('works', () => {
  expect(applyPipe([0, 1, 2] as const, reverseArray, iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      2,
      1,
      0,
    ]
  `);
});
