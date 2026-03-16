# @philiprehberger/ts-predicate

[![CI](https://github.com/philiprehberger/ts-predicate/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-predicate/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-predicate.svg)](https://www.npmjs.com/package/@philiprehberger/ts-predicate)
[![License](https://img.shields.io/github/license/philiprehberger/ts-predicate)](LICENSE)

Composable predicate builders for filtering and validation.

## Installation

```bash
npm install @philiprehberger/ts-predicate
```

## Usage

```ts
import { is, where, and, or, not } from '@philiprehberger/ts-predicate';

users.filter(where({
  age: is.gte(18),
  status: is.in(['active', 'verified']),
}));

const isSpecial = or(
  is.property('role', is.equal('admin')),
  and(is.property('tenure', is.gt(5)), is.property('rating', is.gte(4.5))),
);
```

## API

| Function | Description |
|----------|-------------|
| `is.equal(v)` | Strict equality |
| `is.gt(n)` / `is.gte(n)` / `is.lt(n)` / `is.lte(n)` | Numeric comparisons |
| `is.between(a, b)` | Inclusive range |
| `is.match(regex)` | Regex test |
| `is.startsWith(s)` / `is.endsWith(s)` / `is.includes(s)` | String checks |
| `is.in(values)` | Value in array |
| `is.property(key, predicate)` | Check object property |
| `and(...predicates)` | All must pass |
| `or(...predicates)` | Any must pass |
| `not(predicate)` | Invert predicate |
| `where(shape)` | Object shape predicate |

## License

MIT
