import { applyPipe } from '../applyPipe';
import { iterableToArray } from '../array/iterableToArray';
import { objectKeys } from './objectKeys';

it('works', () => {
  expect(applyPipe({ a: 1, b: 2 }, objectKeys, iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
    ]
  `);
});
