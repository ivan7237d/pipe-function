import { applyPipe } from '../applyPipe';
import { isFirstIterable } from './isFirstIterable';
import { rangeIterable } from './rangeIterable';
import { takeIterable } from './takeIterable';
import { zipIterable } from './zipIterable';

it('works', () => {
  expect(applyPipe(isFirstIterable, takeIterable(3), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      true,
      false,
      false,
    ]
  `);

  expect(
    applyPipe(
      zipIterable(isFirstIterable, rangeIterable(undefined, 3)),
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
