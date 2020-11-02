import { applyPipe } from '../applyPipe';
import { identityView } from '../view/identityView';
import { setInView } from '../view/setInView';
import { iterableToSet } from './iterableToSet';
import { setProp } from './setProp';

it('works', () => {
  const setView = identityView(applyPipe([1], iterableToSet));
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
