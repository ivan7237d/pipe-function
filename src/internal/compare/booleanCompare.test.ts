import { applyPipe } from '../applyPipe';
import { sortArray } from '../array/sortArray';
import { booleanCompare } from './booleanCompare';

it('works', () => {
  expect(
    applyPipe(
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
