import { applyPipe } from '../applyPipe';
import { identityView } from './identityView';
import { mapInView } from './mapInView';

it('works', () => {
  expect(
    applyPipe(
      1,
      identityView,
      mapInView((value) => value + 1),
    ),
  ).toEqual(2);
});
