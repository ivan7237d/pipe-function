# @obvibase/utils

Utils for writing functional-style code in TypeScript using a pipeline operator polyfill.

- Minimal, easy-to-learn API.

- Includes functions for working with native `Iterable`s that match their counterparts for working with observables in RxJS.

- React-friendly lenses.

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

To keep the API simple, functions like `mapIterable` and `filterIterable` have callbacks that only take the element as an argument, and don't take second and third arguments (element index and source object), in contrast to native array methods and RxJS operators. If you need an index, use `zipIterable(rangeIterable(), yourIterable)` (returns an iterable of `[<element index>, <element>]`), and if you only need a boolean indicating whether the element is the first element, use `zipIterable(firstIterable, yourIterable)` (returns an iterable of `[boolean, <element>]`).

Tip: if filtering an iterable changes the type of the elements, use `flatMapIterable` instead of `filterIterable`: the type of elements in

```ts
applyPipe(
  [1, undefined],
  filterIterable((value) => value !== undefined),
);
```

will be inferred as `(number | undefined)[]`, while for

```ts
applyPipe(
  [1, undefined],
  flatMapIterable((value) => (value === undefined ? [] : [value])),
);
```

it will be inferred as `number[]`.

## Objects, arrays, maps and sets

The library provides functions for immutably working with [objects](https://github.com/obvibase/utils/tree/master/src/lib/object), [arrays](https://github.com/obvibase/utils/tree/master/src/lib/array), [maps](https://github.com/obvibase/utils/tree/master/src/lib/map) and [sets](https://github.com/obvibase/utils/tree/master/src/lib/set). Where necessary, functions to convert to/from an iterable are provided, but we do not duplicate for arrays, maps etc. those functions that are applicable to any iterable, so to map an array into another array you would write

```ts
applyPipe(
  [1, 2],
  mapIterable((value) => value * 2),
  iterableToArray,
);
```

A performance-related note on functions `reverseArray` and `sliceArray`: these functions can in principle be implemented either using iteration or using native array methods, and one can conceive of cases where each approach has significantly better performance. Since implementing both approaches would only create clutter for the majority of use-cases where the difference doesn't matter, we only use the first one, and leave it to the developer to fall back to native methods when necessary.

## Tuples

A tuple is a concept which is absent in JavaScript but exists in TypeScript. We provide a single tuple-related function `mapTuple` which maps an array into another array while retaining information on its length and names of its elements in the returned type, so that the type of

```ts
applyPipe(
  [1, 2] as [first: number, second: number],
  mapTuple((value) => `${value}`),
);
```

will be inferred as `[first: string, second: string]` rather than `string[]`.

Tip: if you write ['a', 1] by itself, TypeScript compiler will infer the type as (string | number)[]. To make this a tuple (i.e. [string, number]) without having to cast to a specific type, use `['a', 1] as const`.

## Comparison functions

The library exports types

```ts
type CompareFunction<T> = (to: T, from: T) => number;
type EqualFunction<T> = (from: T, to: T) => boolean;
```

It [provides](https://github.com/obvibase/utils/tree/master/src/lib/compare) implementations of `CompareFunction` for primitive types and a function `lexicographicCompare` to compose `CompareFunction`s.

It also provides implementations of `EqualFunction` for objects, arrays, maps, and sets, and a function [`deepEqual`](https://github.com/obvibase/utils/blob/master/src/lib/deepEqual.ts) that recursively delegates to those functions depending on the object type.

## Lenses

When building React components, it's convenient to work with a type which we'll call `StateView`:

```ts
type StateView<A> = readonly [value: A, set: (value: A) => void];
```

It is a subtype of the type returned by React's `setState` hook, and it is also what you would want to pass to an input element such as a textbox to create a two-way binding. We actually define `StateView` as a subtype of another type called `View`:

```ts
type View<S, A> = readonly [value: A, set: (value: A) => S];
type StateView<A> = View<void, A>;
```

and we define a `Lens` as a function that transforms a `View` into another `View`. To see how this works, consider an example of `objectProp` lens which zooms in on an object's property. Suppose our state is of type

```ts
type State = { a: { b: string; c: string } };
```

We can write a React component as follows, using a `bindingProps` helper function that converts a `StateView` into an object with props `value` and `onChange` that React understands.

```ts
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

A nice thing is that as we get to a point where we need to type 'a', 'b', or 'c' in the code above, TypeScript Intellisense will show correct suggestions. When binding a checkbox, use `bindingPropsCheckbox` instead of `bindingProps` so that `checked` prop would be used instead of `value`.

We can also use `objectProp` lens in the conventional way to immutably set a property nested within a larger structure, as in the below example of a reducer. In this example we also use helper functions `identity` (`const identity = <T>(value: T) => value`), `asView` (also just an identity function but casts the value as `View` to help type inference: `const asView = <S, A>(value: View<S, A>): View<S, A> => value`), and `setInView` (`applyPipe(view, setInView(value))` is equivalent to `applyPipe(view, ([, set]) => set(value))`).

```ts
const sampleReducer = (state: State, action: { payload: string }) =>
  applyPipe(
    asView([state, identity]),
    objectProp('a'),
    objectProp('b'),
    setInView(action.payload),
  );
```

So for example `sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })` would return `{ a: { b: 'x', c: '' } }`.

In addition to `setInView`, there is `valueInView` (`applyPipe(view, valueInView)` is equivalent to `applyPipe(view, ([value]) => value)`) and `mapInView` (`applyPipe(view, mapInView(value => value + 1))` is equivalent to `applyPipe(view, ([value, set]) => set(value + 1))`).

If the properties in the `State` were optional, we could write our code as follows to have type safety without explicitly specifying types:

```ts
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
```

The library also includes lenses for working with maps (`mapProp`) and sets (`setProp`).

## Miscellaneous

- [`memoize`](https://github.com/obvibase/utils/blob/master/src/lib/memoize.ts): a utility to memoize values using WeakMap.

- [`assertNever`](https://github.com/obvibase/utils/blob/master/src/lib/assertNever.ts): utility used to typecheck that a conditional has exhausted all possibilities, e.g. if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1 ? 'one' : assertNever(a)`.

---

[Contributing guidelines](https://github.com/obvibase/utils/blob/master/.github/CONTRIBUTING.md)
