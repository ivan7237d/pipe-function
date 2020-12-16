import { View } from '../types/types';

export const rootView = <Value>(value: Value): View<Value, Value> => ({
  get: () => value,
  set: (value) => value,
});
