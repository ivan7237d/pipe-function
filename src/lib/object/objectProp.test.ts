import { applyPipe } from '../applyPipe';
import { isEmptyIterable } from '../iterable/isEmptyIterable';
import { View } from '../types/types';
import { rootView } from '../view/rootView';
import { objectKeys } from './objectKeys';
import { objectProp } from './objectProp';

it('works with non-optional properties', () => {
  type State = { a: { b: number; c: number }; d: number };
  const state: State = { a: { b: 1, c: 2 }, d: 3 };
  expect(
    applyPipe(rootView(state), objectProp('a'), objectProp('b'), ([, set]) =>
      set(4),
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
  const symbol = Symbol();
  expect(
    applyPipe(
      rootView({ [symbol]: 1 } as { [symbol]: number }),
      objectProp(symbol),
      ([, set]) => set(2),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      Symbol(): 2,
    }
  `);
});

it('works with optional properties', () => {
  type State = { a?: { b?: number; c?: number }; d: number };
  const state: State = { a: { b: 1 }, d: 3 };
  const [value, set] = applyPipe(rootView(state), objectProp('a'));
  const valueOrDefault = value ?? {};
  const aView: View<State, typeof valueOrDefault> = [
    valueOrDefault,
    (value) =>
      set(
        value === undefined || applyPipe(value, objectKeys, isEmptyIterable)
          ? undefined
          : value,
      ),
  ];
  expect(applyPipe(aView, objectProp('b'), ([, set]) => set(undefined)))
    .toMatchInlineSnapshot(`
    Object {
      "d": 3,
    }
  `);
  expect(applyPipe(aView, objectProp('c'), ([, set]) => set(4)))
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
      "d": 3,
    }
  `);
  expect(
    applyPipe(aView, objectProp('b'), ([value, set]) => set((value ?? 10) + 1)),
  ).toMatchInlineSnapshot(`
    Object {
      "a": Object {
        "b": 2,
      },
      "d": 3,
    }
  `);
});

it('works with index signatures', () => {
  expect(
    applyPipe(
      rootView({ a: 1, b: 2 } as { [key: string]: number }),
      objectProp('a'),
      ([, set]) => set(undefined),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "b": 2,
    }
  `);
  expect(
    applyPipe(
      rootView({ a: 1, b: 2 } as { [key: string]: number }),
      objectProp('a'),
      ([, set]) => set(3),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 3,
      "b": 2,
    }
  `);
});

it('works in example 1 from README', () => {
  type State = { a: { b: string; c: string } };

  const sampleReducer = (state: State, action: { payload: string }) =>
    applyPipe(
      [state, (value) => value] as View<State, State>,
      objectProp('a'),
      objectProp('b'),
      ([, set]) => set(action.payload),
    );

  expect(sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});

it('works in example 2 from README', () => {
  type State = { a: { b: string; c: string } };

  const sampleReducer = (state: State, action: { payload: string }) =>
    applyPipe(
      rootView(state),
      objectProp('a'),
      objectProp('b'),
      // Was `([, set]) => set(action.payload)`.
      ([, set]) => set(action.payload),
    );

  expect(sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});

it('works in example 3 from README', () => {
  type State = { a?: { b: string; c: string } };

  const sampleReducer = (state: State, action: { payload: string }) => {
    // `View<State, { b: string; c: string } | undefined>`
    const [value, set] = applyPipe(rootView(state), objectProp('a'));
    const valueOrDefault = value ?? { b: '', c: '' };
    // `View<State, { b: string; c: string }>`
    const view: View<State, typeof valueOrDefault> = [
      value ?? { b: '', c: '' },
      set,
    ];
    return applyPipe(view, objectProp('b'), ([, set]) => set(action.payload));
  };

  expect(sampleReducer({}, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});
