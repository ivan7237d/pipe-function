import { applyPipe } from '../applyPipe';
import { sortArray } from '../array/sortArray';
import { stringLocaleCompare } from './stringLocaleCompare';

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
      sortArray(stringLocaleCompare()),
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
      "é",
      "f",
    ]
  `);
});
