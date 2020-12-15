# Antiutils

[![npm version](https://badge.fury.io/js/antiutils.svg)](https://badge.fury.io/js/antiutils)
[![gzip size](https://badgen.net/bundlephobia/minzip/antiutils?color=green)](https://bundlephobia.com/result?p=antiutils)
[![gzip size](https://badgen.net/bundlephobia/tree-shaking/antiutils)](https://bundlephobia.com/result?p=antiutils)

TypeScript/JavaScript utilities for those who don't like utilities.

- [Minimal API](#minimal-api).

- [Pipeline operator ponyfill](#pipeline-operator-ponyfill).

- [Non-mutating functions for working with objects, arrays, maps, and sets](#objects-arrays-maps-and-sets).

- [Functions for working with native `Iterable`s](#iterables).

- [Basic comparison functions](#comparison-functions).

- [Basic reducers](#reducers).

- [React-friendly lenses](#lenses).

- [Memoization utilities](#memoization).

- Designed with an eye to type inference.

## Status

Experimental. The library is feature-complete and has near-full unit test coverage, but there may be major version bumps in response to initial feedback.

## Installing

```
yarn add antiutils
```

or

```
npm install antiutils --save
```

## Minimal API

Based on the "only one way to do it" principle, this library provides a utility only when something can't be easily and readably done with vanilla JavaScript. For example, we do not provide a function to get an object's property value, so instead of `get('a')` you would just write `value => value.a`. This is because we see the mental overhead of choosing among multiple ways to write a piece of code as higher cost compared to doing more typing.

That said, we do sometimes provide a shortcut for what would otherwise be a one-liner, such as `lastInIterable` for `reduceIterable((...[, value]) => value)` - not for conciseness or performance, but to improve readability.

## Pipeline operator [ponyfill](https://ponyfill.com/)

The library includes a function `applyPipe` which takes between 1 and 12 arguments: `applyPipe(x, a, b)` is equivalent to `b(a(x))`, or using the pipeline operator, `x |> a |> b`. Type inference works well with this function, and if any one of the proposed flavors of the pipeline operator eventually reaches stage 3 and starts to be supported in TypeScript, it would be straightforward to build a codemod to convert the function to the operator.

The library intentionally doesn't include a `pipe` function that would compose functions without applying the resulting function to an argument, mainly because this would go against "only one way to do it".

## Objects, arrays, maps and sets

The library includes non-mutating functions for working with [objects](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object), [arrays](https://github.com/ivan7237d/antiutils/tree/master/src/internal/array), [maps](https://github.com/ivan7237d/antiutils/tree/master/src/internal/map), and [sets](https://github.com/ivan7237d/antiutils/tree/master/src/internal/set).

> :bulb: TIP
>
> If you use TypeScript 4.1+, make sure you enable strictly checked indexed access using [`--noUncheckedIndexedAccess` compiler flag](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-rc/#no-unchecked-indexed-access).

## Iterables

[Functions for working with iterables](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable) have signatures that try to stay close to corresponding native array methods and RxJS operators.

How-to:

- **Filter an iterable in a way that the type system understands:**

  ```ts
  applyPipe(
    [1, undefined],
    // Equivalent to `filterIterable((value) => value !== undefined)`.
    flatMapIterable((value) => (value !== undefined ? [value] : [])),
  );
  ```

  (type will be inferred as `Iterable<number>`, not `Iterable<number | undefined>` as would be the case if you used `filterIterable`; the same trick works when filtering arrays and observables).

- **Get an element's index:** `zipIterables(rangeIterable(), yourIterable)` (returns an iterable of `[<element index>, <element>]`).

- **Get a flag indicating if the element is the first element:** `zipIterables(firstIterable, yourIterable)` (returns an iterable of `[boolean, <element>]`).

- **Count elements in an iterable:**: `applyPipe(yourIterable, reduceIterable(countReducer, 0))`.

- **Check if every element in an iterable is true:** `applyPipe(yourIterableOfBooleans, reduceIterable(andReducer, true))` (iteration will not continue unnecessarily because of how [`reduceIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/reduceIterable.ts) and [`andReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/andReducer.ts) are defined).

- **Check if some elements in an iterable are true:** `applyPipe(yourIterableOfBooleans, reduceIterable(orReducer, false))`.

- **Find the first element matching a predicate:** `applyPipe(yourIterable, filter(yourPredicate), firstInIterable)`.

- **Yield values while a condition holds:**

  ```ts
  applyPipe(
    [1, 2, 3, 2],
    scanIterable((...[, value]) => (value <= 2 ? value : undefined)),
  );
  ```

  (yields `1`, `2`, see [`scanIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/scanIterable.ts)).

- **Also yield the value that broke the condition:**

  ```ts
  applyPipe(
    [1, 2, 3, 2],
    scanIterable((accumulator, value) =>
      accumulator <= 2 ? value : undefined,
    ),
  );
  ```

  (yields `1`, `2`, `3`).

## Comparison functions

The library exports types

```ts
type CompareFunction<T> = (to: T, from: T) => number;
type EqualFunction<T> = (from: T, to: T) => boolean;
```

It [provides](https://github.com/ivan7237d/antiutils/tree/master/src/internal/compare) implementations of `CompareFunction` for primitive types and a function `lexicographicCompare` to compose `CompareFunction`s.

It also provides implementations of `EqualFunction` for objects, iterables, maps, and sets, and a function [`deepEqual`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/deepEqual.ts) that recursively delegates to those functions depending on the object type.

## Reducers

The library exports a type

```ts
type Reducer<Accumulator, Element> = (
  accumulator: Accumulator,
  element: Element,
) => Accumulator | undefined;
```

which is like a regular reducer, but can return `undefined` to stop the iteration short, and which is used by functions [`reduceIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/reduceIterable.ts) and [`scanIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/scanIterable.ts).

The library includes [basic implementations of this type](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer), all of which except the boolean ones (`andReducer` and `orReducer`) can also be used with arrays and observables.

## Lenses

First let's talk about how we define a lens. When building React components, it's convenient to work with a type which we'll call `StateView`, a combination of a value and a setter:

```ts
type StateView<A> = [value: A, set: (value: A) => void];
```

Values returned by React's `setState` hook can be treated as values of this type, and it is also what you would want to pass to an input element such as a textbox to create a two-way binding. In this library we actually define `StateView` as a subtype of another type called `View` (you'll soon see why):

```ts
type View<S, A> = [value: A, set: (value: A) => S];
type StateView<A> = View<void, A>;
```

and we define a `Lens` as a function that transforms a view `View<S, A>` into another view `View<S, B>` (it follows that a lens will transform a `StateView` into another `StateView`).

To see how this works, we'll write a React component using the following two functions provided by the library:

- [`objectProp`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/object/objectProp.ts): a lens which zooms in on an object's property, e.g. `objectProp('a')` will transform a value of type `StateView<{ a: number }>` into a value of type `StateView<number>`.

- [`bindingProps`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/react/bindingProps.ts): a helper function that converts a `StateView` into an object with props that React input components understand, e.g. `['x', set]` would be transformed into `{ value: 'x', onChange: ({ currentTarget: { value } }) => set(value) }`.

Here's what the component will look like:

```ts
type State = { a: string; b?: { c: string } };

/**
 * A component that encapsulates presentation logic but is agnostic as to how we
 * manage state.
 */
const StatelessComponent = ({ stateView }: { stateView: StateView<State> }) => (
  <div>
    {/* An input bound to 'a'. */}
    <input {...applyPipe(stateView, objectProp('a'), bindingProps)} />
    {applyPipe(stateView, objectProp('b'), ([value, set]) =>
      // If 'b' is absent,...
      value === undefined ? (
        // ...a button that adds a default value for 'b',...
        <button onClick={() => set({ c: '' })}>Add 'b'</button>
      ) : (
        // ...otherwise (if 'b' is present), an input bound to 'c'.
        <input
          {...applyPipe([value, set] as const, objectProp('c'), bindingProps)}
        />
      ),
    )}
  </div>
);

export const StatefulComponent = () => {
  const stateView = React.useState<State>({ a: '' });
  return <StatelessComponent {...{ stateView }} />;
};
```

In the code above, TypeScript successfully infers the types, and as we get to a point where we need to type 'a', 'b', or 'c', IntelliSense shows correct suggestions.

Checkbox is different from other inputs in that we have to use `checked` prop instead of `value`, so when binding a checkbox, instead of `bindingProps` use [`bindingPropsCheckbox`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/react/bindingPropsCheckbox.ts).

In the component example we used `objectProp` lens to transform a `StateView` into another `StateView`, but like other lenses, it also works on `StateView`'s supertype `View`. Thanks to that, we can use `objectProp` in the conventional way to immutably set a property nested within a larger structure, as in the following example of a reducer that sets the value of `b` in `{ a: { b: string; c: string } }`:

```ts
type State = { a: { b: string; c: string } };

const sampleReducer = (state: State, action: { payload: string }) =>
  applyPipe(
    [state, (value) => value] as View<State, State>,
    // Transforms values into `View<State, { b: string; c: string }>`.
    objectProp('a'),
    // Transforms values into `View<State, string>`.
    objectProp('b'),
    // `set` takes a value for `b` and returns a new `State`.
    ([, set]) => set(action.payload),
  );

expect(sampleReducer({ a: { b: '', c: '' } }, { payload: 'x' })).toEqual({
  a: { b: 'x', c: '' },
});
```

There is a simple helper function [`rootView`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/view/rootView.ts) which converts a `value` into a view `[value, <identity function>]` and which we can use to replace the first argument in the `applyPipe` call above, including the type signature, with just `rootView(state)`.

The only other lens-related utilities that are left to mention are:

- [`mapProp`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/map/mapProp.ts): a lens to zoom in on a value stored in a `Map`.

- [`setProp`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/set/setProp.ts): a lens to zoom in on presence of an element in a `Set`.

## Memoization

The library provides utilities [`memoizeWeak`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/memoize/memoizeWeak.ts) and [`memoizeStrong`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/memoize/memoizeStrong.ts) to memoize functions that take a single argument. Internally they cache results in respectively a WeakMap and a Map, with arguments as keys and results as values. `memoizeWeak` has an advantage that retaining a reference to the memoized function will not prevent cached arguments and results from being garbage-collected, but it can only memoize functions that take objects (not primitive values) as arguments, because only objects can be used as keys in a WeakMap.

> :bulb: TIP
>
> You can combine `memoizeWeak` and `memoizeStrong` to memoize a function that takes multiple arguments, some of them primitive values, e.g.
>
> ```ts
> const original = (x: { a: number }, y: number) => x.a + y;
> const memoized = memoizeWeak((x: { a: number }) =>
>   memoizeStrong((y: number) => original(x, y)),
> );
> const withRestoredSignature = (x: { a: number }, y: number) => memoized(x)(y);
> ```

The library also provides a function [`teach`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/memoize/teach.ts) for cases when you need to teach a memoized function to return a result already known from an external source such as persisted storage, and a function [`knows`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/memoize/knows.ts) to check if there is a cached result for a given argument.

## Miscellaneous

- [`assertNever`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/assertNever.ts): utility used to typecheck that a conditional has exhausted all possibilities, e.g. if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1 ? 'one' : assertNever(a)`.

---

[Contributing guidelines](https://github.com/ivan7237d/antiutils/blob/master/.github/CONTRIBUTING.md)
