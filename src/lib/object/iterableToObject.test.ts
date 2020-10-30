import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { iterableToObject } from './iterableToObject';

it('works', () => {
  expect(
    applyPipe(
      identity<[string, number | undefined][]>([
        ['a', 0],
        ['b', 1],
        ['c', undefined],
      ]),
      iterableToObject,
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
      "b": 1,
    }
  `);
});
