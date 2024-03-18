# Nuxt Dayjs business days plugin

Extend [dayjs-nuxt](https://github.com/fumeapp/dayjs) plugin with business days via [@reediculous456/dayjs-business-days](https://github.com/reediculous456/dayjs-business-days) plugin

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-dayjs-i18n` dependency to your project

```bash
# Using pnpm
pnpm add -D @gabortorma/nuxt-dayjs-business-days

# Using yarn
yarn add --dev @gabortorma/nuxt-dayjs-business-days

# Using npm
npm install --save-dev @gabortorma/nuxt-dayjs-business-days
```

2. Add `nuxt-dayjs-business-days` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['nuxt-dayjs', '@gabortorma/nuxt-dayjs-business-days'],
})
```

## Configuration

You can specify the special dates, debug and verbose options

```ts
export default defineNuxtConfig({
  ...
  dayjsBusinessDays: {
    holidays: ['2022-11-01'],
    additionalWorkingDays: ['2022-10-15'],
    holidayFormat: 'YYYY-MM-DD', // default
    additionalWorkingDayFormat: 'YYYY-MM-DD', // default
    debug: true, // default: false
    verbose: true, // default: false
  }
  ...
})
```

## Usage Guide

See the original plugin: [@reediculous456/dayjs-business-days](https://github.com/reediculous456/dayjs-business-days)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
