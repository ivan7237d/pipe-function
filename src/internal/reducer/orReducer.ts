export const orReducer = (
  accumulator: boolean,
  value: boolean,
): boolean | undefined => (accumulator ? undefined : value);
