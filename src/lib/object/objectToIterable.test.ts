import { applyPipe } from '../applyPipe';
import { objectToIterable } from './objectToIterable';

it('works', () => {
  expect([...applyPipe({ a: 0, b: 1 }, objectToIterable)])
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "a",
        0,
      ],
      Array [
        "b",
        1,
      ],
    ]
  `);

  const symbol = Symbol();
  const entries = [
    ...applyPipe({ a: 1 as const, [symbol]: 2 }, objectToIterable),
  ];
  expect(entries).toMatchInlineSnapshot(`
    Array [
      Array [
        "a",
        1,
      ],
    ]
  `);
});
