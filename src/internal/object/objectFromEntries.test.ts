import { applyPipe } from '../applyPipe';
import { objectFromEntriesPonyfill } from './objectFromEntries';

it('works', () => {
  expect(
    applyPipe(
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
