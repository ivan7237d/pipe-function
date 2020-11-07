export const objectHas = <T, A extends keyof T>(key: A) => (obj: T): boolean =>
  key in obj;
