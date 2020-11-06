import { applyPipe } from '../applyPipe';
import { iterableToMap } from './iterableToMap';
import { setInMap } from './setInMap';

it('works', () => {
  expect(
    applyPipe(
      iterableToMap([
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
    applyPipe(
      iterableToMap([
        ['a', 0],
        ['b', 1],
      ]),
      setInMap('a', undefined),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "b" => 1,
    }
  `);

  expect(
    applyPipe(
      [
        ['a', 0],
        ['b', 1],
      ] as const,
      iterableToMap,
      setInMap('a', 1),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => 1,
      "b" => 1,
    }
  `);

  expect(
    applyPipe(new Map([['a', 1]]), iterableToMap, setInMap('b', undefined)),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => 1,
    }
  `);
});
