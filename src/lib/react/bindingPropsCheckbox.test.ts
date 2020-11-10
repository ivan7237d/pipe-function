import { applyPipe } from '../applyPipe';
import { StateView } from '../types/types';
import { bindingPropsCheckbox } from './bindingPropsCheckbox';

it('works', () => {
  const state = { checked: false };
  const { checked, onChange } = applyPipe(
    [
      state.checked,
      (checked) => {
        state.checked = checked;
      },
    ] as StateView<boolean>,
    bindingPropsCheckbox,
  );
  expect(checked).toEqual(false);
  onChange({ currentTarget: { checked: true } });
  expect(state.checked).toEqual(true);
});
