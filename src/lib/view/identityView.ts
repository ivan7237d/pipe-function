import { identity } from '../identity';
import { View } from '../types/types';

/**
 * Converts a value to a view `[value, identity]`.
 */
export const identityView = <S>(value: S): View<S, S> => [value, identity];
