import { pipe } from '../pipe';
import { as } from '../types/as';
import { asContext } from '../types/asContext';
import { scanIterable } from './scanIterable';

it('works', () => {
  expect(
    pipe(
      'abc',
      scanIterable((accumulator, element) => accumulator + element, 'd'),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "da",
      "dab",
      "dabc",
    ]
  `);
  expect(
    pipe(
      'abc',
      scanIterable((accumulator, element) => accumulator + element),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
      "ab",
      "abc",
    ]
  `);
  expect(
    pipe(
      as<string[]>([]),
      scanIterable((accumulator, element) => accumulator + element),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`Array []`);
  expect(
    pipe(
      'abc',
      scanIterable((accumulator, element) =>
        accumulator.length === 2 ? undefined : accumulator + element,
      ),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
      "ab",
    ]
  `);
  expect(
    pipe(
      'abc',
      scanIterable((...[, element]) => element),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
      "b",
      "c",
    ]
  `);
  expect(
    pipe('abc', scanIterable(asContext(() => undefined)), (source) => [
      ...source,
    ]),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
    ]
  `);
});
