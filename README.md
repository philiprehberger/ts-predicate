# @philiprehberger/predicate-ts

[![CI](https://github.com/philiprehberger/predicate-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/predicate-ts/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/predicate-ts.svg)](https://www.npmjs.com/package/@philiprehberger/predicate-ts)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/predicate-ts)](https://github.com/philiprehberger/predicate-ts/commits/main)

Composable predicate builders for filtering and validation

## Installation

```bash
npm install @philiprehberger/predicate-ts
```

## Usage

```ts
import { is, where, and, or, not } from '@philiprehberger/predicate-ts';

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

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/predicate-ts)

🐛 [Report issues](https://github.com/philiprehberger/predicate-ts/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/predicate-ts/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
