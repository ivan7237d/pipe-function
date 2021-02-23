import { pipe } from '../pipe';
import { rootView } from '../view/rootView';
import { setProp } from './setProp';

it('works', () => {
  const setView = rootView(new Set([1]));
  expect(pipe(setView, setProp(1)).set(false)).toMatchInlineSnapshot(`Set {}`);
  expect(pipe(setView, setProp(2)).set(true)).toMatchInlineSnapshot(`
    Set {
      1,
      2,
    }
  `);
  expect(pipe(setView, setProp(1)).get()).toMatchInlineSnapshot(`true`);
  expect(pipe(setView, setProp(2)).get()).toMatchInlineSnapshot(`false`);
});
