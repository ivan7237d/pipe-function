import { applyPipe } from '../applyPipe';
import { objectFromEntries } from './objectFromEntries';

it('works', () => {
  expect(
    applyPipe(
      objectFromEntries([['a', 0] as const, ['b', 1], ['c', undefined]]),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
      "b": 1,
      "c": undefined,
    }
  `);
});
