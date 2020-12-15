import { memoizeStrong } from './memoizeStrong';

it('works', () => {
  const a = 42;
  const b = 43;
  const callback = jest.fn((value) => value + 10);
  const decorated = memoizeStrong(callback);
  expect(decorated(a)).toMatchInlineSnapshot(`52`);
  expect(callback.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        42,
      ],
    ]
  `);
  callback.mockClear();
  expect(decorated(a)).toMatchInlineSnapshot(`52`);
  expect(callback.mock.calls).toMatchInlineSnapshot(`Array []`);
  expect(decorated(b)).toMatchInlineSnapshot(`53`);
  expect(callback.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        43,
      ],
    ]
  `);
});
