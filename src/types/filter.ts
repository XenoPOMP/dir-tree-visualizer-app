import type { Defined } from 'xenopomp-essentials';

/** Exports Array.sort type. */
export type SortPredicate<T> = Defined<Parameters<Array<T>['sort']>[0]>;
