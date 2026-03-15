import type { Predicate } from './types';

export function where<T extends Record<string, unknown>>(
  shape: { [K in keyof T]?: Predicate<T[K]> },
): Predicate<T> {
  return (value) => {
    for (const key of Object.keys(shape) as (keyof T)[]) {
      const predicate = shape[key];
      if (predicate && !predicate(value[key])) return false;
    }
    return true;
  };
}
