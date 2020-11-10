import { applyPipe } from '../applyPipe';
import { objectValues } from './objectValues';

it('works', () => {
  expect([...applyPipe({ a: 0, b: 1 }, objectValues)]).toMatchInlineSnapshot(`
    Array [
      0,
      1,
    ]
  `);
});
