import { applyPipe } from '../applyPipe';
import { lastInIterable } from './lastInIterable';
import { mapIterable } from './mapIterable';

it('works', () => {
  expect(applyPipe([0, 1], lastInIterable)).toEqual(1);
  expect(applyPipe([], lastInIterable)).toEqual(undefined);
  expect(
    applyPipe(
      [0, 1],
      mapIterable((value) => value),
      lastInIterable,
    ),
  ).toEqual(1);
  expect(
    applyPipe(
      [],
      mapIterable((value) => value),
      lastInIterable,
    ),
  ).toEqual(undefined);
});
