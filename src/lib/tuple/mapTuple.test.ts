import { applyPipe } from '../applyPipe';
import { mapTuple } from './mapTuple';

it('works', () => {
  expect(
    applyPipe(
      [0, 1],
      mapTuple((value) => value + 10),
    ),
  ).toMatchInlineSnapshot(`
    Array [
      10,
      11,
    ]
  `);
});
