import { applyPipe } from '../applyPipe';
import { iterableToMap } from './iterableToMap';
import { setInMap } from './setInMap';

it('works', () => {
  expect(
    applyPipe(
      [
        ['a', 0],
        ['b', 1],
      ] as const,
      iterableToMap,
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
      [['a', undefined]] as const,
      iterableToMap,
      setInMap('b', undefined),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => undefined,
      "b" => undefined,
    }
  `);
});
