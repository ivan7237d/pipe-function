import { isObject } from './isObject';

it('works', () => {
  expect(isObject({})).toEqual(true);
  expect(isObject([])).toEqual(true);
  expect(isObject(() => {})).toEqual(false);
  expect(isObject(null)).toEqual(false);
  expect(isObject(1)).toEqual(false);
});
