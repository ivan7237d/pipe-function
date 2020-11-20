import { applyPipe } from '../applyPipe';
import { sortArray } from '../array/sortArray';
import { stringCompare } from './stringCompare';

it('works', () => {
  expect(
    applyPipe(
      [
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
        'é',
        'f',
      ],
      sortArray(stringCompare),
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "aab",
      "aac",
      "aac",
      "aac",
      "aca",
      "acc",
      "acc",
      "baa",
      "bac",
      "bba",
      "bba",
      "bbc",
      "bcc",
      "cab",
      "cba",
      "cbc",
      "cca",
      "ccb",
      "ccc",
      "ccc",
      "f",
      "é",
    ]
  `);
});
