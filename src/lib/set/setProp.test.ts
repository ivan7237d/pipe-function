import { applyPipe } from '../applyPipe';
import { identity } from '../identity';
import { asView } from '../types/asView';
import { setInView } from '../view/setInView';
import { iterableToSet } from './iterableToSet';
import { setProp } from './setProp';

it('works', () => {
  const setView = asView([applyPipe([1], iterableToSet), identity]);
  expect(
    applyPipe(setView, setProp(1), setInView(false)),
  ).toMatchInlineSnapshot(`Set {}`);
  expect(applyPipe(setView, setProp(2), setInView(true)))
    .toMatchInlineSnapshot(`
    Set {
      1,
      2,
    }
  `);
});
