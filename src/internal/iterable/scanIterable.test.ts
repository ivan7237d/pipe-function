import { applyPipe } from '../applyPipe';
import { scanIterable } from './scanIterable';

it('works', () => {
  expect(
    applyPipe(
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
    applyPipe(
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
    applyPipe(
      [] as string[],
      scanIterable((accumulator, element) => accumulator + element),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`Array []`);
  expect(
    applyPipe(
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
    applyPipe(
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
    applyPipe(
      'abc',
      scanIterable((): string | undefined => undefined),
      (source) => [...source],
    ),
  ).toMatchInlineSnapshot(`
    Array [
      "a",
    ]
  `);
});
