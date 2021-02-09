import { applyPipe } from '../applyPipe';
import { as } from '../types/as';
import { diffObjects } from './diffObjects';

it('works without equal function provided', () => {
  expect([
    ...applyPipe(
      diffObjects(
        as<{ [key: string]: number }>({ a: 0, b: 1, c: 2 }),
        as<{ [key: string]: number }>({ a: 0, b: 3, d: 4 }),
      ),
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
  expect([
    ...applyPipe(
      diffObjects(
        as<{ [key: string]: [number] }>({ a: [0], b: [1], c: [2] }),
        as<{ [key: string]: [number] }>({ a: [0], b: [3], d: [4] }),
        ([from], [to]) => from === to,
      ),
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
