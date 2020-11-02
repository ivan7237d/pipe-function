import { applyPipe } from '../applyPipe';
import { iterableToMap } from './iterableToMap';

it('works', () => {
  const source = [
    ['a', 0],
    ['b', 1],
    ['c', undefined],
  ] as const;
  expect(applyPipe(iterableToMap(source))).toMatchInlineSnapshot(`
    Map {
      "a" => 0,
      "b" => 1,
      "c" => undefined,
    }
  `);
});
