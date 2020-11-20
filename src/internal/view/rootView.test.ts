import { applyPipe } from '../applyPipe';
import { rootView } from './rootView';

it('works', () => {
  expect(applyPipe(rootView(1), ([value]) => value)).toEqual(1);
  expect(applyPipe(rootView(1), ([, set]) => set(2))).toEqual(2);
});
