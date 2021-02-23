import { sortArray } from '../array/sortArray';
import { pipe } from '../pipe';
import { CompareFunction } from '../types/types';
import { lexicographicCompare } from './lexicographicCompare';
import { stringCompare } from './stringCompare';

const randomStrings = [
  'acc',
  'cab',
  'aac',
  'aab',
  'aac',
  'bac',
  'aca',
  'cca',
  'cba',
  'bcc',
  'ccc',
  'ccb',
  'ccc',
  'aac',
  'cbc',
  'acc',
  'bba',
  'bbc',
  'baa',
  'bba',
];

it('works for 1+ arguments', () => {
  const compareNthLetter = (index: number): CompareFunction<string> => (
    ...values
  ) =>
    pipe(
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      values.map((value) => value[index]) as [string, string],
      (values) => stringCompare(...values),
    );
  const sortedNatively = pipe(randomStrings, sortArray(stringCompare));
  const sortedByFirstLetter = pipe(
    randomStrings,
    sortArray(lexicographicCompare(compareNthLetter(0))),
  );
  expect(sortedByFirstLetter).toMatchInlineSnapshot(`
    Array [
      "acc",
      "aac",
      "aab",
      "aac",
      "aca",
      "aac",
      "acc",
      "bac",
      "bcc",
      "bba",
      "bbc",
      "baa",
      "bba",
      "cab",
      "cca",
      "cba",
      "ccc",
      "ccb",
      "ccc",
      "cbc",
    ]
  `);
  const sortedByThreeLetters = pipe(
    randomStrings,
    sortArray(
      lexicographicCompare(
        compareNthLetter(0),
        compareNthLetter(1),
        compareNthLetter(2),
      ),
    ),
  );
  expect(sortedByThreeLetters).toEqual(sortedNatively);
});

it('works for 0 arguments', () => {
  expect(pipe(randomStrings, sortArray(lexicographicCompare()))).toEqual(
    randomStrings,
  );
});
