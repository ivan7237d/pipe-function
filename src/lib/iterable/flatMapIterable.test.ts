import { applyPipe } from '../applyPipe';
import { flatMapIterable } from './flatMapIterable';

it('works', () => {
  expect(
    applyPipe(
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
