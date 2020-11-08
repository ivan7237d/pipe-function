# @obvibase/utils

Utils for writing functional-style code in TypeScript using a pipeline operator polyfill.

- Minimal, easy-to-learn API.

- Includes [functions for working with native `Iterable`s](#iterables) that match their counterparts for working with observables in RxJS.

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

The library includes a function `applyPipe` which takes between 1 and 12 arguments and works as follows: `applyPipe(x, a, b)` is equivalent to `b(a(x))`, or expressing this using the pipeline operator, `x |> a |> b`. Type inference works well with this function, and eventually, once the pipeline operator reaches stage 3 and starts to be supported in TypeScript, it should be easy to build a codemod that will convert the function to the operator.

## Iterables

[Functions for working with iterables](https://github.com/obvibase/utils/tree/master/src/lib/iterable) have signatures that try to stay close to equivalent RxJS operators, but have names like `mapIterable` that do not clash with RxJS.

To keep the API simple, functions like `mapIterable` and `filterIterable` have callbacks that only take the element as an argument, and don't take second and third arguments (element index and source object), in contrast to native array methods and RxJS operators. If you need the index, use `zipIterables(rangeIterable(), yourIterable)` (returns an iterable of `[<element index>, <element>]`), and if you only need a boolean indicating whether the element is the first element, use `zipIterables(firstIterable, yourIterable)` (returns an iterable of `[boolean, <element>]`).

Tip: if filtering an iterable changes the type of the elements, use `flatMapIterable` instead of `filterIterable`: the type of elements in

```ts
applyPipe(
  [1, undefined],
  filterIterable((value) => value !== undefined),
);
```

will be inferred as `Iterable<number | undefined>`, while for

```ts
applyPipe(
  [1, undefined],
  flatMapIterable((value) => (value === undefined ? [] : [value])),
);
```

it will be inferred as `Iterable<number>`.

## Objects, arrays, maps and sets

The library includes non-mutating functions for working with [objects](https://github.com/obvibase/utils/tree/master/src/lib/object), [arrays](https://github.com/obvibase/utils/tree/master/src/lib/array), [maps](https://github.com/obvibase/utils/tree/master/src/lib/map), and [sets](https://github.com/obvibase/utils/tree/master/src/lib/set), but we do not duplicate for arrays, maps etc. those functions that are applicable to any iterable, so to filter an array into another array you would write

```ts
applyPipe(
  [1, 2],
  filterIterable((value) => value > 1),
  iterableToArray,
);
```

The functions accept both plain and read-only versions of data structures as arguments, and return read-only versions (`readonly []`, `{ readonly a: number; }`, `ReadonlyMap`, `ReadonlySet` - all TypeScript-only concepts).

Functions that set a value in an object (`setInObject`) or a map (`setInMap`) will delete the key if you pass to them the value of `undefined`. Because of this, avoid object types with required properties that can be equal to `undefined` (so instead of `{a: string | undefined}`, use `{a?: string}`) - otherwise trying to use `setInObject` will produce a typechecking error.

Tip: make sure you enable strictly checked indexed access using [`--noUncheckedIndexedAccess` compiler flag](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-rc/#no-unchecked-indexed-access).

A performance-related note on functions `reverseArray` and `sliceArray`: these functions can be implemented either using iteration or using native array methods, and one can think up use-cases where each approach has significantly better performance than the other. Since implementing both approaches would only create clutter for the majority of use-cases where the difference doesn't matter, we only use the first one (iteration), and leave it to the developer to fall back to native array methods when necessary.

## Tuples

For tuples (a TypeScript concept) we provide a single function [`mapTuple`](https://github.com/obvibase/utils/blob/master/src/lib/tuple/mapTuple.ts) which maps an array into another array while retaining information on its length and names of its elements, so that the type of

```ts
applyPipe(
  [1, 2] as [first: number, second: number],
  mapTuple((value) => `${value}`),
);
```

will be inferred as `[first: string, second: string]` rather than `string[]`.

Tip: if you write `['a', 1]` by itself, TypeScript compiler will infer the type as `(string | number)[]`. To make this a tuple `[string, number]` without having to cast to a specific type, use `['a', 1] as const`. For example, you would write `applyPipe([['a', 1]] as const, iterableToMap)` - if you omit `as const`, this will cause a typechecking error.

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
const a: StateView<{ a: number }> = [{ a: 1 }, someSetter];
```

into an equivalent of

```ts
const b: StateView<number> = [1, (value) => someSetter({ a: value })];
```

We can write a React component as follows, using a [`bindingProps`](https://github.com/obvibase/utils/blob/master/src/lib/react/bindingProps.ts) helper function that converts a `StateView` like `[1, set]` into an object that React understands like `{ value: 1, onChange: ({ currentTarget: { value } }) => set(value) }`.

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

In the above example, we used `objectProp` lens to transform a `StateView` into another `StateView`, but like other lenses, it also works on `StateView`'s supertype `View`. Thanks to that, we can use `objectProp` in the conventional way to immutably set a property nested within a larger structure, as in the below example of a reducer. We're going to use the following helper functions:

- [`identity`](https://github.com/obvibase/utils/blob/master/src/lib/identity.ts): `const identity = <T>(value: T) => value`.

- [`asView`](https://github.com/obvibase/utils/blob/master/src/lib/types/asView.ts): also just an identity function but casts the value as `View` to help type inference: `const asView = <S, A>(value: View<S, A>): View<S, A> => value`).

- [`setInView`](https://github.com/obvibase/utils/blob/master/src/lib/view/setInView.ts): `applyPipe(view, setInView(value))` is equivalent to `applyPipe(view, ([, set]) => set(value))`.

A reducer would look like this:

```ts
type State = { a: { b: string; c: string } };

const sampleReducer = (state: State, action: { payload: string }) =>
  applyPipe(
    asView([state, identity]),
    objectProp('a'),
    objectProp('b'),
    setInView(action.payload),
  );
```

So for example `sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })` would return `{ a: { b: 'x', c: '' } }`.

If the properties in the `State` were optional, we could write our code as follows to have type safety without explicitly specifying types:

```ts
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
```

The library also includes the following lens-related functions in addition to those already mentioned:

- [`valueInView`](https://github.com/obvibase/utils/blob/master/src/lib/view/valueInView.ts): `applyPipe(view, valueInView)` is equivalent to `applyPipe(view, ([value]) => value)`.

- [`mapInView`](https://github.com/obvibase/utils/blob/master/src/lib/view/mapInView.ts): `applyPipe(view, mapInView(value => value + 1))` is equivalent to `applyPipe(view, ([value, set]) => set(value + 1))`.

- [`mapProp`](https://github.com/obvibase/utils/blob/master/src/lib/map/mapProp.ts): a lens to zoom in on a value of a `Map`.

- [`setProp`](https://github.com/obvibase/utils/blob/master/src/lib/set/setProp.ts): a lens to zoom in on presence of an element in a `Set`.

- [`asStateView`](https://github.com/obvibase/utils/blob/master/src/lib/types/asStateView.ts) - similar to `asView`.

## Miscellaneous

- [`memoize`](https://github.com/obvibase/utils/blob/master/src/lib/memoize.ts): a utility to memoize values using WeakMap.

- [`assertNever`](https://github.com/obvibase/utils/blob/master/src/lib/assertNever.ts): utility used to typecheck that a conditional has exhausted all possibilities, e.g. if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1 ? 'one' : assertNever(a)`.

---

[Contributing guidelines](https://github.com/obvibase/utils/blob/master/.github/CONTRIBUTING.md)
