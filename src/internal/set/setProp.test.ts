import { applyPipe } from '../applyPipe';
import { rootView } from '../view/rootView';
import { setProp } from './setProp';

it('works', () => {
  const setView = rootView(new Set([1]));
  expect(applyPipe(setView, setProp(1)).set(false)).toMatchInlineSnapshot(
    `Set {}`,
  );
  expect(applyPipe(setView, setProp(2)).set(true)).toMatchInlineSnapshot(`
    Set {
      1,
      2,
    }
  `);
  expect(applyPipe(setView, setProp(1)).get()).toMatchInlineSnapshot(`true`);
  expect(applyPipe(setView, setProp(2)).get()).toMatchInlineSnapshot(`false`);
});
