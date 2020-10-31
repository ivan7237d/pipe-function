import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { deleteFromObject } from './deleteFromObject';

it('works', () => {
  expect(applyPipe({ a: 0, b: 1 }, deleteFromObject('a')))
    .toMatchInlineSnapshot(`
    Object {
      "b": 1,
    }
  `);
  expect(
    applyPipe(
      identity<{ [key: string]: number }>({ a: 0, b: 1 }),
      deleteFromObject('c'),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 0,
      "b": 1,
    }
  `);
});
