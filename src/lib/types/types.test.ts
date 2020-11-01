import { applyPipe } from '../applyPipe';
import { forEachInIterable } from '../iterable/forEachInIterable';
import { asView } from './asView';

const identityFunctions = [asView] as ((value: unknown) => unknown)[];

it('works', () => {
  applyPipe(
    identityFunctions,
    forEachInIterable((f) => {
      const obj = {};
      expect(f(obj as unknown)).toBe(obj);
    }),
  );
});
