import { applyPipe } from '../applyPipe';
import { rootView } from '../view/rootView';
import { mapProp } from './mapProp';

it('works for non-readonly maps', () => {
  const state = new Map([
    ['a', new Map([['b', 0]])],
    ['c', new Map([['d', 1]])],
  ]);
  const { get, set } = applyPipe(rootView(state), mapProp('a'));
  expect(
    applyPipe(
      {
        get: () =>
          applyPipe(get(), (value) => {
            if (value === undefined) {
              throw undefined;
            }
            return value;
          }),
        set,
      },
      mapProp('b'),
    ).set(4),
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
