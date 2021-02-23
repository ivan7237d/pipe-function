import { pipe } from '../pipe';
import { objectFromEntriesPonyfill } from './objectFromEntries';

it('works', () => {
  expect(
    pipe(
      objectFromEntriesPonyfill([
        ['a', 0] as const,
        ['b', 1],
        ['c', undefined],
      ]),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
      "b": 1,
      "c": undefined,
    }
  `);
});
