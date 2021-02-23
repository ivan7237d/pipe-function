import { pipe } from '../pipe';
import { firstIterable } from './firstIterable';
import { rangeIterable } from './rangeIterable';
import { sliceIterable } from './sliceIterable';
import { zipIterables } from './zipIterables';

it('works', () => {
  expect(
    pipe(firstIterable(), sliceIterable(undefined, 3), (source) => [...source]),
  ).toMatchInlineSnapshot(`
    Array [
      true,
      false,
      false,
    ]
  `);

  expect(
    pipe(
      zipIterables(firstIterable(), rangeIterable(undefined, 3)),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      Array [
        true,
        0,
      ],
      Array [
        false,
        1,
      ],
      Array [
        false,
        2,
      ],
    ]
  `);
});
