import { applyPipe } from '../applyPipe';
import { objectEntries } from '../object/objectEntries';
import { deleteFromMap } from './deleteFromMap';

it('works', () => {
  expect(
    applyPipe(
      { a: 0, b: 1 },
      objectEntries,
      (value) => new Map(value),
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
      objectEntries,
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
