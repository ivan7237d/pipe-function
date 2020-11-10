import { applyPipe } from '../applyPipe';
import { View } from '../types/types';
import { rootView } from '../view/rootView';
import { mapProp } from './mapProp';

it('works for non-readonly maps', () => {
  const state = new Map([
    ['a', new Map([['b', 0]])],
    ['c', new Map([['d', 1]])],
  ]);
  const [value, set] = applyPipe(rootView(state), mapProp('a'));
  if (value === undefined) {
    throw undefined;
  }
  expect(
    applyPipe(
      [value, set] as View<typeof state, typeof value>,
      mapProp('b'),
      ([, set]) => set(4),
    ),
  ).toMatchInlineSnapshot(`
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
  applyPipe(rootView(state), mapProp('a'));
});
