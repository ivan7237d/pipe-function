import { applyPipe } from '../applyPipe';
import { View } from '../types/types';
import { deleteFromMap } from './deleteFromMap';
import { setInMap } from './setInMap';

/**
 * A lens for zooming in on a map's property.
 */
export const mapProp = <S, Key, Value>(key: Key) => ([map, set]: readonly [
  value: ReadonlyMap<Key, Value>,
  set: (value: Map<Key, Value>) => S,
]): View<S, Value | undefined> => [
  map.get(key),
  (value) =>
    set(
      applyPipe(
        map,
        value === undefined ? deleteFromMap(key) : setInMap(key, value),
      ) as Map<Key, Value>,
    ),
];
