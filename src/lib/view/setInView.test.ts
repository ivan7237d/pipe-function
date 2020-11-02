import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { asView } from '../types/asView';
import { setInView } from './setInView';

it('works', () => {
  expect(applyPipe(asView([1, identity]), setInView(2))).toEqual(2);
});
