import { applyPipe } from '../applyPipe';
import { rangeIterable } from './rangeIterable';
import { takeIterable } from './takeIterable';

it('works', () => {
  expect(applyPipe(rangeIterable(), takeIterable(3), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      0,
      1,
      2,
    ]
  `);
  expect(applyPipe(rangeIterable(undefined, 3), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      0,
      1,
      2,
    ]
  `);
  expect(applyPipe(rangeIterable(1, 3), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect(applyPipe(rangeIterable(10, 30, 10), (source) => [...source]))
    .toMatchInlineSnapshot(`
    Array [
      10,
      20,
    ]
  `);
});
