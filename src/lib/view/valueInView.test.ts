import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { asView } from '../types/asView';
import { valueInView } from './valueInView';

it('works', () => {
  expect(applyPipe(asView([1, identity]), valueInView)).toEqual(1);
});
