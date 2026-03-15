export type Predicate<T> = (value: T) => boolean;

export type PredicateShape<T> = {
  [K in keyof T]?: Predicate<T[K]>;
};
