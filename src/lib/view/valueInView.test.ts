import { applyPipe } from '../applyPipe';
import { identityView } from './identityView';
import { valueInView } from './valueInView';

it('works', () => {
  expect(applyPipe(1, identityView, valueInView)).toEqual(1);
});
