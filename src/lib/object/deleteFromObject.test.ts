import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { deleteFromObject } from './deleteFromObject';

it('works', () => {
  expect(
    applyPipe(
      identity<{ a?: number; b: number }>({ a: 0, b: 1 }),
      deleteFromObject('a'),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "b": 1,
    }
  `);
  expect(
    applyPipe(
      identity<{ [key: number]: number }>({ '1': 0, '2': 1 }),
      deleteFromObject(1),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "2": 1,
    }
  `);
  const symbol = Symbol();
  expect(
    applyPipe(
      { [symbol]: 'value' } as { [symbol]?: string },
      deleteFromObject(symbol),
    ),
  ).toMatchInlineSnapshot(`Object {}`);
});
