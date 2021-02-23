import { pipe } from '../pipe';
import { asContext } from '../types/asContext';
import { setInMap } from './setInMap';

it('works', () => {
  expect(
    pipe(
      new Map([
        ['a', 0],
        ['b', 1],
      ]),
      setInMap('a', 2),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => 2,
      "b" => 1,
    }
  `);

  expect(
    pipe(
      new Map([
        ['a', 0],
        ['b', 1],
      ]),
      setInMap('a'),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "b" => 1,
    }
  `);

  expect(
    pipe(
      [
        ['a', 0],
        ['b', 1],
      ] as const,
      (value) => new Map(value),
      setInMap('a', 1),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => 1,
      "b" => 1,
    }
  `);

  expect(
    pipe(
      new Map([['a', 1]]),
      (value) => new Map(value),
      setInMap('b', asContext(undefined)),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => 1,
    }
  `);
});
