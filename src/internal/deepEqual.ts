import { iterablesEqual } from './iterable/iterablesEqual';
import { mapsEqual } from './map/mapsEqual';
import { isObject } from './object/isObject';
import { objectsEqual } from './object/objectsEqual';
import { setsEqual } from './set/setsEqual';

export const deepEqual = <T>(from: T, to: T): boolean =>
  from === to
    ? true
    : Array.isArray(from) && Array.isArray(to)
    ? iterablesEqual(from, to, deepEqual)
    : from instanceof Map && to instanceof Map
    ? mapsEqual(from, to, deepEqual)
    : from instanceof Set && to instanceof Set
    ? setsEqual(from, to)
    : isObject(from) && isObject(to)
    ? objectsEqual(from, to, deepEqual)
    : false;
