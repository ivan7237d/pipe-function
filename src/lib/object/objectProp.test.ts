import { applyPipe } from '../applyPipe';
import { anyInIterable } from '../iterable/anyInIterable';
import { mapIterable } from '../iterable/mapIterable';
import { asView } from '../types/asView';
import { identityView } from '../view/identityView';
import { mapInView } from '../view/mapInView';
import { setInView } from '../view/setInView';
import { objectProp } from './objectProp';
import { objectValues } from './objectValues';

it('works with non-optional properties', () => {
  type State = { a: { b: number; c: number }; d: number };
  const state: State = { a: { b: 1, c: 2 }, d: 3 };
  expect(
    applyPipe(
      state,
      identityView,
      objectProp('a'),
      objectProp('b'),
      setInView(4),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": Object {
        "b": 4,
        "c": 2,
      },
      "d": 3,
    }
  `);
});

it('works with optional properties', () => {
  type State = { a?: { b?: number; c?: number }; d: number };
  const state: State = { a: { b: 1 }, d: 3 };
  const [value, set] = applyPipe(state, identityView, objectProp('a'));
  const aView = asView([
    value ?? {},
    (value) =>
      set(
        value !== undefined &&
          applyPipe(
            value,
            objectValues,
            mapIterable((value) => value !== undefined),
            anyInIterable,
          )
          ? value
          : undefined,
      ),
  ]);
  expect(applyPipe(aView, objectProp('c'), setInView(4)))
    .toMatchInlineSnapshot(`
    Object {
      "a": Object {
        "b": 1,
        "c": 4,
      },
      "d": 3,
    }
  `);
  expect(applyPipe(aView, objectProp('b'), ([, set]) => set(undefined)))
    .toMatchInlineSnapshot(`
    Object {
      "a": undefined,
      "d": 3,
    }
  `);
  expect(
    applyPipe(
      aView,
      objectProp('b'),
      mapInView((value) => (value ?? 10) + 1),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": Object {
        "b": 2,
      },
      "d": 3,
    }
  `);
});
