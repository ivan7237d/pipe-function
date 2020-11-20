import { applyPipe } from '../applyPipe';
import { scanIterable } from './scanIterable';

it('works', () => {
  expect(
    applyPipe(
      'abc',
      scanIterable((accumulator, element) => accumulator + element, ''),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
      "ab",
      "abc",
    ]
  `);
});
