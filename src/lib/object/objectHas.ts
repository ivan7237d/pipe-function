export const objectHas = <
  T extends { [key: string]: unknown },
  A extends keyof T
>(
  key: A,
) => (obj: T): boolean => key in obj;
