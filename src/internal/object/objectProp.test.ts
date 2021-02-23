import { isEmptyIterable } from '../iterable/isEmptyIterable';
import { pipe } from '../pipe';
import { asView } from '../types/asView';
import { rootView } from '../view/rootView';
import { objectKeys } from './objectKeys';
import { objectProp } from './objectProp';

it('works with non-optional properties', () => {
  type State = { a: { b: number; c: number }; d: number };
  const state: State = { a: { b: 1, c: 2 }, d: 3 };
  expect(pipe(rootView(state), objectProp('a'), objectProp('b')).set(4))
    .toMatchInlineSnapshot(`
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
    pipe(
      rootView<{ [symbol]: number }>({ [symbol]: 1 }),
      objectProp(symbol),
    ).set(2),
  ).toMatchInlineSnapshot(`
    Object {
      Symbol(): 2,
    }
  `);
});

it('works with optional properties', () => {
  type State = { a?: { b?: number; c?: number }; d: number };
  const state: State = { a: { b: 1 }, d: 3 };
  const { get, set } = pipe(rootView(state), objectProp('a'));
  const aView = asView({
    get: () => get() ?? {},
    set: (value) =>
      set(
        value === undefined || pipe(value, objectKeys, isEmptyIterable)
          ? undefined
          : value,
      ),
  });
  expect(pipe(aView, objectProp('b')).set(undefined)).toMatchInlineSnapshot(`
    Object {
      "d": 3,
    }
  `);
  expect(pipe(aView, objectProp('c')).set(4)).toMatchInlineSnapshot(`
    Object {
      "a": Object {
        "b": 1,
        "c": 4,
      },
      "d": 3,
    }
  `);
  expect(pipe(aView, objectProp('b')).set(undefined)).toMatchInlineSnapshot(`
    Object {
      "d": 3,
    }
  `);
  expect(pipe(aView, objectProp('b'), ({ get, set }) => set((get() ?? 10) + 1)))
    .toMatchInlineSnapshot(`
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
    pipe(
      rootView<{ [key: string]: number }>({ a: 1, b: 2 }),
      objectProp('a'),
    ).set(undefined),
  ).toMatchInlineSnapshot(`
    Object {
      "b": 2,
    }
  `);
  expect(
    pipe(
      rootView<{ [key: string]: number }>({ a: 1, b: 2 }),
      objectProp('a'),
    ).set(3),
  ).toMatchInlineSnapshot(`
    Object {
      "a": 3,
      "b": 2,
    }
  `);
});

it('works in example 1 from README', () => {
  type State = { a: { b: string; c: string } };

  /**
   * A reducer that sets the value of `b` in the state to the payload.
   **/
  const sampleReducer = (state: State, action: { payload: string }) =>
    pipe(
      // Returns `View<State, State>`.
      rootView(state),
      // Transforms values into `View<State, { b: string; c: string }>`.
      objectProp('a'),
      // Transforms values into `View<State, string>`.
      objectProp('b'),
    )
      // `set` takes a value for `b` and returns a new `State`.
      .set(action.payload);

  expect(sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});

it('works in example 2 from README', () => {
  type State = { a?: { b: string; c: string } };

  const sampleReducer = (state: State, action: { payload: string }) =>
    pipe(
      rootView(state),
      // Transforms values into `View<State, { b: string; c: string } |
      // undefined>`.
      objectProp('a'),
      // Transforms values into `View<State, { b: string; c: string }>`.
      ({ get, set }) => ({
        get: () => get() ?? { b: '', c: '' },
        set,
      }),
      objectProp('b'),
    ).set(action.payload);

  expect(sampleReducer({}, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});
