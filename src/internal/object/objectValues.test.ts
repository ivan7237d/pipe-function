import { pipe } from '../pipe';
import { objectValues } from './objectValues';

it('works', () => {
  expect([...pipe({ a: 0, b: 1 }, objectValues)]).toMatchInlineSnapshot(`
    Array [
      0,
      1,
    ]
  `);
  const symbol = Symbol();
  const values = [...pipe({ a: 1 as const, [symbol]: 2 }, objectValues)];
  expect(values).toMatchInlineSnapshot(`
    Array [
      1,
    ]
  `);
});
