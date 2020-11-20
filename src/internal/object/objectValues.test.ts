import { applyPipe } from '../applyPipe';
import { objectValues } from './objectValues';

it('works', () => {
  expect([...applyPipe({ a: 0, b: 1 }, objectValues)]).toMatchInlineSnapshot(`
    Array [
      0,
      1,
    ]
  `);
  const symbol = Symbol();
  const values = [...applyPipe({ a: 1 as const, [symbol]: 2 }, objectValues)];
  expect(values).toMatchInlineSnapshot(`
    Array [
      1,
    ]
  `);
});
