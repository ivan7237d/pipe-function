import { sortArray } from '../array/sortArray';
import { pipe } from '../pipe';
import { booleanCompare } from './booleanCompare';

it('works', () => {
  expect(
    pipe(
      [
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
      ],
      sortArray(booleanCompare),
    ),
  ).toMatchInlineSnapshot(`
    Array [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ]
  `);
});
