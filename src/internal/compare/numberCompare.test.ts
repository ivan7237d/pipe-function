import { sortArray } from '../array/sortArray';
import { pipe } from '../pipe';
import { numberCompare } from './numberCompare';

it('works', () => {
  expect(
    pipe(
      // Include 10 to make sure the values are not sorted as strings.
      [7, 5, 5, 5, 4, 2, 1, 4, 6, 7, 1, 2, 3, 7, 3, 6, 0, 3, 2, 8, 10],
      sortArray(numberCompare),
    ),
  ).toMatchInlineSnapshot(`
    Array [
      0,
      1,
      1,
      2,
      2,
      2,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      6,
      6,
      7,
      7,
      7,
      8,
      10,
    ]
  `);
});
