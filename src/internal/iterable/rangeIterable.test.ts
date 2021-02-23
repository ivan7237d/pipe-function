import { pipe } from '../pipe';
import { rangeIterable } from './rangeIterable';
import { sliceIterable } from './sliceIterable';

it('works', () => {
  expect(
    pipe(rangeIterable(), sliceIterable(undefined, 3), (source) => [...source]),
  ).toMatchInlineSnapshot(`
    Array [
      0,
      1,
      2,
    ]
  `);
  expect(
    pipe(rangeIterable(undefined, 0), (source) => [...source]),
  ).toMatchInlineSnapshot(`Array []`);
  expect(pipe(rangeIterable(undefined, 3), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      0,
      1,
      2,
    ]
  `);
  expect(pipe(rangeIterable(1, 3), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect(
    pipe(rangeIterable(0, 0), (source) => [...source]),
  ).toMatchInlineSnapshot(`Array []`);
  expect(pipe(rangeIterable(10, 30, 10), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      10,
      20,
    ]
  `);
  expect(pipe(rangeIterable(30, 10, -10), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      30,
      20,
    ]
  `);
  expect(
    pipe(rangeIterable(0, 0, 0), sliceIterable(undefined, 3), (source) => [
      ...source,
    ]),
  ).toMatchInlineSnapshot(`
    Array [
      0,
      0,
      0,
    ]
  `);
});
