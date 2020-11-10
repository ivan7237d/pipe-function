import { applyPipe } from '../applyPipe';
import { objectKeys } from './objectKeys';

it('works', () => {
  expect([...applyPipe({ a: 1, b: 2 }, objectKeys)]).toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
    ]
  `);
});
