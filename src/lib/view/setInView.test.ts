import { applyPipe } from '../applyPipe';
import { identityView } from './identityView';
import { setInView } from './setInView';

it('works', () => {
  expect(applyPipe(1, identityView, setInView(2))).toEqual(2);
});
