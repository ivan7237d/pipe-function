# @obvibase/utils

Utils for writing functional-style code in TypeScript using a pipeline operator polyfill.

- Minimal API: based on "only one way to do it" principle, the library provides a utility only when something can't be easily done with vanilla JavaScript.

- [Non-mutating functions for working with objects, arrays, maps, and sets](#objects-arrays-maps-and-sets).

- [Functions for working with native `Iterable`s](#iterables) that match their counterparts for working with observables in RxJS.

- [React-friendly lenses](#lenses).

- Fully tree-shakeable.

- Includes TypeScript type definitions and designed with an eye to type inference.

## Installing

```
yarn add @obvibase/utils
```

or

```
npm install @obvibase/utils --save
```

## Pipeline operator polyfill

The library includes a function `applyPipe` which takes between 1 and 12 arguments: `applyPipe(x, a, b)` is equivalent to `b(a(x))`, or using the pipeline operator, `x |> a |> b`. Type inference works well with this function, and eventually once the pipeline operator reaches stage 3 and starts to be supported in TypeScript, it would be straightforward to build a codemod to convert the function to the operator.

The library intentionally doesn't include a `pipe` function that would compose functions without applying the resulting function to an argument, mainly because this would break the "only one way to do it" rule.

## Objects, arrays, maps and sets

The library includes non-mutating functions for working with [objects](https://github.com/obvibase/utils/tree/master/src/lib/object), [arrays](https://github.com/obvibase/utils/tree/master/src/lib/array), [maps](https://github.com/obvibase/utils/tree/master/src/lib/map), and [sets](https://github.com/obvibase/utils/tree/master/src/lib/set).

> :bulb: If you use TypeScript 4.1+, make sure you enable strictly checked indexed access using [`--noUncheckedIndexedAccess` compiler flag](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-rc/#no-unchecked-indexed-access).

## Iterables

[Functions for working with iterables](https://github.com/obvibase/utils/tree/master/src/lib/iterable) have signatures that try to stay close to equivalent RxJS operators, but have names like `mapIterable` that do not clash with RxJS.

> :bulb: To keep the API simple, functions like `mapIterable` and `filterIterable` have callbacks that only take the element as an argument, and don't take second and third arguments (element index and source object), in contrast to native array methods and RxJS operators. If you need the index, use `zipIterables(rangeIterable(), yourIterable)` (returns an iterable of `[<element index>, <element>]`), and if you only need a boolean indicating whether the element is the first element, use `zipIterables(firstIterable, yourIterable)` (returns an iterable of `[boolean, <element>]`).

> :bulb: If filtering an iterable changes the type of the elements, use `flatMapIterable` instead of `filterIterable`: the type of elements in
>
> ```ts
> applyPipe(
>   [1, undefined],
>   filterIterable((value) => value !== undefined),
> );
> ```
>
> will be inferred as `Iterable<number | undefined>`, while for
>
> ```ts
> applyPipe(
>   [1, undefined],
>   flatMapIterable((value) => (value === undefined ? [] : [value])),
> );
> ```
>
> it will be inferred as `Iterable<number>`. The same trick works when filtering arrays and observables.

## Comparison functions

The library exports types

```ts
type CompareFunction<T> = (to: T, from: T) => number;
type EqualFunction<T> = (from: T, to: T) => boolean;
```

It [provides](https://github.com/obvibase/utils/tree/master/src/lib/compare) implementations of `CompareFunction` for primitive types and a function `lexicographicCompare` to compose `CompareFunction`s.

It also provides implementations of `EqualFunction` for objects, iterables, maps, and sets, and a function [`deepEqual`](https://github.com/obvibase/utils/blob/master/src/lib/deepEqual.ts) that recursively delegates to those functions depending on the object type.

## Lenses

When building React components, it's convenient to work with a type which we'll call `StateView`:

```ts
type StateView<A> = readonly [value: A, set: (value: A) => void];
```

It is a subtype of the type returned by React's `setState` hook, and it is also what you would want to pass to an input element such as a textbox to create a two-way binding. In this library we actually define `StateView` as a subtype of another type called `View`:

```ts
type View<S, A> = readonly [value: A, set: (value: A) => S];
type StateView<A> = View<void, A>;
```

and we define a `Lens` as a function that transforms a `View` into another `View`.

To see how this works, consider [`objectProp`](https://github.com/obvibase/utils/blob/master/src/lib/object/objectProp.ts) lens which zooms in on an object's property: e.g. `objectProp('a')` would transform

```ts
// `someSetter` has type `(value: { a: number }) => void`.
const a: StateView<{ a: number }> = [{ a: 1 }, someSetter];
```

into an equivalent of

```ts
const b: StateView<number> = [1, (value: number) => someSetter({ a: value })];
```

We can write a React component as follows, using a [`bindingProps`](https://github.com/obvibase/utils/blob/master/src/lib/react/bindingProps.ts) helper function that converts a `StateView` like `[1, set]` into an object with props that React understands like `{ value: 1, onChange: ({ currentTarget: { value } }) => set(value) }`.

```ts
type State = { a: { b: string; c: string } };

/**
 * A component that encapsulates presentation logic but is agnostic as to how we
 * manage state.
 */
const StatelessComponent = ({ state }: { state: StateView<State> }) => (
  <div>
    <input
      {...applyPipe(state, objectProp('a'), objectProp('b'), bindingProps)}
    />
    <input
      {...applyPipe(state, objectProp('a'), objectProp('c'), bindingProps)}
    />
  </div>
);

export const StatefulComponent = () => {
  const state = React.useState<State>({ a: { b: '', c: '' } });
  return StatelessComponent({ state });
};
```

A nice thing is that as we get to a point where we need to type 'a', 'b', or 'c' in the code above, IntelliSense will show correct suggestions. When binding a checkbox, use [`bindingPropsCheckbox`](https://github.com/obvibase/utils/blob/master/src/lib/react/bindingPropsCheckbox.ts) instead of `bindingProps` so that `checked` prop would be used instead of `value`.

In the above example, we used `objectProp` lens to transform a `StateView` into another `StateView`, but like other lenses, it also works on `StateView`'s supertype `View`. Thanks to that, we can use `objectProp` in the conventional way to immutably set a property nested within a larger structure, as in the following example of a reducer that sets the value of `b` in `{ a: { b: string; c: string } }`:

```ts
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
```

There is a helper function [`rootView`](https://github.com/obvibase/utils/blob/master/src/lib/view/rootView.ts) which we can use to replace `[state, (value) => value] as View<State, State>` in the code above with just `rootView(state)`.

If the property `a` in the `State` is optional, and as before our reducer has to update `b`, simply chaining lenses will cause a typechecking error. Instead, we would write the reducer as follows:

```ts
type State = { a?: { b: string; c: string } };

const sampleReducer = (state: State, action: { payload: string }) => {
  // `View<State, { b: string; c: string } | undefined>`
  const [value, set] = applyPipe(rootView(state), objectProp('a'));
  const valueOrDefault = value ?? { b: '', c: '' };
  // `View<State, { b: string; c: string }>`. Typing `view` should become easier
  // once the issue https://github.com/microsoft/TypeScript/issues/10571 is fixed.
  const view: View<State, typeof valueOrDefault> = [
    value ?? { b: '', c: '' },
    set,
  ];
  return applyPipe(view, objectProp('b'), ([, set]) => set(action.payload));
};

expect(sampleReducer({}, { payload: 'x' })).toEqual({
  a: { b: 'x', c: '' },
});
```

The library also includes two other lenses:

- [`mapProp`](https://github.com/obvibase/utils/blob/master/src/lib/map/mapProp.ts): a lens to zoom in on a value of a `Map`.

- [`setProp`](https://github.com/obvibase/utils/blob/master/src/lib/set/setProp.ts): a lens to zoom in on presence of an element in a `Set`.

## Miscellaneous

- [`memoize`](https://github.com/obvibase/utils/blob/master/src/lib/memoize.ts): a utility to memoize values using WeakMap.

- [`assertNever`](https://github.com/obvibase/utils/blob/master/src/lib/assertNever.ts): utility used to typecheck that a conditional has exhausted all possibilities, e.g. if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1 ? 'one' : assertNever(a)`.

---

[Contributing guidelines](https://github.com/obvibase/utils/blob/master/.github/CONTRIBUTING.md)
