import { sortArray } from '../array/sortArray';
import { pipe } from '../pipe';
import { numberCompare } from './numberCompare';
import { reverseCompare } from './reverseCompare';

it('works', () => {
  expect(
    pipe(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      sortArray(reverseCompare(numberCompare)),
    ),
  ).toMatchInlineSnapshot(`
    Array [
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0,
    ]
  `);
});
