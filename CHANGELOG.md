# next-use-contextual-routing

## 4.0.0

### Major Changes

- d906493: refactor: drop support for Next.js v13/v14
- 51967c2: refactor: compile to ES6

### Minor Changes

- d906493: feat: support Next.js v15
- 232c3b3: refactor: remove qs-stringify dependency in favour of native URLSearchParams

## 3.2.0

### Minor Changes

- 638f4ed: Support next.js v14

## 3.1.0

### Minor Changes

- 4b0cd8a: Undeprecate project

## 3.0.2

### Deprecate project

## 3.0.1

### Bugfixes

- Enable module type in package.json

## 3.0.0

### Breaking Changes

- Support only Next.js v13+ and React v18+

## 2.2.0

### New Features

- Support Next.js v10 -> v12.x

## 2.1.0

### New Features

- Widen peerDependencies to include Next.js v10 & v11

## 2.0.0

### Breaking Changes

- `contextualHref` replaced by `makeContextualHref` function

### New Features

- Support navigation with `history.back` and browser's back button
- Enable providing extra router params to contextual navigation `href`'s

### Minor Changes

- Replace `query-string` with `qs-stringify` (-1.7 kb gzipped)

## 1.0.0

Initial release
