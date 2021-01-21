import { someInIterable } from './someInIterable';

export const noneInIterable = (source: Iterable<boolean>): boolean =>
  !someInIterable(source);
