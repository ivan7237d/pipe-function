import { applyPipe } from '../applyPipe';
import { sliceReversedArray } from './sliceReversedArray';

it('works', () => {
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray(1, 2)))
    .toMatchInlineSnapshot(`
    Array [
      2,
    ]
  `);
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray(0, 3)))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray(-1, 4)))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray(1)))
    .toMatchInlineSnapshot(`
    Array [
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray(undefined, 2)))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect(
    applyPipe([1, 2, 3].reverse(), sliceReversedArray(3, 2)),
  ).toMatchInlineSnapshot(`Array []`);
  expect([
    ...applyPipe([1, 2, 3].reverse(), sliceReversedArray(undefined, -1)),
  ]).toMatchInlineSnapshot(`Array []`);
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray(-1)))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect(applyPipe([1, 2, 3].reverse(), sliceReversedArray()))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
});
