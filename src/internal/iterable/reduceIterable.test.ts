import { applyPipe } from '../applyPipe';
import { reduceIterable } from './reduceIterable';

it('works', () => {
  expect(
    applyPipe(
      [0, 1],
      reduceIterable((accumulator, value) => `${accumulator}${value}`, 'a'),
    ),
  ).toEqual('a01');
  expect(
    applyPipe(
      ['a', 'b'],
      reduceIterable((accumulator, value) => `${accumulator}${value}`),
    ),
  ).toMatchInlineSnapshot(`"ab"`);
  expect(
    applyPipe(
      [] as string[],
      reduceIterable((accumulator, value) => `${accumulator}${value}`),
    ),
  ).toMatchInlineSnapshot(`undefined`);
  expect(
    applyPipe(
      [0, 1, 2],
      reduceIterable((accumulator, value) =>
        accumulator === 1 ? undefined : value,
      ),
    ),
  ).toMatchInlineSnapshot(`1`);
  expect(
    applyPipe(
      [0, 1, 2],
      reduceIterable((...[, value]) => value),
    ),
  ).toMatchInlineSnapshot(`2`);
  expect(
    applyPipe(
      [0, 1, 2],
      reduceIterable((): number | undefined => undefined),
    ),
  ).toMatchInlineSnapshot(`0`);
});
