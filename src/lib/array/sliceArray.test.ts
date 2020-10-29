import { applyPipe } from '../applyPipe';
import { sliceArray } from './sliceArray';

it('works', () => {
  expect(applyPipe([1, 2, 3], sliceArray(1, 2))).toMatchInlineSnapshot(`
    Array [
      2,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(0, 3))).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(-1, 4))).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(1))).toMatchInlineSnapshot(`
    Array [
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(undefined, 2))).toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray(3, 2))).toMatchInlineSnapshot(
    `Array []`,
  );
  expect(applyPipe([1, 2, 3], sliceArray(undefined, -1))).toMatchInlineSnapshot(
    `Array []`,
  );
  expect(applyPipe([1, 2, 3], sliceArray(-1))).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3], sliceArray())).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
});
