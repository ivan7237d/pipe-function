import { applyPipe } from '../applyPipe';
import { iterableToMap } from './iterableToMap';
import { mapHas } from './mapHas';

it('works', () => {
  expect(
    applyPipe([['a', 0]] as const, iterableToMap, mapHas('a')),
  ).toMatchInlineSnapshot(`true`);

  expect(
    applyPipe([['a', 0]] as const, iterableToMap, mapHas('b')),
  ).toMatchInlineSnapshot(`false`);
});
