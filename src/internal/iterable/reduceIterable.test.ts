import { pipe } from '../pipe';
import { as } from '../types/as';
import { asContext } from '../types/asContext';
import { reduceIterable } from './reduceIterable';

it('works', () => {
  expect(
    pipe(
      [0, 1],
      reduceIterable((accumulator, value) => `${accumulator}${value}`, 'a'),
    ),
  ).toEqual('a01');
  expect(
    pipe(
      ['a', 'b'],
      reduceIterable((accumulator, value) => `${accumulator}${value}`),
    ),
  ).toMatchInlineSnapshot(`"ab"`);
  expect(
    pipe(
      as<string[]>([]),
      reduceIterable((accumulator, value) => `${accumulator}${value}`),
    ),
  ).toMatchInlineSnapshot(`undefined`);
  expect(
    pipe(
      [0, 1, 2],
      reduceIterable((accumulator, value) =>
        accumulator === 1 ? undefined : value,
      ),
    ),
  ).toMatchInlineSnapshot(`1`);
  expect(
    pipe(
      [0, 1, 2],
      reduceIterable((...[, value]) => value),
    ),
  ).toMatchInlineSnapshot(`2`);
  expect(
    pipe([0, 1, 2], reduceIterable(asContext(() => undefined))),
  ).toMatchInlineSnapshot(`0`);
});
