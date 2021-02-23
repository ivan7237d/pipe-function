import { objectEntries } from '../object/objectEntries';
import { pipe } from '../pipe';
import { as } from '../types/as';
import { diffMaps } from './diffMaps';

it('works without equal function provided', () => {
  expect([
    ...pipe(
      [
        { a: 0, b: 1, c: 2 },
        { a: 0, b: 3, d: 4 },
      ] as const,
      (value) =>
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        value.map((value) =>
          pipe(value, objectEntries, (source) => new Map(source)),
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
    ...pipe(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      [
        as<T>({ a: [0], b: [1], c: [2] }),
        as<T>({ a: [0], b: [3], d: [4] }),
      ].map((value) =>
        pipe(value, objectEntries, (source) => new Map(source)),
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
