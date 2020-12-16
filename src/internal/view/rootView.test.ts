import { rootView } from './rootView';

it('works', () => {
  expect(rootView(1).get()).toEqual(1);
  expect(rootView(1).set(2)).toEqual(2);
});
