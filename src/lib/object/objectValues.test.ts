import { applyPipe } from '../applyPipe';
import { iterableToArray } from '../array/iterableToArray';
import { objectValues } from './objectValues';

it('works', () => {
  expect(applyPipe({ a: 0, b: 1 }, objectValues, iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      0,
      1,
    ]
  `);
});
