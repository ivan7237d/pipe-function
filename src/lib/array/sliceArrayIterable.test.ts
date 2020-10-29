import { applyPipe } from '../applyPipe';
import { iterableToArray } from './iterableToArray';
import { sliceArrayIterable } from './sliceArrayIterable';

it('works', () => {
  expect(applyPipe([1, 2, 3], sliceArrayIterable(1, 2), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      2,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArrayIterable(0, 3), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArrayIterable(-1, 4), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArrayIterable(1), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      2,
      3,
    ]
  `);
  expect(
    applyPipe([1, 2, 3], sliceArrayIterable(undefined, 2), iterableToArray),
  ).toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect(
    applyPipe([1, 2, 3], sliceArrayIterable(3, 2), iterableToArray),
  ).toMatchInlineSnapshot(`Array []`);
  expect(
    applyPipe([1, 2, 3], sliceArrayIterable(undefined, -1), iterableToArray),
  ).toMatchInlineSnapshot(`Array []`);
  expect(applyPipe([1, 2, 3], sliceArrayIterable(-1), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArrayIterable(), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
});
