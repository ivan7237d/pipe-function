import { applyPipe } from '../applyPipe';
import { anyIterable } from './anyIterable';

it('works', () => {
  expect(applyPipe([], anyIterable)).toEqual(false);

  expect(applyPipe([false, false], anyIterable)).toEqual(false);

  expect(applyPipe([false, true], anyIterable)).toEqual(true);
});
