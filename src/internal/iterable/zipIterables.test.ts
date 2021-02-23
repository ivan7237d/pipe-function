import { pipe } from '../pipe';
import { rangeIterable } from './rangeIterable';
import { zipIterables } from './zipIterables';

it('works', () => {
  expect(pipe(zipIterables([1, 2], ['a', 'b']), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        1,
        "a",
      ],
      Array [
        2,
        "b",
      ],
    ]
  `);

  expect(pipe(zipIterables([1, 2]), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        1,
      ],
      Array [
        2,
      ],
    ]
  `);

  expect(
    pipe(zipIterables(rangeIterable(), ['a', 'b']), (source) => [...source]),
  ).toMatchInlineSnapshot(`
    Array [
      Array [
        0,
        "a",
      ],
      Array [
        1,
        "b",
      ],
    ]
  `);

  expect(pipe(zipIterables(), (source) => [...source])).toMatchInlineSnapshot(
    `Array []`,
  );
});
