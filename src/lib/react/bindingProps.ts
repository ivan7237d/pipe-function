import { StateView } from '../types/types';

export const bindingProps = <Value>([value, set]: StateView<Value>): {
  value: Value;
  onChange: ({
    currentTarget: { value },
  }: {
    currentTarget: {
      value: Value;
    };
  }) => void;
} => ({
  value,
  onChange: ({ currentTarget: { value } }) => {
    set(value);
  },
});
