import { StateView } from './types';

export const asStateView = <A>(value: StateView<A>): StateView<A> => value;
