import { applyPipe } from '../applyPipe';
import { iterableToArray } from '../array/iterableToArray';
import { iterableToMap } from './iterableToMap';
import { mapKeys } from './mapKeys';

it('works', () => {
  expect(
    applyPipe(
      [
        ['a', 0],
        ['b', 1],
      ] as const,
      iterableToMap,
      mapKeys,
      iterableToArray,
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
    ]
  `);
});
