import { applyPipe } from '../applyPipe';
import { objectToIterable } from '../object/objectToIterable';
import { diffMaps } from './diffMaps';

it('works without equal function provided', () => {
  expect([
    ...applyPipe(
      [
        { a: 0, b: 1, c: 2 },
        { a: 0, b: 3, d: 4 },
      ] as const,
      (value) =>
        value.map((value) =>
          applyPipe(value, objectToIterable, (source) => new Map(source)),
        ) as [Map<string, number>, Map<string, number>],
      (source) => diffMaps(...source),
    ),
  ]).toMatchInlineSnapshot(`
    Array [
      Array [
        "b",
        Array [
          1,
          3,
        ],
      ],
      Array [
        "d",
        Array [
          undefined,
          4,
        ],
      ],
      Array [
        "c",
        Array [
          2,
          undefined,
        ],
      ],
    ]
  `);
});

it('works with equal function provided', () => {
  type T = Record<string, readonly [number]>;
  expect([
    ...applyPipe(
      [
        { a: [0], b: [1], c: [2] } as T,
        { a: [0], b: [3], d: [4] } as T,
      ].map((value) =>
        applyPipe(value, objectToIterable, (source) => new Map(source)),
      ) as [Map<string, [number]>, Map<string, [number]>],
      (source) => diffMaps(...source, ([from], [to]) => from === to),
    ),
  ]).toMatchInlineSnapshot(`
    Array [
      Array [
        "b",
        Array [
          Array [
            1,
          ],
          Array [
            3,
          ],
        ],
      ],
      Array [
        "d",
        Array [
          undefined,
          Array [
            4,
          ],
        ],
      ],
      Array [
        "c",
        Array [
          Array [
            2,
          ],
          undefined,
        ],
      ],
    ]
  `);
});
