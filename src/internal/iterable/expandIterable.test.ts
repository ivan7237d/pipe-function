import { expandIterable } from './expandIterable';
import { rangeIterable } from './rangeIterable';
import { zipIterables } from './zipIterables';

it('works', () => {
  expect([...expandIterable((value: number) => value)]).toEqual([]);
  expect([
    ...zipIterables(
      rangeIterable(1, 5),
      expandIterable((value) => !value, false),
    ),
  ]).toMatchInlineSnapshot(`
    Array [
      Array [
        1,
        false,
      ],
      Array [
        2,
        true,
      ],
      Array [
        3,
        false,
      ],
      Array [
        4,
        true,
      ],
    ]
  `);
  expect([
    ...zipIterables(
      rangeIterable(1, 6, 2),
      expandIterable((value) => (value < 5 ? value + 2 : undefined), 1),
    ),
  ]).toMatchInlineSnapshot(`
    Array [
      Array [
        1,
        1,
      ],
      Array [
        3,
        3,
      ],
      Array [
        5,
        5,
      ],
    ]
  `);
});
