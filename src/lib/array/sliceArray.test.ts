import { applyPipe } from '../applyPipe';
import { iterableToArray } from './iterableToArray';
import { sliceArray } from './sliceArray';

it('works', () => {
  expect(applyPipe([1, 2, 3], sliceArray(1, 2), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      2,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(0, 3), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(-1, 4), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(1), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(undefined, 2), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect(
    applyPipe([1, 2, 3], sliceArray(3, 2), iterableToArray),
  ).toMatchInlineSnapshot(`Array []`);
  expect(
    applyPipe([1, 2, 3], sliceArray(undefined, -1), iterableToArray),
  ).toMatchInlineSnapshot(`Array []`);
  expect(applyPipe([1, 2, 3], sliceArray(-1), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(), iterableToArray))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
});
