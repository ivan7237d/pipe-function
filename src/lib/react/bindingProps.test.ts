import { applyPipe } from '../applyPipe';
import { asStateView } from '../types/asStateView';
import { bindingProps } from './bindingProps';

it('works', () => {
  const state = { value: 'a' };
  const { value, onChange } = applyPipe(
    asStateView([
      state.value,
      (value) => {
        state.value = value;
      },
    ]),
    bindingProps,
  );
  expect(value).toEqual('a');
  onChange({ currentTarget: { value: 'b' } });
  expect(state.value).toEqual('b');
});
