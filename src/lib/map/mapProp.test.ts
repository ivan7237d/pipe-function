import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { asView } from '../types/asView';
import { setInView } from '../view/setInView';
import { mapProp } from './mapProp';

it('works for non-readonly maps', () => {
  const state = new Map([
    ['a', new Map([['b', 0]])],
    ['c', new Map([['d', 1]])],
  ]);
  const [value, set] = applyPipe(asView([state, identity]), mapProp('a'));
  if (value === undefined) {
    throw undefined;
  }
  expect(applyPipe(asView([value, set]), mapProp('b'), setInView(4)))
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

it('works for readonly maps', () => {
  const state: ReadonlyMap<string, ReadonlyMap<string, number>> = new Map([
    ['a', new Map([['b', 0]])],
    ['c', new Map([['d', 1]])],
  ]);
  applyPipe(asView([state, identity]), mapProp('a'));
});
