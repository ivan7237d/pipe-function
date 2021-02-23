import { pipe } from '../pipe';
import { objectKeys } from './objectKeys';

it('works', () => {
  expect([...pipe({ a: 1, b: 2 }, objectKeys)]).toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
    ]
  `);
  const symbol = Symbol();
  const keys = [...pipe({ a: 1, [symbol]: 2 }, objectKeys)];
  expect(keys).toMatchInlineSnapshot(`
    Array [
      "a",
    ]
  `);
});
