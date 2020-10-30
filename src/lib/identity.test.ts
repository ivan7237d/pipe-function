import { identity } from './identity';

it('works', () => {
  const value = {};
  expect(identity(value)).toBe(value);
});
