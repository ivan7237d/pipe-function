import { applyPipe } from '../applyPipe';
import { asStateView } from '../types/asStateView';
import { bindingPropsCheckbox } from './bindingPropsCheckbox';

it('works', () => {
  const state = { checked: false };
  const { checked, onChange } = applyPipe(
    asStateView([
      state.checked,
      (checked) => {
        state.checked = checked;
      },
    ]),
    bindingPropsCheckbox,
  );
  expect(checked).toEqual(false);
  onChange({ currentTarget: { checked: true } });
  expect(state.checked).toEqual(true);
});
