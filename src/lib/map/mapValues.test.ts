import { applyPipe } from '../applyPipe';
import { iterableToArray } from '../array/iterableToArray';
import { mapValues } from './mapValues';

it('works', () => {
  expect(
    applyPipe(
      new Map([
        ['a', 0],
        ['b', 1],
      ]),
      mapValues,
      iterableToArray,
    ),
  ).toMatchInlineSnapshot(`
    Array [
      0,
      1,
    ]
  `);
});
