export const reverseArray = <T>(arr: T[]): T[] => {
  const copy = [...arr];
  copy.reverse();
  return copy;
};
