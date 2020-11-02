import { applyPipe } from '../applyPipe';
import { Lens } from '../types/types';
import { deleteFromMap } from './deleteFromMap';
import { setInMap } from './setInMap';

/**
 * A lens for zooming in on a map's property.
 */
export const mapProp = <S, Key, Value>(
  key: Key,
): Lens<S, ReadonlyMap<Key, Value>, Value | undefined> => ([map, set]) => [
  map.get(key),
  (value) =>
    set(
      applyPipe(
        map,
        value === undefined ? deleteFromMap(key) : setInMap(key, value),
      ),
    ),
];
