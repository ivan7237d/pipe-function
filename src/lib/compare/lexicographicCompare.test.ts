import { applyPipe } from '../applyPipe';
import { sortArray } from '../array/sortArray';
import { mapTuple } from '../tuple/mapTuple';
import { CompareFunction } from '../types';
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
    applyPipe(
      values,
      mapTuple((value) => value[index]),
      (values) => stringCompare(...values),
    );
  const sortedNatively = applyPipe(randomStrings, sortArray(stringCompare));
  const sortedByFirstLetter = applyPipe(
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
  const sortedByThreeLetters = applyPipe(
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
  expect(applyPipe(randomStrings, sortArray(lexicographicCompare()))).toEqual(
    randomStrings,
  );
});
