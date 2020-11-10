import { applyPipe } from '../applyPipe';
import { iterableToObject } from './iterableToObject';

it('works', () => {
  expect(
    applyPipe(
      iterableToObject([
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
