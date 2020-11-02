import { applyPipe } from '../applyPipe';
import { iterableToSet } from './iterableToSet';

it('works', () => {
  const source = [0, 1] as const;
  expect(applyPipe(iterableToSet(source))).toMatchInlineSnapshot(`
    Set {
      0,
      1,
    }
  `);
});
