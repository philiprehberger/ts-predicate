import type { Predicate } from './types';

export function and<T>(...predicates: Predicate<T>[]): Predicate<T> {
  return (value) => predicates.every((p) => p(value));
}

export function or<T>(...predicates: Predicate<T>[]): Predicate<T> {
  return (value) => predicates.some((p) => p(value));
}

export function not<T>(predicate: Predicate<T>): Predicate<T> {
  return (value) => !predicate(value);
}
