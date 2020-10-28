import { applyPipe } from '../applyPipe';
import { rangeIterable } from './rangeIterable';
import { zipIterable } from './zipIterable';

it('works', () => {
  expect(applyPipe(zipIterable([1, 2], ['a', 'b']), (source) => [...source]))
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

  expect(applyPipe(zipIterable([1, 2]), (source) => [...source]))
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
    applyPipe(zipIterable(rangeIterable(), ['a', 'b']), (source) => [
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
    applyPipe(zipIterable(), (source) => [...source]),
  ).toMatchInlineSnapshot(`Array []`);
});
