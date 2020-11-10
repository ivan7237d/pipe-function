import { applyPipe } from '../applyPipe';
import { setInObject } from './setInObject';

it('works', () => {
  expect(applyPipe({ a: 0, b: 1 }, setInObject('a', 2))).toMatchInlineSnapshot(`
    Object {
      "a": 2,
      "b": 1,
    }
  `);
  expect(applyPipe({ a: 0 } as { a: number; b?: number }, setInObject('b', 1)))
    .toMatchInlineSnapshot(`
    Object {
      "a": 0,
      "b": 1,
    }
  `);
  expect(
    applyPipe(
      { a: 0, b: 1 } as { a: number; b?: number },
      setInObject('b', undefined),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
    }
  `);
  expect(applyPipe({} as { [key: string]: number }, setInObject('a', 0)))
    .toMatchInlineSnapshot(`
    Object {
      "a": 0,
    }
  `);
  expect(
    applyPipe(
      { a: 0, b: 1 } as { [key: string]: number },
      setInObject('a', undefined),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "b": 1,
    }
  `);
  const symbol = Symbol();
  expect(
    applyPipe(
      { [symbol]: 'a' } as { [symbol]: string },
      setInObject(symbol, 'b'),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      Symbol(): "b",
    }
  `);
});
