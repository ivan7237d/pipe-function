import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { getInObject } from './getInObject';

it('works', () => {
  expect(applyPipe({ a: 0, b: 1 }, getInObject('a'))).toMatchInlineSnapshot(
    `0`,
  );
  expect(
    applyPipe(
      identity<{ a: number; b?: number }>({ a: 0 }),
      getInObject('b'),
    ),
  ).toMatchInlineSnapshot(`undefined`);
  expect(
    applyPipe(identity<{ [key: string]: number }>({}), getInObject('a')),
  ).toMatchInlineSnapshot(`undefined`);
  const symbol = Symbol();
  expect(
    applyPipe({ [symbol]: 'value' }, getInObject(symbol)),
  ).toMatchInlineSnapshot(`"value"`);
});
