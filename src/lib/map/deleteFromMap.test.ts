import { applyPipe } from '../applyPipe';
import { objectToIterable } from '../object/objectToIterable';
import { deleteFromMap } from './deleteFromMap';
import { iterableToMap } from './iterableToMap';

it('works', () => {
  expect(
    applyPipe(
      { a: 0, b: 1 },
      objectToIterable,
      iterableToMap,
      deleteFromMap('a'),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "b" => 1,
    }
  `);
  expect(
    applyPipe(
      { a: 0, b: 1 },
      objectToIterable,
      (source) => new Map(source),
      deleteFromMap('c'),
    ),
  ).toMatchInlineSnapshot(`
    Map {
      "a" => 0,
      "b" => 1,
    }
  `);
});
