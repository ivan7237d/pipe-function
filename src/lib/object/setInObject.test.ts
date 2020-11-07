import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { setInObject } from './setInObject';

it('works', () => {
  expect(applyPipe({ a: 0, b: 1 }, setInObject('a', 2))).toMatchInlineSnapshot(`
    Object {
      "a": 2,
      "b": 1,
    }
  `);
  expect(
    applyPipe(
      identity<{ a: number; b?: number }>({ a: 0 }),
      setInObject('b', 1),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
      "b": 1,
    }
  `);
  expect(
    applyPipe(
      identity<{ a: number; b?: number }>({ a: 0, b: 1 }),
      setInObject('b', undefined),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
    }
  `);
  expect(
    applyPipe(identity<{ [key: string]: number }>({}), setInObject('a', 0)),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
    }
  `);
  expect(
    applyPipe(
      identity<{ [key: string]: number }>({ a: 0, b: 1 }),
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
