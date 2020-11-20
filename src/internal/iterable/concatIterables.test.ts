import { concatIterables } from './concatIterables';

it('works', () => {
  expect([...concatIterables([0, 1], ['a', 'b'])]).toMatchInlineSnapshot(`
    Array [
      0,
      1,
      "a",
      "b",
    ]
  `);
});
