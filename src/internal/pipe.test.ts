import { pipe } from './pipe';

const addSuffix = (index: number) => (value: string) => `${value}-${index}`;

it('works', () => {
  expect(pipe('base')).toMatchInlineSnapshot(`"base"`);
  expect(pipe('base', addSuffix(1))).toMatchInlineSnapshot(`"base-1"`);
  expect(
    pipe(
      'base',
      addSuffix(1),
      addSuffix(2),
      addSuffix(3),
      addSuffix(4),
      addSuffix(5),
      addSuffix(6),
      addSuffix(7),
      addSuffix(8),
      addSuffix(9),
      addSuffix(10),
      addSuffix(11),
    ),
  ).toMatchInlineSnapshot(`"base-1-2-3-4-5-6-7-8-9-10-11"`);
});
