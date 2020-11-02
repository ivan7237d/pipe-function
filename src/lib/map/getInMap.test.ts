import { applyPipe } from '../applyPipe';
import { getInMap } from './getInMap';

it('works', () => {
  expect(
    applyPipe(
      new Map([
        ['a', 0],
        ['b', 1],
      ]),
      getInMap('a'),
    ),
  ).toMatchInlineSnapshot(`0`);
  expect(applyPipe(new Map([['a', 0]]), getInMap('b'))).toMatchInlineSnapshot(
    `undefined`,
  );
});
