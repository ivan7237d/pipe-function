# Antiutils

[![npm version](https://badge.fury.io/js/antiutils.svg)](https://badge.fury.io/js/antiutils)
[![gzip size](https://badgen.net/bundlephobia/minzip/antiutils?color=green)](https://bundlephobia.com/result?p=antiutils)
[![tree shaking](https://badgen.net/bundlephobia/tree-shaking/antiutils)](https://bundlephobia.com/result?p=antiutils)

TypeScript/JavaScript utilities for those who don't like utilities.

- [Minimal API](#minimal-api)

- [Pipeline operator ponyfill](#pipeline-operator-ponyfill)

- [Non-mutating functions for working with objects, arrays, maps, and sets](#non-mutating-functions-for-working-with-objects-arrays-maps-and-sets)

- [Functions for working with native iterables](#functions-for-working-with-native-iterables)

- [Comparison functions](#comparison-functions)

- [Reducers](#reducers)

- [Lenses](#lenses)

- [Memoization utilities](#memoization)

- [Functions for downcasting](#functions-for-downcasting)

## Installing

```
yarn add antiutils
```

or

```
npm install antiutils --save
```

## Minimal API

Based on the "only one way to do it" principle, this library provides a utility only when something can't be easily and readably accomplished with vanilla JavaScript. For example, we do not provide a function to get an object's property value, so instead of `get('a')` you would write just `value => value.a`.

## Pipeline operator [ponyfill](https://ponyfill.com/)

The library provides a function `applyPipe` which takes between 1 and 12 arguments. `applyPipe(x, a, b)` is equivalent to `b(a(x))`, or using the pipeline operator, `x |> a |> b`. Type inference works well with this function, and if any one of the proposed flavors of the pipeline operator eventually reaches stage 3 and starts to be supported in TypeScript, it would be straightforward to build a codemod converting this function to the operator.

> :bulb: TIP
>
> At any point in the pipeline, you can insert the `log` function from [1log](https://github.com/ivan7237d/1log) library to log piped values.

## Non-mutating functions for working with objects, arrays, maps, and sets

Objects:

- [`diffObjects`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/diffObjects.ts)

- [`isObject`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/isObject.ts)

- [`objectEntries`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/objectEntries.ts)

- [`objectFromEntries`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/objectFromEntries.ts)

- [`objectKeys`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/objectKeys.ts)

- [`objectValues`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/objectValues.ts)

> :bulb: TIP
>
> If you use TypeScript 4.1+, you can enable strictly checked indexed access using [`--noUncheckedIndexedAccess` compiler flag](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-rc/#no-unchecked-indexed-access).

Arrays:

- [`reverseArray`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/array/reverseArray.ts)

- [`sliceArray`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/array/sliceArray.ts)

- [`sliceReversedArray`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/array/sliceReversedArray.ts)

- [`sortArray`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/array/sortArray.ts)

Maps:

- [`deleteFromMap`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/map/deleteFromMap.ts)

- [`diffMaps`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/map/diffMaps.ts)

- [`setInMap`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/map/setInMap.ts)

Sets:

- [`addToSet`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/set/addToSet.ts)

- [`deleteFromSet`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/set/deleteFromSet.ts)

## Functions for working with native iterables

- [`concatIterables`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/concatIterables.ts)

- [`expandIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/expandIterable.ts)

- [`filterIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/filterIterable.ts)

- [`firstInIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/firstInIterable.ts)

- [`firstIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/firstIterable.ts)

- [`flatMapIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/flatMapIterable.ts)

- [`forEachInIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/forEachInIterable.ts)

- [`isEmptyIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/isEmptyIterable.ts)

- [`lastInIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/lastInIterable.ts)

- [`mapIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/mapIterable.ts)

- [`noneInIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/noneInIterable.ts)

- [`rangeIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/rangeIterable.ts)

- [`reduceIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/reduceIterable.ts)

- [`reverseIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/reverseIterable.ts)

- [`scanIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/scanIterable.ts)

- [`sliceIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/sliceIterable.ts)

- [`sliceReversedIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/sliceReversedIterable.ts)

- [`someInIterable`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/someInIterable.ts)

- [`zipIterables`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/zipIterables.ts)

How-to:

- **Filter an iterable in a way that the type system understands:**

  ```ts
  applyPipe(
    [1, undefined],
    // Equivalent to `filterIterable((value) => value !== undefined)`.
    flatMapIterable((value) => (value !== undefined ? [value] : [])),
  );
  ```

  (type will be inferred as `IterableIterator<number>`, not `IterableIterator<number | undefined>` as would be the case if you used `filterIterable`; the same trick works when filtering arrays and observables).

- **Index elements:** `zipIterables(rangeIterable(), yourIterable)` (returns an iterable of `[<element index>, <element>]`).

- **Get a flag indicating if the element is the first element:** `zipIterables(firstIterable(), yourIterable)` (returns an iterable of `[boolean, <element>]`).

- **Count elements in an iterable:** `applyPipe(yourIterable, reduceIterable(countReducer, 0))`.

- **Find the first element matching a predicate:** `applyPipe(yourIterable, filter(yourPredicate), firstInIterable)`.

- **Yield values while a condition holds:**

  ```ts
  applyPipe(
    [1, 2, 3, 2],
    scanIterable((...[, value]) => (value <= 2 ? value : undefined)),
  );
  ```

  (yields `1`, `2`, see [`scanIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/scanIterable.ts) and _[Reducers](#reducers)_).

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
interface CompareFunction<T> {
  (to: T, from: T): number;
}

interface EqualFunction<T> {
  (from: T, to: T): boolean;
}
```

It provides implementations of `CompareFunction` for primitive types:

- [`booleanCompare`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/compare/booleanCompare.ts)

- [`numberCompare`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/compare/numberCompare.ts)

- [`reverseCompare`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/compare/reverseCompare.ts)

- [`stringCompare`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/compare/stringCompare.ts)

and a function [`lexicographicCompare`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/compare/lexicographicCompare.ts) to compose `CompareFunction`s.

It also provides implementations of `EqualFunction` for objects, iterables, maps, and sets:

- [`objectsEqual`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/object/objectsEqual.ts)

- [`iterablesEqual`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/iterable/iterablesEqual.ts)

- [`mapsEqual`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/map/mapsEqual.ts)

- [`setsEqual`](https://github.com/ivan7237d/antiutils/tree/master/src/internal/set/setsEqual.ts)

and a function [`deepEqual`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/deepEqual.ts) that recursively delegates to those functions depending on the object type.

## Reducers

The library exports types

```ts
interface Reducer<Accumulator, Element> {
  (accumulator: Accumulator, element: Element): Accumulator;
}

interface PartialReducer<Accumulator, Element> {
  (accumulator: Accumulator, element: Element): Accumulator | undefined;
}
```

`Reducer` is a regular reducer that can be passed to `reduce` method of an array. `PartialReducer` is like a regular reducer, but can return `undefined` to indicate that the current value of the accumulator should be used as the final result, so functions [`reduceIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/reduceIterable.ts) and [`scanIterable`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/iterable/scanIterable.ts) will stop the iteration short.

The library provides the following implementations of `Reducer`:

- [`countReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/countReducer.ts)

- [`maxReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/maxReducer.ts)

- [`minReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/minReducer.ts)

- [`sumReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/sumReducer.ts)

and the following implementations of `PartialReducer`:

- [`andReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/andReducer.ts)

- [`orReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/reducer/orReducer.ts)

## Lenses

In Antiutils the definition of a lens is based on the concept of a view, which is a combination of a getter and a setter:

```ts
interface View<S, A> {
  get: () => A;
  set: (value: A) => S;
}
```

When generic type `S` is `void`, the setter only performs a side effect - we call this type of view a state view:

```ts
type StateView<A> = View<void, A>;
```

State views are useful when working with React components - for details, see package [`antiutils-react`](https://github.com/ivan7237d/antiutils-react) which provides glue between Antiutils and React.

The setter can also be a pure function that performs a non-mutating update, as in the following view that lets you access property `a` in object `{ a: 1, b: 2 }`:

```ts
const view: View<{ a: number }, number> = {
  get: () => 1,
  set: (value) => ({ a: value, b: 2 }),
};
```

A lens is defined as a function that transforms one view into another view:

```ts
interface Lens<S, A, B> {
  (source: View<S, A>): View<S, B>;
}
```

The library provides the following utilities:

- [`objectProp`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/object/objectProp.ts): returns a lens that zooms in on an object's property.

- [`mapProp`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/map/mapProp.ts): returns a lens that zooms in on a value stored in a `Map` under a specific key.

- [`setProp`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/set/setProp.ts): returns a lens that zooms in on presence of an element in a `Set`.

- [`rootView`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/view/rootView.ts): a function that converts a `value` into a view `{ get: () => value, set: <identity function> }`.

Here is an example using `objectProp` and `rootView`:

```ts
type State = { a: { b: string; c: string } };

/**
 * A reducer that sets the value of `b` in the state to the value provided
 * as action payload.
 **/
const sampleReducer = (state: State, action: { payload: string }) =>
  applyPipe(
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
```

In the code above, TypeScript successfully infers the types, and as we get to a point where we need to type 'a', 'b', or 'c', IntelliSense shows correct suggestions.

A similar example, but with property `a` optional:

```ts
type State = { a?: { b: string; c: string } };

const sampleReducer = (state: State, action: { payload: string }) =>
  applyPipe(
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
```

> :bulb: TIP
>
> You can log views using a plugin from package [1log-antiutils](https://github.com/ivan7237d/1log-antiutils).

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

## Functions for downcasting

The library provides the following identity functions that cast the argument to a type, but unlike TypeScript's `as`, never make type assertions:

- [`asNever`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asNever.ts): a function which has signature `(value: never) => never ` and which throws if called, used to typecheck that a symbol has type `never` and therefore the call site is unreachable. For example, if `a` has type `0 | 1`, you could write `a === 0 ? 'zero' : a === 1 ? 'one' : asNever(a)` to make sure that all possibilities for `a` have been exhausted. If the type of `a` changes to say `0 | 1 | 2`, the type of the argument passed to `asNever` will be inferred as `2`, and this will cause a typechecking error because the only type assignable to `never` is `never` itself.

- [`as`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/as.ts): an identity function with signature `<T>(value: T) => T` that can be used to downcast a value to a non-generic type: `as<YourType>(yourValue)`.

- [`asContext`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asContext.ts): an identity function with signature `<A, B extends A>(value: B) => A` that can be used to infer the type of a value from the context instead of the other way around. As an example, consider the following code that throws if the iterable has more than 1 element:

  ```ts
  applyPipe(
    <some iterable>,
    reduceIterable(
      asContext(() => {
        throw <some error>;
      }),
    ),
  );
  ```

  Without wrapping the reducer in `asContext`, TypeScript would infer the type of the accumulator as `never` and the code would not typecheck.

- [`asCompareFunction`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asCompareFunction.ts), [`asEqualFunction`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asEqualFunction.ts), [`asLens`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asLens.ts), [`asReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asReducer.ts), [`asPartialReducer`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asPartialReducer.ts), [`asStateView`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asStateView.ts), [`asView`](https://github.com/ivan7237d/antiutils/blob/master/src/internal/types/asView.ts): identity functions that can be used to downcast values to any of the generic types defined by the library.

---

[Contributing guidelines](https://github.com/ivan7237d/antiutils/blob/master/.github/CONTRIBUTING.md)
