import { identity } from '../identity';
import { identityView } from './identityView';

it('works', () => {
  const a = identityView(1);
  expect(a).toEqual([1, identity]);
});
