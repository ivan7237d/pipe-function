import { applyPipe } from '../applyPipe';
import { deleteFromObject } from './deleteFromObject';

it('works', () => {
  expect(
    applyPipe(
      { a: 0, b: 1 } as { a?: number; b: number },
      deleteFromObject('a'),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "b": 1,
    }
  `);
  expect(
    applyPipe(
      { '1': 0, '2': 1 } as { [key: number]: number },
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
