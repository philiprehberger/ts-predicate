import type { Predicate } from './types';

export const is = {
  equal: <T>(expected: T): Predicate<T> => (value) => value === expected,
  gt: (n: number): Predicate<number> => (value) => value > n,
  gte: (n: number): Predicate<number> => (value) => value >= n,
  lt: (n: number): Predicate<number> => (value) => value < n,
  lte: (n: number): Predicate<number> => (value) => value <= n,
  between: (a: number, b: number): Predicate<number> => (value) => value >= a && value <= b,
  match: (regex: RegExp): Predicate<string> => (value) => regex.test(value),
  startsWith: (s: string): Predicate<string> => (value) => value.startsWith(s),
  endsWith: (s: string): Predicate<string> => (value) => value.endsWith(s),
  includes: (s: string): Predicate<string> => (value) => value.includes(s),
  in: <T>(values: T[]): Predicate<T> => (value) => values.includes(value),
  instanceOf: <T>(cls: new (...args: any[]) => T): Predicate<unknown> =>
    (value): boolean => value instanceof cls,
  property: <T, K extends keyof T>(key: K, predicate: Predicate<T[K]>): Predicate<T> =>
    (value) => predicate(value[key]),
} as const;
