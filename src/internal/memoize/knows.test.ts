import { knows } from './knows';
import { memoizeWeak } from './memoizeWeak';
import { teach } from './teach';

it('works', () => {
  const a = [0] as const;
  const callback = ([value]: readonly [number]) => value;
  const decorated = memoizeWeak(callback);
  expect(knows(decorated, a)).toEqual(false);
  teach(decorated, a, 0);
  expect(knows(decorated, a)).toEqual(true);
});
