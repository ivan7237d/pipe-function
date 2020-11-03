import { StateView } from '../types/types';

export const bindingPropsCheckbox = ([checked, set]: StateView<boolean>): {
  checked: boolean;
  onChange: ({
    currentTarget: { checked },
  }: {
    currentTarget: {
      checked: boolean;
    };
  }) => void;
} => ({
  checked,
  onChange: ({ currentTarget: { checked } }) => {
    set(checked);
  },
});
