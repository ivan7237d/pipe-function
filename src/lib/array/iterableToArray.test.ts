import { applyPipe } from '../applyPipe';
import { rangeIterable } from '../iterable/rangeIterable';
import { iterableToArray } from './iterableToArray';

it('works', () => {
  expect(applyPipe(rangeIterable(undefined, 3), iterableToArray))
    .toMatchInlineSnapshot(`
  Array [
    0,
    1,
    2,
  ]
`);
});
