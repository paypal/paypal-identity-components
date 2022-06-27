## PayPal Auth Components

[![npm version](https://img.shields.io/npm/v/@paypal/identity-components.svg?style=flat-square)](https://www.npmjs.com/package/@paypal/identity-components)

## Development

Please feel free to follow the [Contribution Guidelines](./CONTRIBUTING.md) to contribute to this repository. PRs are welcome, but for major changes please raise an issue first.

### Quick Setup

Set up your env:

```bash
npm install
```

Run tests:

```bash
npm test
```

Run in dev mode:

```bash
npm run dev
```

## Test Tasks

```
npm test
```

| Flags         | Description                                  |
| ------------- | -------------------------------------------- |
| --clear-cache | Clear Babel Loader and PhantomJS cache       |
| --debug       | Debug mode. PhantomJS, Karma, and AuthJS     |
| --quick       | Fastest testing. Minimal output, no coverage |
| --browser     | Choose Browser                               |

## Releasing

This package is published weekly, **Every Wednesday**. Please [view our Changelog](CHANGELOG.md) to stay updated with bug fixes and new features.
