export const andReducer = (
  accumulator: boolean,
  value: boolean,
): boolean | undefined => (accumulator ? value : undefined);
