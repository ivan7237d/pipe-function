import { applyPipe } from '../applyPipe';
import { setHas } from './setHas';

it('works', () => {
  expect(applyPipe(new Set([0, 1] as const), setHas(1))).toEqual(true);
  expect(applyPipe(new Set([0, 1] as const), setHas(2))).toEqual(false);
});
