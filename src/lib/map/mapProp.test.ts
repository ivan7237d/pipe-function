import { applyPipe } from '../applyPipe';
import { identityView } from '../view/identityView';
import { setInView } from '../view/setInView';
import { mapProp } from './mapProp';

it('works', () => {
  const state: ReadonlyMap<string, ReadonlyMap<string, number>> = new Map([
    ['a', new Map([['b', 0]])],
    ['c', new Map([['d', 1]])],
  ]);
  const [value, set] = applyPipe(state, identityView, mapProp('a'));
  if (value === undefined) {
    throw undefined;
  }
  expect(applyPipe([value, set], mapProp('b'), setInView(4)))
    .toMatchInlineSnapshot(`
    Map {
      "a" => Map {
        "b" => 4,
      },
      "c" => Map {
        "d" => 1,
      },
    }
  `);
});
