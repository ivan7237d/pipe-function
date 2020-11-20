import { memoize } from './memoize';

it('works', () => {
  const a = [0] as const;
  const b = [1] as const;
  const source = ([value]: readonly [number]) => value;
  const [decorated, teach] = memoize(source);
  expect(decorated(a)).toEqual(0);
  expect(decorated(a)).toEqual(0);
  teach(b, 3);
  expect(decorated(b)).toEqual(3);
});
