import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { anyInIterable } from '../iterable/anyInIterable';
import { mapIterable } from '../iterable/mapIterable';
import { asView } from '../types/asView';
import { mapInView } from '../view/mapInView';
import { setInView } from '../view/setInView';
import { objectProp } from './objectProp';
import { objectValues } from './objectValues';

it('works with non-optional properties', () => {
  type State = { a: { b: number; c: number }; d: number };
  const state: State = { a: { b: 1, c: 2 }, d: 3 };
  expect(
    applyPipe(
      asView([state, identity]),
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
  const [value, set] = applyPipe(asView([state, identity]), objectProp('a'));
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

it('works with optional parameters, example from README', () => {
  type State = { a?: { b?: string; c?: string } };

  const sampleReducer = (state: State, action: { payload: string }) => {
    // View<State, { b?: string; c?: string } | undefined>
    const [value, set] = applyPipe(asView([state, identity]), objectProp('a'));
    // View<State, { b?: string; c?: string }>
    const view = asView([
      value ?? {},
      (value) => set(value === undefined ? {} : value),
    ]);
    return applyPipe(view, objectProp('b'), setInView(action.payload));
  };
  expect(sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' }))
    .toMatchInlineSnapshot(`
    Object {
      "a": Object {
        "b": "x",
        "c": "",
      },
    }
  `);
});
