import { memoizeWeak } from './memoizeWeak';

it('works', () => {
  const a = [0] as const;
  const b = [1] as const;
  const callback = jest.fn(([value]: readonly [number]) => value);
  const decorated = memoizeWeak(callback);
  expect(decorated(a)).toEqual(0);
  expect(callback.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Array [
          0,
        ],
      ],
    ]
  `);
  callback.mockClear();
  expect(decorated(a)).toEqual(0);
  expect(callback.mock.calls).toMatchInlineSnapshot(`Array []`);
  expect(decorated(b)).toEqual(1);
  expect(callback.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Array [
          1,
        ],
      ],
    ]
  `);
});
