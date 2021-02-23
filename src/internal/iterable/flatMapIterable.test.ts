import { pipe } from '../pipe';
import { flatMapIterable } from './flatMapIterable';

it('works', () => {
  expect(
    pipe(
      ['a', 'b'],
      flatMapIterable((value) => [`${value}a`, `${value}b`]),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "aa",
      "ab",
      "ba",
      "bb",
    ]
  `);
});
