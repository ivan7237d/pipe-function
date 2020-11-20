import { applyPipe } from '../applyPipe';
import { StateView } from '../types/types';
import { bindingProps } from './bindingProps';

it('works', () => {
  const state = { value: 'a' };
  const { value, onChange } = applyPipe(
    [
      state.value,
      (value) => {
        state.value = value;
      },
    ] as StateView<string>,
    bindingProps,
  );
  expect(value).toEqual('a');
  onChange({ currentTarget: { value: 'b' } });
  expect(state.value).toEqual('b');
});
