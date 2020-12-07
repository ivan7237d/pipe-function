import { applyPipe } from '../applyPipe';
import { mapIterable } from './mapIterable';
import { sliceIterable } from './sliceIterable';

const genericTest = (useArray: boolean) => {
  const maybeSubstituteIterable = <T>(source: T[]) =>
    useArray
      ? source
      : applyPipe(
          source,
          mapIterable((value) => value),
        );
  expect([
    ...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable(1, 2)),
  ]).toMatchInlineSnapshot(`
    Array [
      2,
    ]
  `);
  expect([
    ...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable(0, 3)),
  ]).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect([
    ...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable(-1, 4)),
  ]).toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect([...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable(1))])
    .toMatchInlineSnapshot(`
    Array [
      2,
      3,
    ]
  `);
  expect([
    ...applyPipe(
      [1, 2, 3],
      maybeSubstituteIterable,
      sliceIterable(undefined, 2),
    ),
  ]).toMatchInlineSnapshot(`
    Array [
      1,
      2,
    ]
  `);
  expect([
    ...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable(3, 2)),
  ]).toMatchInlineSnapshot(`Array []`);
  expect([
    ...applyPipe(
      [1, 2, 3],
      maybeSubstituteIterable,
      sliceIterable(undefined, -1),
    ),
  ]).toMatchInlineSnapshot(`Array []`);
  expect([...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable(-1))])
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
  expect([...applyPipe([1, 2, 3], maybeSubstituteIterable, sliceIterable())])
    .toMatchInlineSnapshot(`
    Array [
      1,
      2,
      3,
    ]
  `);
};

it('works for arrays', () => {
  genericTest(true);
});

it('works for non-array iterables', () => {
  genericTest(false);
});
