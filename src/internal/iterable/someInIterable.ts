import { andReducer } from '../reducer/andReducer';
import { reduceIterable } from './reduceIterable';

export const someInIterable: (
  source: Iterable<boolean>,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
) => boolean = reduceIterable(andReducer, true as boolean);
