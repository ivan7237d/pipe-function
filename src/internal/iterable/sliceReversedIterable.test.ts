import { applyPipe } from '../applyPipe';
import { rangeIterable } from './rangeIterable';
import { sliceReversedIterable } from './sliceReversedIterable';

it('works for arrays', () => {
  expect([...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(1, 2))])
    .toMatchInlineSnapshot(`
    Array [
      2,
    ]
  `);
  expect([...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(0, 3))])
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect([...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(-1, 4))])
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect([...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(1))])
    .toMatchInlineSnapshot(`
    Array [
      2,
      3,
    ]
  `);
  expect([
    ...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(undefined, 2)),
  ]).toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect([
    ...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(3, 2)),
  ]).toMatchInlineSnapshot(`Array []`);
  expect([
    ...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(undefined, -1)),
  ]).toMatchInlineSnapshot(`Array []`);
  expect([...applyPipe([1, 2, 3].reverse(), sliceReversedIterable(-1))])
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect([...applyPipe([1, 2, 3].reverse(), sliceReversedIterable())])
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
});

it('accepts a non-array iterable', () => {
  expect([...applyPipe(rangeIterable(0, 4), sliceReversedIterable(0, 1))])
    .toMatchInlineSnapshot(`
    Array [
      3,
    ]
  `);
});
