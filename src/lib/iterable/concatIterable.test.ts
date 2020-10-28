import { concatIterable } from './concatIterable';

it('works', () => {
  expect([...concatIterable([0, 1], ['a', 'b'])]).toMatchInlineSnapshot(`
    Array [
      0,
      1,
      "a",
      "b",
    ]
  `);
});
