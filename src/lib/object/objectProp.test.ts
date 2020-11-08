import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { isEmptyIterable } from '../iterable/isEmptyIterable';
import { asView } from '../types/asView';
import { mapInView } from '../view/mapInView';
import { setInView } from '../view/setInView';
import { objectKeys } from './objectKeys';
import { objectProp } from './objectProp';

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
  const symbol = Symbol();
  expect(
    applyPipe(
      asView([{ [symbol]: 1 } as { [symbol]: number }, identity]),
      objectProp(symbol),
      setInView(2),
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
  const [value, set] = applyPipe(asView([state, identity]), objectProp('a'));
  const aView = asView([
    value ?? {},
    (value) =>
      set(
        value === undefined || applyPipe(value, objectKeys, isEmptyIterable)
          ? undefined
          : value,
      ),
  ]);
  expect(applyPipe(aView, objectProp('b'), setInView(undefined)))
    .toMatchInlineSnapshot(`
    Object {
      "d": 3,
    }
  `);
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

it('works with index signatures', () => {
  expect(
    applyPipe(
      asView([{ a: 1, b: 2 } as { [key: string]: number }, identity]),
      objectProp('a'),
      setInView(undefined),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "b": 2,
    }
  `);
  expect(
    applyPipe(
      asView([{ a: 1, b: 2 } as { [key: string]: number }, identity]),
      objectProp('a'),
      setInView(3),
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
      [state, (value: State) => value] as const,
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
      // Was `[state, (value: State) => value] as const`.
      asView([state, identity]),
      objectProp('a'),
      objectProp('b'),
      // Was `([, set]) => set(action.payload)`.
      setInView(action.payload),
    );

  expect(sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});

it('works in example 3 from README', () => {
  type State = { a?: { b: string; c: string } };

  const sampleReducer = (state: State, action: { payload: string }) => {
    // `View<State, { b: string; c: string } | undefined>`
    const [value, set] = applyPipe(asView([state, identity]), objectProp('a'));
    // `View<State, { b: string; c: string }>`
    const view = asView([value ?? { b: '', c: '' }, set]);
    return applyPipe(view, objectProp('b'), setInView(action.payload));
  };

  expect(sampleReducer({}, { payload: 'x' })).toEqual({
    a: { b: 'x', c: '' },
  });
});
