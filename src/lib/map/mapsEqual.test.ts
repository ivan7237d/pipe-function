import { mapsEqual } from './mapsEqual';

it('works', () => {
  expect(mapsEqual(new Map(), new Map())).toEqual(true);
  expect(mapsEqual(new Map([['a', 1]]), new Map())).toEqual(false);
  expect(mapsEqual(new Map(), new Map([['a', 1]]))).toEqual(false);
  expect(mapsEqual(new Map([['a', 1]]), new Map([['a', 1]]))).toEqual(true);
  expect(mapsEqual(new Map([['a', [1]]]), new Map([['a', [1]]]))).toEqual(
    false,
  );
  expect(
    mapsEqual(
      new Map([['a', [1]]]),
      new Map([['a', [1]]]),
      (from, to) => from[0] === to[0],
    ),
  ).toEqual(true);
  expect(
    mapsEqual(
      new Map([['a', [1]]]),
      new Map([['a', [2]]]),
      (from, to) => from[0] === to[0],
    ),
  ).toEqual(false);
});
