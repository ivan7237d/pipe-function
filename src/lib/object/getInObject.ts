export const getInObject = <
  T extends { [key: string]: unknown },
  A extends keyof T
>(
  key: A,
) => (obj: T) => obj[key];
