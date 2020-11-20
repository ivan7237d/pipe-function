import { applyPipe } from '../applyPipe';
import { objectKeys } from './objectKeys';

it('works', () => {
  expect([...applyPipe({ a: 1, b: 2 }, objectKeys)]).toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
    ]
  `);
  const symbol = Symbol();
  const keys = [...applyPipe({ a: 1, [symbol]: 2 }, objectKeys)];
  expect(keys).toMatchInlineSnapshot(`
    Array [
      "a",
    ]
  `);
});
