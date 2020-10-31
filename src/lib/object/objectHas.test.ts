import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { objectHas } from './objectHas';

it('works', () => {
  expect(
    applyPipe(
      identity<{ a: number; b?: number }>({ a: 0 }),
      objectHas('a'),
    ),
  ).toMatchInlineSnapshot(`true`);

  expect(
    applyPipe(
      identity<{ a: number; b?: number }>({ a: 0 }),
      objectHas('b'),
    ),
  ).toMatchInlineSnapshot(`false`);
});
