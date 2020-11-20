import { applyPipe } from '../applyPipe';
import { rangeIterable } from './rangeIterable';
import { zipIterables } from './zipIterables';

it('works', () => {
  expect(applyPipe(zipIterables([1, 2], ['a', 'b']), (source) => [...source]))
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

  expect(applyPipe(zipIterables([1, 2]), (source) => [...source]))
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
    applyPipe(zipIterables(rangeIterable(), ['a', 'b']), (source) => [
      ...source,
    ]),
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

  expect(
    applyPipe(zipIterables(), (source) => [...source]),
  ).toMatchInlineSnapshot(`Array []`);
});
