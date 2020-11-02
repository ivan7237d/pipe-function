import { objectsEqual } from './objectsEqual';

it('works', () => {
  expect(objectsEqual({}, {})).toEqual(true);
  expect(objectsEqual({ a: 1 }, {})).toEqual(false);
  expect(objectsEqual({}, { a: 1 })).toEqual(false);
  expect(objectsEqual({ a: 1 }, { a: 1 })).toEqual(true);
  expect(objectsEqual({ a: [1] }, { a: [1] })).toEqual(false);
  expect(
    objectsEqual({ a: [1] }, { a: [1] }, (from, to) => from[0] === to[0]),
  ).toEqual(true);
  expect(
    objectsEqual({ a: [1] }, { a: [2] }, (from, to) => from[0] === to[0]),
  ).toEqual(false);
});
