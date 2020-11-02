import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { asView } from '../types/asView';
import { mapInView } from './mapInView';

it('works', () => {
  expect(
    applyPipe(
      asView([1, identity]),
      mapInView((value) => value + 1),
    ),
  ).toEqual(2);
});
