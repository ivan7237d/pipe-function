import { applyPipe } from '../applyPipe';
import { reduceIterable } from './reduceIterable';

it('works', () => {
  expect(
    applyPipe(
      [0, 1],
      reduceIterable((accumulator, value) => `${accumulator}${value}`, 'a'),
    ),
  ).toEqual('a01');
});
